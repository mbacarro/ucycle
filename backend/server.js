require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const listingRoutes = require('./routes/listings.js')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/listings', listingRoutes)

// connect to db 
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        console.log("Successfully connected to mongodb")
        // listen for requests
        app.listen(process.env.PORT , () => {
            console.log("listening on port ", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
