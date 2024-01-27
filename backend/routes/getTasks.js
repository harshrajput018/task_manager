const express = require('express');
const Task = require('../models/tasks');
const cors = require('cors')
const router = express.Router();

router.use(express.json())

router.use(cors())


router.get('/',async(req,res)=>{

    

    const allTasks = await Task.find({});

    

    return res.json({success:true, allTasks})

})

module.exports = router;