// Signed-in user state: reactions, subscriptions, saves, history.
const router = require('express').Router();
const db = require('../db');
const { requireAuth, publicUser } = require('../middleware/auth');

const has = (table, id) => !!db.prepare(`SELECT 1 FROM ${table} WHERE id = ?`).get(+id);
const guard = (table) => (req, res, next) => (has(table, req.params.id) ? next() : res.status(404).json({ error: 'Not found' }));

router.get('/me', requireAuth, (req, res) => {
  const uid = req.user.id, state = { lk: {}, sb: {}, sv: {}, hist: [] };
  db.prepare('SELECT video_id v, value FROM reactions WHERE user_id = ?').all(uid).forEach((r) => (state.lk[r.v] = r.value));
  db.prepare('SELECT channel_id c FROM subscriptions WHERE user_id = ?').all(uid).forEach((r) => (state.sb[r.c] = true));
  db.prepare('SELECT video_id v FROM saves WHERE user_id = ?').all(uid).forEach((r) => (state.sv[r.v] = true));
  state.hist = db.prepare('SELECT video_id v FROM history WHERE user_id = ? ORDER BY watched_at DESC LIMIT 50').all(uid).map((r) => r.v);
  res.json({ user: publicUser(req.user), state });
});

router.put('/videos/:id/reaction', requireAuth, guard('videos'), (req, res) => {
  const value = Number(req.body && req.body.value);
  if (![-1, 0, 1].includes(value)) return res.status(400).json({ error: 'value must be -1, 0 or 1' });
  if (value === 0) db.prepare('DELETE FROM reactions WHERE user_id = ? AND video_id = ?').run(req.user.id, +req.params.id);
  else db.prepare('INSERT INTO reactions VALUES (?, ?, ?) ON CONFLICT(user_id, video_id) DO UPDATE SET value = excluded.value').run(req.user.id, +req.params.id, value);
  res.json({ ok: true });
});

router.put('/channels/:id/subscription', requireAuth, guard('channels'), (req, res) => {
  db.prepare('INSERT OR IGNORE INTO subscriptions VALUES (?, ?)').run(req.user.id, +req.params.id);
  res.json({ ok: true });
});
router.delete('/channels/:id/subscription', requireAuth, (req, res) => {
  db.prepare('DELETE FROM subscriptions WHERE user_id = ? AND channel_id = ?').run(req.user.id, +req.params.id);
  res.json({ ok: true });
});

router.put('/videos/:id/save', requireAuth, guard('videos'), (req, res) => {
  db.prepare('INSERT OR IGNORE INTO saves VALUES (?, ?)').run(req.user.id, +req.params.id);
  res.json({ ok: true });
});
router.delete('/videos/:id/save', requireAuth, (req, res) => {
  db.prepare('DELETE FROM saves WHERE user_id = ? AND video_id = ?').run(req.user.id, +req.params.id);
  res.json({ ok: true });
});

// Recording a watch also counts a view.
router.post('/me/history/:id', requireAuth, guard('videos'), (req, res) => {
  db.transaction(() => {
    db.prepare('INSERT INTO history VALUES (?, ?, ?) ON CONFLICT(user_id, video_id) DO UPDATE SET watched_at = excluded.watched_at').run(req.user.id, +req.params.id, Date.now());
    db.prepare('UPDATE videos SET views = views + 1 WHERE id = ?').run(+req.params.id);
  })();
  res.json({ ok: true });
});

module.exports = router;
