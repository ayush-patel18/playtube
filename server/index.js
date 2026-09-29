// PlayTube server: JSON API under /api, static frontend from /public.
require('dotenv').config();
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('./db');
const { optionalAuth } = require('./middleware/auth');

const app = express();
app.disable('x-powered-by');
app.use(helmet());
app.use(express.json({ limit: '20kb' }));

app.use('/api', rateLimit({ windowMs: 60_000, limit: 300 }), optionalAuth);
app.use('/api/auth', require('./routes/auth'));
app.use('/api', require('./routes/catalog'));
app.use('/api', require('./routes/user'));
app.use('/api', require('./routes/comments'));
app.use('/api', (_req, res) => res.status(404).json({ error: 'Not found' }));

app.use(express.static(path.join(__dirname, '..', 'public')));

// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`PlayTube running at http://localhost:${port}`));
