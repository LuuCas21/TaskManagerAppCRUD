const express = require('express');

const { getAllTasks, createTask, updateTask, deleteTask } = require('../controllers/taskControllers');

const myRouter = express.Router();

myRouter.route('/')
.get(getAllTasks)
.post(createTask)

myRouter.route('/:id')
.patch(updateTask)
.delete(deleteTask)

module.exports = myRouter;