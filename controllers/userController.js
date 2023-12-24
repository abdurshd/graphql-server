const express = require('express')
const User = require('../models/userModel')

const app = express()

app.use(express.json())

exports.getUsers = async (req, res)=>{
    try {
    const allUsers = await User.find()

        res
            .status(200)
            .json({
                status: "successs",
                data: {
                    allUsers
            }})
    } catch (err) {
        res
        .status(404)
        .json({
            status: "failed to retrieve the data",
            message: err
        })
    }
}

exports.getUserByID = async (req, res)=>{
    try {
        const user = await User.findById(req.params.id)
            res
            .status(200)
            .json({
                status: "Gooooooolll!",
                data: {
                    user
                }})

    } catch (err) {
        res.status(404).send({status:"failed to retrieve the user",message: err})
    }
}
    
exports.patchUserById = async (req,res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})

        if(!user) {
            res.status(404).send({
                status: "no user changes",
                message: 'no users'
            })
        }
    
            res
            .status(200)
            .send({
                status: "Bakabumas, malades!",
                data: {
                  user
                }
            })
    } catch (err) {
        res.status(500).send({status: "failed to change the user info",message:err.message})
    }
}

exports.deleteUserByID = async (req, res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)

        if(!user) {
            res.status(404).send({
                status: "couldnot find the thing you are looking for",
                message: err.message
            }) 
        }
            res
            .status(200)
            .json({
                status: "Qirib tashadim!",
                data: null})

    } catch (err) {
        res.status(500).send({status:"failed to retrieve the user",message: err.message})
    }
}

exports.postUser = async (req,res)=> {
        
    try { 
        const newUser = await User.create(req.body)

        res
            .status(201)
            .json({
                status: "Success",
                user: newUser
            })

    } catch(err) {
        res
        .status(400)
        .json({
            status: "There is a problem with posting",
            message: err
        })
    } 
}