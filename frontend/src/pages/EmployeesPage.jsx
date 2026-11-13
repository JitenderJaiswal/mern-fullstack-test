import { Link } from 'react-router-dom';
import { api } from '../api/client.js';

export default function EmployeesPage() {
  // INTERVIEW TASK: Fetch data using api.get('/employees', { params }).
  // Implement table, search, page size, pagination, salary sorting,
  // day/month/year joiningDate filtering, edit and delete actions.
  return <section><h2>Employees</h2><p>Candidate task: implement employee table, filters and pagination.</p><Link to="/employees/new">Add employee</Link></section>;
}
