import { Routes, Route, Link } from 'react-router-dom';
import EmployeesPage from './pages/EmployeesPage.jsx';
import EmployeeFormPage from './pages/EmployeeFormPage.jsx';
export default function App() {
  return <main className="container"><header><h1>Employee Management</h1><nav><Link to="/">Employees</Link> · <Link to="/employees/new">Add Employee</Link></nav></header><Routes><Route path="/" element={<EmployeesPage />} /><Route path="/employees/new" element={<EmployeeFormPage />} /><Route path="/employees/:id/edit" element={<EmployeeFormPage />} /></Routes></main>;
}
