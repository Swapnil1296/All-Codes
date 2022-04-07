const express = require("express")
const User = require('../models/user.model')

const router = express.Router()

router.post("", async(req,res)=>{
    try{
        const user = await User.create(req.body)
    return res.status(200).send(user)
    }
    catch(err){
        res.send({message:err.message})
    }
})
router.get("", async (req,res)=>{
    try{
        const user = await User.find().lean().exec()
    return res.status(200).send(user)
    }
    catch(err){
        res.send({message:err.message})
    }
})

router.patch("/:id", async (req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new: true}).lean().exec()
    return res.status(200).send(user)
    }
    catch(err){
        res.send({message:err.message})
    }
})


router.delete("/:id", async (req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id).lean().exec()
    return res.status(200).send(user)
    }
    catch(err){
        res.send({message:err.message})
    }
})
module.exports = router