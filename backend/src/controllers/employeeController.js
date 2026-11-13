// INTERVIEW TASK: Implement these handlers using the Employee model.
// GET /api/employees accepts page, limit, search, sortOrder,
// dateFilter (day | month | year), date (YYYY-MM-DD), month (YYYY-MM), year (YYYY).
// Combine filters before pagination; return { data, pagination }.
const pending = (_req, res) => res.status(501).json({ message: 'Candidate implementation required' });
export const listEmployees = pending;
export const getEmployee = pending;
export const createEmployee = pending;
export const updateEmployee = pending;
export const deleteEmployee = pending;
