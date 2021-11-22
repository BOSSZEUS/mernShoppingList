
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const items = require('./routes/api/items')

const app = express()

// bodyparser Middleware

app.use(bodyParser.json())

// DB config.. pulling from config/keys folder
const db = require('./keys').mongoURI;

// connect to Mongo
mongoose
    .connect(db)
    .then(()=> console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

// use routes
app.use('/api/items', items)
const port = process.env.PORT || 5000


app.listen(port, () => console.log(`sever started on port ${port}`))