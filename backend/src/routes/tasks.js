const express = require('express');
const router = express.Router();
const TasksController = require('../controllers/tasksController');

// Get all tasks
router.get('/', TasksController.getTasks);

// Add a new task
router.post('/', TasksController.addTask);

// Update a task by ID
router.put('/:id', TasksController.updateTask);

// Delete a task by ID
router.delete('/:id', TasksController.deleteTask);

module.exports = router;