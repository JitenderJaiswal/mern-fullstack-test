# MERN Employee Management — Interview Starter

A **starter project, not a completed solution**, for a 2–3 hour MERN interview.

## Requirements
- Node.js 20+ and npm
- MongoDB running locally, or a MongoDB Atlas connection string

## Setup
```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd mern-employee-interview-boilerplate
npm install
npm run install:all
```
Copy `backend/.env.example` to `backend/.env` and `frontend/.env.example` to `frontend/.env`. Set `MONGO_URI` as appropriate.

Start both apps:
```bash
npm run dev
```
Frontend: http://localhost:5173  |  Backend health: http://localhost:5000/api/health

## Candidate assignment (2–3 hours)
Employee fields: **name, email, joiningDate, salary** only (MongoDB-generated `_id` and timestamps are technical metadata).

1. Implement CRUD REST endpoints in `backend/src/controllers/employeeController.js`.
2. Implement frontend employee list, add/edit form, delete confirmation and validation.
3. Implement **server-side** pagination (`page`, `limit`), search by name/email, salary ascending/descending sort.
4. Implement **joiningDate** filters: **day, month, year** (no week filter).
5. Combine search, date filtering, sorting and pagination. Reset to page 1 when a filter changes.
6. Show loading, empty and error states.

### API contract
| Method | Path | Description |
| --- | --- | --- |
| GET | `/api/employees` | List/search/filter/sort/paginate |
| GET | `/api/employees/:id` | Detail |
| POST | `/api/employees` | Create |
| PUT | `/api/employees/:id` | Update |
| DELETE | `/api/employees/:id` | Delete |

Example:
`GET /api/employees?page=1&limit=10&search=rahul&sortOrder=desc&dateFilter=month&month=2026-11`

Expected list response:
```json
{"data":[],"pagination":{"totalRecords":0,"currentPage":1,"totalPages":0,"limit":10}}
```

Date conventions: `dateFilter=day&date=YYYY-MM-DD`, `dateFilter=month&month=YYYY-MM`, `dateFilter=year&year=YYYY`. Interpret boundaries in UTC; use inclusive start/exclusive end (`$gte`/`$lt`). Validate query params, dates and salary; handle duplicate email and invalid IDs. Never accept arbitrary sort field names.

## Interviewer notes
The starter intentionally returns HTTP 501 from CRUD handlers and shows placeholder pages. Candidates must implement functionality themselves. Do not commit `.env` files or real credentials.

## Publish to GitHub (interviewer)
Create an empty repository on GitHub, then from this folder:
```bash
git init
git add .
git commit -m "Initial interview starter"
git branch -M main
git remote add origin https://github.com/YOUR_ORG/mern-employee-interview.git
git push -u origin main
```
Share the repository URL with candidates; they can clone it with `git clone <URL>`.
