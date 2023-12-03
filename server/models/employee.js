const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({

    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    postion:{
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Employee', employeeSchema)