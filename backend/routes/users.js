const express = require('express')
const router = express.Router()

const {getAllUsers, addUser} = require('../controllers/users')

router.route('/').get(getAllUsers)
router.route('/add').post(addUser)

module.exports = router

