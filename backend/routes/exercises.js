const express = require('express')
const router = express.Router()

const {getAllExercises, addExercise, getExercise, deleteExercise, updateExercise} = require('../controllers/exercises')

router.route('/').get(getAllExercises)
router.route('/add').post(addExercise)
router.route('/:id').get(getExercise)
router.route('/:id').delete(deleteExercise)
router.route('/update/:id').patch(updateExercise)



module.exports = router

