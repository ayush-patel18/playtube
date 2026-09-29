// POST /api/auth/guest | register | login
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const db = require('../db');
const { sign, requireAuth, publicUser } = require('../middleware/auth');

const valid = (u, p) => /^[a-z0-9_]{3,24}$/i.test(u || '') && typeof p === 'string' && p.length >= 6 && p.length <= 72;
const reply = (res, u) => res.json({ token: sign(u), user: publicUser(u) });

router.post('/guest', (_req, res) => {
  const name = 'guest_' + crypto.randomBytes(4).toString('hex');
  const id = db.prepare('INSERT INTO users (username, is_guest, created_at) VALUES (?, 1, ?)').run(name, Date.now()).lastInsertRowid;
  reply(res, { id, username: name, is_guest: 1 });
});

// A signed-in guest is upgraded in place, so their likes, history and comments are kept.
router.post('/register', (req, res) => {
  const { username, password } = req.body || {};
  if (!valid(username, password)) return res.status(400).json({ error: 'Username: 3-24 letters, numbers or _. Password: 6+ characters.' });
  const hash = bcrypt.hashSync(password, 10);
  try {
    let id;
    if (req.user && req.user.is_guest) {
      id = req.user.id;
      db.prepare('UPDATE users SET username = ?, password_hash = ?, is_guest = 0 WHERE id = ?').run(username, hash, id);
    } else {
      id = db.prepare('INSERT INTO users (username, password_hash, created_at) VALUES (?, ?, ?)').run(username, hash, Date.now()).lastInsertRowid;
    }
    reply(res, { id, username, is_guest: 0 });
  } catch (e) {
    if (String(e.code).startsWith('SQLITE_CONSTRAINT')) return res.status(409).json({ error: 'That username is taken.' });
    throw e;
  }
});

router.post('/login', (req, res) => {
  const { username, password } = req.body || {};
  const u = db.prepare('SELECT * FROM users WHERE username = ? AND is_guest = 0').get(String(username || ''));
  if (!u || !bcrypt.compareSync(String(password || ''), u.password_hash)) return res.status(401).json({ error: 'Wrong username or password.' });
  reply(res, u);
});

module.exports = router;
