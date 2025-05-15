const Task = require('../models/task');

class TasksController {
    async getTasks(req, res) {
        try {
            const tasks = await Task.find();
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving tasks', error });
        }
    }

    async addTask(req, res) {
        const { title, description, status, section } = req.body;
        const newTask = new Task({ title, description, status, section });

        try {
            const savedTask = await newTask.save();
            res.status(201).json(savedTask);
        } catch (error) {
            res.status(400).json({ message: 'Error adding task', error });
        }
    }

    async updateTask(req, res) {
        const { id } = req.params;
        const updates = req.body;

        try {
            const updatedTask = await Task.findByIdAndUpdate(id, updates, { new: true });
            if (!updatedTask) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.status(200).json(updatedTask);
        } catch (error) {
            res.status(400).json({ message: 'Error updating task', error });
        }
    }

    async deleteTask(req, res) {
        const { id } = req.params;

        try {
            const deletedTask = await Task.findByIdAndDelete(id);
            if (!deletedTask) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.status(200).json({ message: 'Task deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting task', error });
        }
    }
}

module.exports = new TasksController();