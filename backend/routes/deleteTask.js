const express = require('express');
const Task = require('../models/tasks');
const cors = require('cors')

const router = express.Router();

router.use(express.json())

router.use(cors())


router.post('/',async(req,res)=>{


    const check = await Task.findOne({_id:req.body.id})

    if(check.title)
    {
       const result = await Task.deleteOne({_id:req.body.id})
       return res.json({success:true});
    }

    return res.send({success:false})

})

module.exports = router;