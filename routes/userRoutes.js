const userController = require('../controllers/userController')
const express = require('express')

const router = express.Router()

router
.route('/')
.get(userController.getUsers)
.post(userController.postUser)

router
.route('/:id')
.get(userController.getUserByID)
.patch(userController.patchUserById)
.delete(userController.deleteUserByID)

module.exports = router;
