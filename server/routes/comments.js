// Comments, replies and comment likes.
const router = require('express').Router();
const db = require('../db');
const { requireAuth } = require('../middleware/auth');

const clean = (t) => String(t || '').trim().slice(0, 2000);

router.get('/videos/:id/comments', (req, res) => {
  const id = +req.params.id;
  const rows = db.prepare(`SELECT c.id, c.parent_id, c.user_id u, u.username name, c.body t, c.created_at w
    FROM comments c JOIN users u ON u.id = c.user_id WHERE c.video_id = ? ORDER BY c.created_at DESC`).all(id);
  const likes = db.prepare(`SELECT l.comment_id cid, l.user_id uid FROM comment_likes l
    JOIN comments c ON c.id = l.comment_id WHERE c.video_id = ?`).all(id);
  const top = rows.filter((c) => !c.parent_id).map((c) => ({
    id: c.id, u: c.u, name: c.name, t: c.t, w: c.w,
    l: likes.filter((x) => x.cid === c.id).map((x) => x.uid),
    r: rows.filter((r) => r.parent_id === c.id).reverse().map((r) => ({ id: r.id, u: r.u, name: r.name, t: r.t, w: r.w })),
  }));
  res.json(top);
});

router.post('/videos/:id/comments', requireAuth, (req, res) => {
  const text = clean(req.body && req.body.text);
  if (!text) return res.status(400).json({ error: 'Comment can’t be empty' });
  if (!db.prepare('SELECT 1 FROM videos WHERE id = ?').get(+req.params.id)) return res.status(404).json({ error: 'Video not found' });
  const id = db.prepare('INSERT INTO comments (video_id, user_id, body, created_at) VALUES (?, ?, ?, ?)').run(+req.params.id, req.user.id, text, Date.now()).lastInsertRowid;
  res.status(201).json({ id });
});

router.post('/comments/:id/replies', requireAuth, (req, res) => {
  const text = clean(req.body && req.body.text);
  const parent = db.prepare('SELECT id, video_id, parent_id FROM comments WHERE id = ?').get(+req.params.id);
  if (!parent) return res.status(404).json({ error: 'Comment not found' });
  if (!text) return res.status(400).json({ error: 'Reply can’t be empty' });
  const id = db.prepare('INSERT INTO comments (video_id, user_id, parent_id, body, created_at) VALUES (?, ?, ?, ?, ?)')
    .run(parent.video_id, req.user.id, parent.parent_id || parent.id, text, Date.now()).lastInsertRowid;
  res.status(201).json({ id });
});

router.put('/comments/:id/like', requireAuth, (req, res) => {
  if (!db.prepare('SELECT 1 FROM comments WHERE id = ?').get(+req.params.id)) return res.status(404).json({ error: 'Comment not found' });
  const del = db.prepare('DELETE FROM comment_likes WHERE user_id = ? AND comment_id = ?').run(req.user.id, +req.params.id);
  if (!del.changes) db.prepare('INSERT INTO comment_likes VALUES (?, ?)').run(req.user.id, +req.params.id);
  res.json({ liked: !del.changes });
});

router.delete('/comments/:id', requireAuth, (req, res) => {
  const r = db.prepare('DELETE FROM comments WHERE id = ? AND user_id = ?').run(+req.params.id, req.user.id);
  r.changes ? res.json({ ok: true }) : res.status(404).json({ error: 'Comment not found' });
});

module.exports = router;
