# Problem 5 #

Develop a backend server with ExpressJS. You are required to build a set of CRUD interface that allow a user to interact with the service. You are required to use TypeScript for this task.

## 🚀 Features

- ⚙️ RESTful API with Express
- 📦 Type-safe backend using TypeScript
- 🧱 Prisma ORM with SQLite (easy to switch to PostgreSQL/MySQL)
- ✅ Clean project structure (Controller - Service - Route)
- 🧪 Ready for integration with frontend or testing

## 📦 Tech Stack
Backend:	    Express.js + TypeScript
ORM:	        Prisma 
DB:	            SQLite 
HTTP Server:	RESTful API

## 📦 Requirements

- Node.js >= 18.x
- pnpm (or npm/yarn)
- SQLite (included) or other relational DB
- [Optional] Docker (if switching DB)

## ✅ Source Code Structure

problem5/
├── src/
│   ├── index.ts
│   ├── routes/
│   │   └── resource.route.ts
│   ├── controllers/
│   │   └── resource.controller.ts
│   ├── services/
│   │   └── resource.service.ts
│   └── prisma/
│       └── client.ts
├── prisma/
│   └── schema.prisma
├── .env
├── tsconfig.json
├── package.json

## 🛠️ Setup Instructions

1. Install dependencies
pnpm install
# or
npm install

2. Initialize the database
npx prisma generate
npx prisma migrate dev --name init

3. Start the server
pnpm dev
# or
npm run dev
The server will start at http://localhost:3000.

📋 API Endpoints
Base URL: http://localhost:3000/api/resources

Method	Endpoint	Description
POST	/	Create a new resource
GET	/	List all resources
GET	/:id	Get resource by ID
PUT	/:id	Update resource by ID
DELETE	/:id	Delete resource by ID

Example POST Body:
{
  "title": "My Resource",
  "content": "This is the content"
}

🧪 Running Tests
You can write simple test files or use the runTests() pattern. For now, no test framework is pre-installed.

⚙️ Environment Variables
.env is already preconfigured for SQLite:
DATABASE_URL="file:./dev.db"

You can switch to PostgreSQL, MySQL, etc. by changing the DATABASE_URL.


