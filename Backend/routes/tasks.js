const express = require('express');
const router = express.Router();
const { getTasks, addTask, updateTask, deleteTask } = require('../controllers/taskcontroller');
const { secure } = require('../middleware/auth');
console.log('this is inside route')
// GET all tasks
router.get('/', secure, getTasks);

// POST add a task
router.post('/',secure, addTask);

// PUT update a task
router.put('/:id', secure, updateTask);

// DELETE a task
router.delete('/:id', secure, deleteTask);

module.exports = router;
