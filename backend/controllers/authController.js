const User = require("../models/userModels");
const Listing = require("../models/listingModels")
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcryptjs");


// POST signup a new user
const Signup = async (req, res, next) => {
    try {
        const { email, password, username, createdAt } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.json({ message: "User already exists" });
        }

        const user = await User.create({ email, password, username, createdAt });

        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res
            .status(201)
            .json({ message: "User signed in successfully", success: true, user });
        next();
    } catch (error) {
        res.status(500).json({ error: error.message });

    }
};

// POST login a registered user
const Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // invalid request body
        if(!email || !password ){
            return res.json({message:'All fields are required'})
        }

        // no user found with email
        const user = await User.findOne({ email });
        if(!user){
            return res.json({message:'Incorrect password or email' }) 
        }

        // password is incorrect
        const auth = await bcrypt.compare(password,user.password)
        if (!auth) {
            return res.json({message:'Incorrect password or email' }) 
        }

        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res.status(201).json({ message: "User logged in successfully", success: true });
        next()
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
}

// GET profile information
const getProfile = async (req, res) => {
    try {
        const { username } = req.user || {};
    
        if (!username) {
            return res.status(401).json({ error: 'User is not authenticated' });
        }
    
        const userProfile = await User.findOne({ username }).select('username email');
    
        if (!userProfile) {
            return res.status(404).json({ error: 'User not found' });
        }
    
        const userListings = await Listing.find({ sellerID: username });
    
        res.status(200).json({
            username: userProfile.username,
            email: userProfile.email,
            listings: userListings,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    Signup,
    Login,
    getProfile
}
