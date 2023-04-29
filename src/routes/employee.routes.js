const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employee.controller');

// Retrieve all employees
router.get('/getAll', employeeController.findAll);

// Create a new employee
router.post('/add', employeeController.create);

// Retrieve a single employee with id
router.get('/:emp_id', employeeController.findById);

// Update a employee with id
router.put('/:emp_id', employeeController.update);

// Delete a employee with id
router.delete('/:emp_id', employeeController.delete);

module.exports = router