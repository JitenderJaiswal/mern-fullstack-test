import { useParams } from 'react-router-dom';
import { api } from '../api/client.js';

export default function EmployeeFormPage() {
  const { id } = useParams();
  // INTERVIEW TASK: Build a form for name, email, joiningDate, salary.
  // Create with POST /employees; load/edit with GET and PUT /employees/:id.
  return <section><h2>{id ? 'Edit' : 'Add'} Employee</h2><p>Candidate task: implement form and validation.</p></section>;
}
