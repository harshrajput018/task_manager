const express = require('express');
const Task = require('../models/tasks');
const cors = require('cors')

const router = express.Router();

router.use(express.json())

router.use(cors())


router.post('/',async(req,res)=>{


    const check = await Task.findOne({_id:req.body.id})

    if(check._id)
    {
         
       const result = await Task.updateOne({_id:req.body.id},{checked:!check.checked})
       return res.json({success:true})
    }

    return res.json({success:false})

})

router.post('/titleOrDescription',async(req,res)=>{

    console.log(req.body)
    const check = await Task.findOne({_id:req.body.id})

    if(check._id)
    {
         
       const result = await Task.updateOne({_id:req.body.id},{title:req.body.title, description:req.body.description})

       return res.json({success:true})
    }

    return res.json({success:false})

})

module.exports = router;