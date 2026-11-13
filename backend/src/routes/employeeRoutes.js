import { Router } from 'express';
import * as controller from '../controllers/employeeController.js';

const router = Router();
router.get('/', controller.listEmployees);
router.get('/:id', controller.getEmployee);
router.post('/', controller.createEmployee);
router.put('/:id', controller.updateEmployee);
router.delete('/:id', controller.deleteEmployee);
export default router;
