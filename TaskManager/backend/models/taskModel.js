const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide a name'],
        maxLength: [20, 'must provide a name with a maximum of 20 characters'],
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {
    strictQuery: true
});

const taskModel = mongoose.model('Task', taskSchema, 'tasks');

module.exports = taskModel;