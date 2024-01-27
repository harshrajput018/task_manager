const mongoose = require('mongoose')

const Task = mongoose.Schema(
    {
        title: String,
        description: String,
        checked:{type:Boolean,default:false},
    }
)

module.exports = mongoose.model('Task',Task);