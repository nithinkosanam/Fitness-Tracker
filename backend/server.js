const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const connectdb = require('./connectdb')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

//const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

//app.use('/exercise', exercisesRouter)
app.use('/users', usersRouter)

const start = async () => {
    try {
        await connectdb(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()