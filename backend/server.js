const express = require('express')
const mongoose = require('mongoose')
const addTask = require('./routes/addTask')
const updateTask = require('./routes/updateTask')
const deleteTask = require('./routes/deleteTask')
const getTasks = require('./routes/getTasks')
require('dotenv').config()

const app = express();

const uri = process.env.MONGO_URI;

mongoose.connect(uri).then(()=>{console.log('connect to db')})


app.use('/addTask',addTask);
app.use('/updateTask',updateTask);
app.use('/deleteTask',deleteTask);
app.use('/getTasks',getTasks)




console.log('Harsh')

app.listen(8001, ()=>{
    console.log('server is listening at port 8001')
})