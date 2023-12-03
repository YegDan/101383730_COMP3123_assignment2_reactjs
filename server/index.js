const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routers/users'); // path to your user router file
const employeeRouter = require('./routers/employees'); // path to your employee router file
const cors = require('cors');

const app = express();
app.use(express.json()); 
app.use(cors());

const SERVER_PORT = 8181

const DB_CONNECTION_STRING = 'mongodb://mongo/assignment2'

mongoose.connect(DB_CONNECTION_STRING)
.then(() => console.log('Successfully connected to MongoDB'))
.catch(err => console.log('MongoDB connection error:', err));

app.use('/api/users', userRouter);
app.use('/api/employees', employeeRouter);

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message || 'Internal Server Error',
        },
    });
});


app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})

