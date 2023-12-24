const tourController = require('../controllers/tourController')
const express = require('express')

const router = express.Router()

router
.route('/')
.get(tourController.getTours)
.post(tourController.postTour)

router
.route('/:id')
.get(tourController.getTourByID)
.patch(tourController.patchTourById)
.delete(tourController.deleteTourByID)

module.exports = router