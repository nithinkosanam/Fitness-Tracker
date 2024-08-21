const Exercises = require('../models/exercises')

const getAllExercises = async(req, res) => {
    try {
        const exercises = await Exercises.find({})
        res.json({exercises})
    } catch (error) {
        res.status(400).json(`Error: ${error}`)
    }
}

const addExercise = async(req, res) => {
    try {
        const {username, description} = req.body
        const duration = Number(req.body.duration)
        const date = Date.parse(req.body.date)

        const newExercise = await Exercises.create({
            username,
            description,
            duration,
            date
        })
        res.json({newExercise})
    } catch (error) {
        res.status(400).json(`Error: ${error}`)
    }
}

const getExercise = async(req, res) => {
    try {
        const exercise = await Exercises.findById(req.params.id)
        res.json({exercise})
    } catch (error) {
        res.status(400).json(`Error: ${error}`)
    }
}

const deleteExercise = async(req, res) => {
    try {
        const exerciseToDel = await Exercises.findByIdAndDelete(req.params.id)
        res.json({exerciseToDel})
    } catch (error) {
        res.status(400).json(`Error: ${error}`)
    }
}

const updateExercise = async(req, res) => {
    try {
        const {username, description} = req.body
        const duration = Number(req.body.duration)
        const date = Date.parse(req.body.date)
        
        const exercisetoUpdate = await Exercises.findByIdAndUpdate(req.params.id, req.body)
        res.json({exercisetoUpdate})
    } catch (error) {
        res.status(400).json(`Error: ${error}`)
    }
}



module.exports = {
    getAllExercises,
    addExercise,
    getExercise,
    deleteExercise,
    updateExercise
}