const Task = require('../models/taskModel');

const getAllTasks = async (req, res, next) => {
    try {
        const task = await Task.find();

        res.status(200).json({
            status: 'success',
            task
        });

    } catch (err) {
        next(err);
        /*res.status(500).json({
            status: 'fail',
            message: error
        });*/
    }
};

const createTask = async (req, res, next) => {
    try {
        const newTask = req.body;
        await Task.create(newTask);

        res.status(201).json({
            status: 'success',
            message: 'Task created'
        });

    } catch (err) {
        next(err);
        /*res.status(500).json({
            status: 'fail',
            message: error
        });*/
    }
};

const updateTask = async (req, res, next) => {
    try {
        const taskId = req.params.id;
        await Task.findByIdAndUpdate(taskId, req.body, { new: true, runValidators: true });

        res.status(200).json({
            status: 'success',
            message: 'Task updated'
        });

    } catch (err) {
        next(err)
    }
}

const deleteTask = async (req, res, next) => {
    try {
        const taskId = req.params.id;
        await Task.findByIdAndDelete(taskId);

        res.status(201).json({
            status: 'success',
            message: 'Task deleted'
        });

    } catch (err) {
        next(err)
        /*res.status(500).json({
            status: 'fail',
            message: error
        });
        */
    }
};

module.exports = { getAllTasks, createTask, updateTask, deleteTask }