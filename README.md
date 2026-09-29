# PlayTube

A YouTube-style video site. Express + SQLite API, vanilla JS frontend, JWT auth.

## Run it
```bash
npm install
cp .env.example .env      # set JWT_SECRET to a long random string
npm start                 # http://localhost:3000
```
Needs Node 18+. The SQLite file is created in `data/` and seeded with 8 channels and 24 videos on first start.

## Structure
```
playtube/
├── package.json
├── .env.example
├── data/                     SQLite database (created at runtime)
├── server/
│   ├── index.js              app setup: helmet, rate limit, routes, static files
│   ├── db.js                 connection, schema, first-run seed
│   ├── seed.json             sample channels and videos
│   ├── middleware/auth.js    JWT sign/verify, optionalAuth, requireAuth
│   └── routes/
│       ├── auth.js           guest, register, login
│       ├── catalog.js        bootstrap, video list/search, video detail
│       ├── user.js           me, reactions, subscriptions, saves, history
│       └── comments.js       comments, replies, likes, delete
└── public/
    ├── index.html
    ├── css/style.css
    └── js/app.js             UI, router, player, API client
```

## API (all under /api, JSON)
| Method | Path | Auth | Purpose |
|---|---|---|---|
| POST | /auth/guest | no | create a guest account, returns a token |
| POST | /auth/register | no | create an account (upgrades a signed-in guest in place) |
| POST | /auth/login | no | returns a token |
| GET | /bootstrap | no | channels and videos for the UI |
| GET | /videos?q=&category= | no | search |
| GET | /videos/:id | no | one video |
| GET | /me | yes | user plus likes, subscriptions, saves, history |
| PUT | /videos/:id/reaction | yes | body `{value: -1 \| 0 \| 1}` |
| PUT/DELETE | /channels/:id/subscription | yes | subscribe / unsubscribe |
| PUT/DELETE | /videos/:id/save | yes | save / unsave |
| POST | /me/history/:id | yes | record a watch and count a view |
| GET | /videos/:id/comments | no | comments with replies and likes |
| POST | /videos/:id/comments | yes | body `{text}` |
| POST | /comments/:id/replies | yes | body `{text}` |
| PUT | /comments/:id/like | yes | toggle like |
| DELETE | /comments/:id | yes | delete your own |

Send `Authorization: Bearer <token>` for protected routes.

## Notes
- The player is simulated. To play real files, add a `video_url` column to `videos` and swap the `.scr` element in `public/js/app.js` for a `<video>` tag.
- Comments refresh by polling every 8 seconds. WebSockets or SSE would make them instant.
- Before deploying: set a strong `JWT_SECRET`, serve over HTTPS, and back up `data/playtube.db`.
