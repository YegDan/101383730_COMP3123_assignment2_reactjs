const express = require('express');
const router = express.Router();
const Employee = require('../models/employee'); 

// GET all 
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET by ID
router.get('/:id', getEmployee, (req, res) => {
    res.json(res.employee);
});

// POST
router.post('/', async (req, res) => {
    const employee = new Employee({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        position: req.body.position,
        email: req.body.email
    });

    try {
        const newEmp = await employee.save();
        res.status(201).json(newEmp);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT 
router.put('/:id', getEmployee, async (req, res) => {
    if (req.body.first_name != null) {
        res.employee.first_name = req.body.first_name;
    }
    if (req.body.last_name != null) {
        res.employee.last_name = req.body.last_name;
    }
    if (req.body.position != null) {
        res.employee.position = req.body.position;
    }
    if (req.body.email != null) {
        res.employee.email = req.body.email;
    }
    try {
        const updatedEmployee = await res.employee.save();
        res.json(updatedEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const result = await Employee.deleteOne({ _id: req.params.id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json({ message: 'Employee is deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



async function getEmployee(req, res, next) {
    let employee;
    try {
        employee = await Employee.findById(req.params.id);
        if (employee == null) {
            return res.status(404).json({ message: 'Cant find employee' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.employee = employee;
    next();
}

module.exports = router;
