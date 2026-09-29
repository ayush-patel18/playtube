// JWT helpers. optionalAuth attaches req.user when a valid Bearer token is sent.
const jwt = require('jsonwebtoken');
const db = require('../db');

const SECRET = process.env.JWT_SECRET || 'dev-only-secret';
if (!process.env.JWT_SECRET) console.warn('JWT_SECRET is not set: using an insecure development secret.');

const sign = (user) => jwt.sign({ id: user.id }, SECRET, { expiresIn: '30d' });

function optionalAuth(req, _res, next) {
  const header = req.headers.authorization || '';
  if (header.startsWith('Bearer ')) {
    try {
      const { id } = jwt.verify(header.slice(7), SECRET);
      req.user = db.prepare('SELECT id, username, is_guest FROM users WHERE id = ?').get(id);
    } catch { /* invalid or expired token: treat as signed out */ }
  }
  next();
}
const requireAuth = (req, res, next) => (req.user ? next() : res.status(401).json({ error: 'Sign in required' }));
const publicUser = (u) => ({ id: u.id, username: u.username, isGuest: !!u.is_guest });

module.exports = { sign, optionalAuth, requireAuth, publicUser };
