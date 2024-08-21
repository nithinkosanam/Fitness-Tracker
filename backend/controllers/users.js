const Users = require('../models/users')

const getAllUsers = async(req, res) => {
    try {
        const users = await Users.find({})
        res.json({users})
    } catch (error) {
        res.status(400).json(`Error: ${error}`)
    }
}

const addUser = async(req, res) => {
    try {
        const username = req.body.username
        const newUser = await Users.create(username)
        res.json({newUser})
    } catch (error) {
        res.status(400).json(`Error: ${error}`)
    }
}

module.exports = {
    getAllUsers,
    addUser
}