const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const myRouter = require('./routes/taskRouter');

dotenv.config({ path: './config.env' });

const app = express();

const port = 5000;

// MIDDLEWARE 

app.use(express.static('./public'));
app.use(express.json());

// DATABASE

const DB = process.env.MONGO_URL.replace('<PASSWORD>', process.env.MONGO_PASSWORD);

const connectionDB = async () => {
    console.log('Connected to DB');
    await mongoose.connect(DB);
};

connectionDB().catch(error => console.log(error));

// ROUTER

//app.use(customErrorHandler);

app.use('/api/v1/tasks', myRouter);

app.use((req, res) => {
    res.status(404).send('Not found');
});

app.use((err, req, res, next) => {
    res.status(500).json({ message: 'Something went wrong, try again later!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});