const express = require('express')
const fs = require('fs')
const morgan = require('morgan')
const tourRoutes = require('./routes/tourRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express()

app.use(morgan('dev'));
app.use(express.json())
app.use(express.static(`${__dirname}/public`))

app.use((req, res, next)=>{
    console.log("Hello from middleware.")
    next()
})

app.use((req, res, next)=>{
    req.requestTime = new Date().toISOString()
    console.log("Req time is: " + req.requestTime)
    next()
})

app.use('/api/tourlar', tourRoutes)
app.use('/api/yuzerlar', userRoutes)

module.exports = app;