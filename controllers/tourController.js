const express = require('express')
const Tour = require('../models/tourModel')


const app = express()

app.use(express.json())

exports.getTours = async (req, res)=>{
    try {

        const allTours = await Tour.find()

        res
        .status(200)
        .json({
            status: "successs",
            data: {
                allTours
        }})
    } catch (err) {
        res
        .status(404)
        .send({
            status: "failed to retrieve the tours",
            message: err
        })
    }
    
}

exports.getTourByID = async (req, res)=>{
    try {   
        const tour = await Tour.findById(req.params.id)
        
        res
        .status(200)
        .json({
            status: "successs",
            data: {
                tour
            }})
    } catch (err) {
        res.status(404).send({status: "cant get the tour",message:err})
    }
}
    
exports.patchTourById = async (req,res)=>{
    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})

        if(!tour) {
            res.status(404).send({
                status: "request failed bcoz of no tour update"
            })
        }
     
             res
             .status(200)
             .send({
                 status: "Success",
                 data: {
                     tour
                 }
             })
    } catch (err) {
        res.status(500).send({status:"failed to update the tour",message: err.message})
    }
}

exports.deleteTourByID = async (req, res)=>{
    try {
        const tour = await Tour.findByIdAndDelete(req.params.id)

        if(!tour) {
            res.status(404).send({
                status: "couldnot find the thing you are looking for",
                message: err.message
            })
        }
            res
            .status(200)
            .json({
                status: "Yonib ketdi",
                data: null})

    } catch (err) {
        res.status(500).send({status:"failed to retrieve the tour",message: err.message})
    }
}


exports.postTour = async (req,res)=> { 
    try {

        const newTour = await Tour.create(req.body)

        res
        .status(201)
        .send({
            status: "Success",
            data: newTour
        })
    }   catch (err) {
        res
        .status(401)
        .send({
            status: 'failed to post',
            message: err
        })

    }
    
}
    