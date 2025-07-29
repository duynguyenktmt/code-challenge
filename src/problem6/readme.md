# 📊 Scoreboard API Module

This module provides a secure and real-time scoreboard feature for a web application. It supports authorized score updates and displays the top 10 users on a public live leaderboard.

---

## ⚙️ Features

- ✅ Update user score after performing a valid action.
- 🔒 Secure endpoint to prevent unauthorized score tampering.
- 📡 Real-time broadcast of top 10 scores to connected clients (via WebSocket or SSE).
- 📃 Persistent score storage with leaderboard query support.

---

## 🛠️ Technology Stack

- **Backend**: Node.js + TypeScript + Express
- **Database**: PostgreSQL or Redis (for fast leaderboard query)
- **Auth**: JWT (for signed-in users)
- **Realtime**: WebSocket (Socket.IO or native) or Server-Sent Events (SSE)

---

## 📌 API Endpoints

### `POST /api/score/increase`

> Increase user’s score after completing a valid action.

- **Auth Required**: ✅ Yes (JWT or session)
- **Body**:
```json
{
  "amount": 10
}

Response:

{
  "success": true,
  "newScore": 120
}

GET /api/score/top
Get top 10 users by score.

Auth Required: ❌ No

Response:

[
  { "userId": "123", "username": "duy", "score": 210 },
  ...
]

GET /api/score/subscribe
Subscribe to live leaderboard updates.

Transport: WebSocket / SSE

Broadcasted Payload:

{
  "type": "SCOREBOARD_UPDATE",
  "payload": [
    { "userId": "123", "score": 210 },
    ...
  ]
}

🔐 Security Model
All score changes must be authenticated (JWT/session).

Backend validates:

Whether user is eligible to increase score.

Frequency of requests (rate limiting).

Server-only logic for computing new score (no client-side score).

🔄 Scoreboard Update Flow
User completes action on client.

Client sends POST /score/increase with auth token.

Server verifies user and applies score increment.

Updated leaderboard is fetched.

Leaderboard is broadcasted to all clients via WebSocket/SSE.

💡 Suggestions for Improvement
Add rate-limiting or anti-bot checks per user/IP.

Include audit logs of score changes.

Add support for anonymous users (optional).

Use Redis sorted sets for leaderboard scaling.

