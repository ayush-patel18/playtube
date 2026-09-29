// SQLite connection, schema and first-run seed data.
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const file = process.env.DB_FILE || path.join(__dirname, '..', 'data', 'playtube.db');
fs.mkdirSync(path.dirname(file), { recursive: true });
const db = new Database(file);
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY, username TEXT NOT NULL UNIQUE COLLATE NOCASE,
  password_hash TEXT NOT NULL DEFAULT '', is_guest INTEGER NOT NULL DEFAULT 0, created_at INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS channels (
  id INTEGER PRIMARY KEY, name TEXT NOT NULL, subscribers TEXT NOT NULL, hue INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS videos (
  id INTEGER PRIMARY KEY, title TEXT NOT NULL, channel_id INTEGER NOT NULL REFERENCES channels(id),
  category TEXT NOT NULL, views INTEGER NOT NULL DEFAULT 0, duration TEXT NOT NULL,
  emoji TEXT NOT NULL, published_at INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS reactions (
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  video_id INTEGER NOT NULL REFERENCES videos(id) ON DELETE CASCADE,
  value INTEGER NOT NULL CHECK (value IN (-1, 1)), PRIMARY KEY (user_id, video_id));
CREATE TABLE IF NOT EXISTS subscriptions (
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  channel_id INTEGER NOT NULL REFERENCES channels(id) ON DELETE CASCADE, PRIMARY KEY (user_id, channel_id));
CREATE TABLE IF NOT EXISTS saves (
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  video_id INTEGER NOT NULL REFERENCES videos(id) ON DELETE CASCADE, PRIMARY KEY (user_id, video_id));
CREATE TABLE IF NOT EXISTS history (
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  video_id INTEGER NOT NULL REFERENCES videos(id) ON DELETE CASCADE,
  watched_at INTEGER NOT NULL, PRIMARY KEY (user_id, video_id));
CREATE TABLE IF NOT EXISTS comments (
  id INTEGER PRIMARY KEY, video_id INTEGER NOT NULL REFERENCES videos(id) ON DELETE CASCADE,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  parent_id INTEGER REFERENCES comments(id) ON DELETE CASCADE, body TEXT NOT NULL, created_at INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS comment_likes (
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  comment_id INTEGER NOT NULL REFERENCES comments(id) ON DELETE CASCADE, PRIMARY KEY (user_id, comment_id));
CREATE INDEX IF NOT EXISTS idx_comments_video ON comments(video_id, created_at);
CREATE INDEX IF NOT EXISTS idx_history_user ON history(user_id, watched_at);
`);

if (db.prepare('SELECT COUNT(*) n FROM channels').get().n === 0) {
  const seed = require('./seed.json');
  const now = Date.now();
  const addCh = db.prepare('INSERT INTO channels VALUES (@id,@name,@subscribers,@hue)');
  const addVid = db.prepare('INSERT INTO videos VALUES (@id,@title,@channel_id,@category,@views,@duration,@emoji,@published_at)');
  db.transaction(() => {
    seed.channels.forEach((c) => addCh.run(c));
    seed.videos.forEach((v) => addVid.run({ ...v, published_at: now - v.days * 864e5 }));
  })();
}
module.exports = db;
