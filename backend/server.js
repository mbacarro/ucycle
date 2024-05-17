require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require("cookie-parser");
const cors = require('cors');
const path = require("path");

const listingRoutes = require('./routes/listingsRoutes.js')
const authRoutes = require("./routes/authRoutes.js")
const messageRoutes = require('./routes/messageRoutes.js')

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cookieParser());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from your React app
    credentials: true, // Allow sending cookies from the client
}));
app.use(express.static(path.join(__dirname, "build")));

//routes
app.use('/api/listings', listingRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)


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
