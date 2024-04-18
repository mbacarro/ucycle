const User = require("../models/userModels.js");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const userVerification = (req, res, next) => {
    const token = req.cookies.user
    if (!token) {
        return res.json({ message: "No user Logged In", status: false })
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if (err) {
            return res.json({ status: false })
        } else {
            const user = await User.findById(data.id)
            if (user) {
                req.user = { status: true, username: user.username, id:user._id };
                next();
            } else {
                return res.json({ status: false })
            }
        }
    })
}


module.exports = {
    userVerification
}