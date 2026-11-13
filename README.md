# MERN Employee Management

A responsive employee management application with CRUD, server-side pagination, search, salary sorting, and UTC joining-date filters.

## Requirements

- Node.js 20+
- MongoDB running locally or a MongoDB Atlas connection string

## Setup

1. Install dependencies:

```bash
cd backend
npm install
cd ../frontend
npm install
```

2. Copy the environment templates:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

On Windows PowerShell, use `Copy-Item` instead of `cp` if needed. The default database is `employee_interview`, configured by this part of `backend/.env`:

```env
MONGO_URI=mongodb://127.0.0.1:27017/employee_interview
```

Do not commit `.env` files or credentials.

3. Start the API and client in separate terminals:

```bash
cd backend
npm run dev
```

```bash
cd frontend
npm run dev
```

Frontend: `http://localhost:5173`

API health check: `http://localhost:5000/api/health`

## REST API

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/employees` | Create an employee |
| GET | `/api/employees` | List, filter, sort, and paginate employees |
| GET | `/api/employees/:id` | Retrieve one employee |
| PUT | `/api/employees/:id` | Update an employee |
| DELETE | `/api/employees/:id` | Delete an employee |

Employee data contains exactly `name`, `email`, `joiningDate`, and `salary` (in addition to MongoDB metadata).

### List parameters

- `page`: positive integer, default `1`
- `limit`: `5`, `10`, or `20`; default `10`
- `search`: case-insensitive partial name or email match
- `sortBy`: only `salary` is accepted
- `order`: `asc` or `desc`
- Day: `dateFilter=day&date=YYYY-MM-DD`
- Month: `dateFilter=month&month=YYYY-MM`
- Year: `dateFilter=year&year=YYYY`
- Inclusive custom range: `dateFilter=range&startDate=YYYY-MM-DD&endDate=YYYY-MM-DD`

Example:

```text
GET /api/employees?page=1&limit=10&search=an&sortBy=salary&order=desc&dateFilter=month&month=2026-11
```

List response:

```json
{
  "data": [],
  "pagination": {
    "totalRecords": 0,
    "currentPage": 1,
    "totalPages": 0,
    "limit": 10
  }
}
```

## Date filtering

All calendar boundaries are interpreted in UTC. Day, month, and year filters use an inclusive start and exclusive end (`$gte`, `$lt`). Custom ranges are inclusive of both entered calendar dates by using the start date at UTC midnight and the day after the end date as the exclusive upper bound. Dates, leap days, month/year boundaries, and reversed ranges are validated.

The API returns `400` for invalid input or IDs, `404` for missing employees, `409` for duplicate emails, `201` after creation, and `204` after successful deletion.
