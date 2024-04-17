const express = require('express')

const {userVerification} = require("../middlewares/AuthMiddleware.js")

const {
    Signup,
    Login,
    getProfile
} = require("../controllers/authController.js")

const router = express.Router()

// POST a new user
router.post("/signup", Signup);

// POST a logged in user
router.post("/login", Login);

// GET a registred user
router.get('/profile', userVerification, getProfile);
// UPDATE a registered user


module.exports = router;