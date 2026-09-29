// Public catalog: GET /api/bootstrap, /api/videos, /api/videos/:id
const router = require('express').Router();
const db = require('../db');

const SELECT = `SELECT v.id, v.title t, v.channel_id c, v.category cat, v.views, v.duration d, v.emoji e, v.published_at FROM videos v`;

router.get('/bootstrap', (_req, res) => {
  const channels = db.prepare('SELECT name, subscribers, hue FROM channels ORDER BY id').all().map((c) => [c.name, c.subscribers, c.hue]);
  res.json({ channels, videos: db.prepare(SELECT + ' ORDER BY v.id').all() });
});

router.get('/videos', (req, res) => {
  const like = `%${String(req.query.q || '').trim()}%`;
  const cat = req.query.category || null;
  res.json(db.prepare(`${SELECT} JOIN channels c ON c.id = v.channel_id
    WHERE (v.title LIKE ? OR c.name LIKE ?) AND (? IS NULL OR v.category = ?)
    ORDER BY v.published_at DESC LIMIT 100`).all(like, like, cat, cat));
});

router.get('/videos/:id', (req, res) => {
  const v = db.prepare(SELECT + ' WHERE v.id = ?').get(+req.params.id);
  v ? res.json(v) : res.status(404).json({ error: 'Video not found' });
});

module.exports = router;
