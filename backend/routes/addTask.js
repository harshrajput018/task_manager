const express = require('express');
const Task = require('../models/tasks');
const { body, validationResult } = require('express-validator');
const cors = require('cors')

const router = express.Router();

router.use(express.json())

router.use(cors())


router.post('/',[body('title').notEmpty().withMessage('Title cannot be empty'),],async(req,res)=>{

    const errors = validationResult(req);

    console.log(errors)

    if(errors.errors.length>0)
    return res.json({success:false, msg:errors.errors})

    const task = new Task({title:req.body.title, description:req.body.description});

    console.log(task);

    await task.save();

    return res.json({success:true})

})

module.exports = router;