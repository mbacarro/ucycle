const User = require("../models/userModels");
const Listing = require("../models/listingModels")
const { createSecretToken } = require("../utils/SecretToken");
const {getObjectSignedUrl} = require("../s3.js")
const bcrypt = require("bcryptjs");


// POST signup a new user
const Signup = async (req, res, next) => {
    try {
        const { email, password, username, firstName, lastName, studentNumber, grade, age, biography } = req.body;

        const existingEmail = await User.findOne({ email });
        const existingUsername = await User.findOne({ username });

        if (existingEmail || existingUsername) {
            return res.json({ message: "User already exists", success: false });
        }

        const user = await User.create({ email, password, username, firstName, lastName, studentNumber, grade, age, biography });

        const token = createSecretToken(user._id);
        res.cookie("user", token, {
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
            return res.json({message:'All fields are required', success: false })
        }

        // no user found with email
        const user = await User.findOne({ email });
        if(!user){
            return res.json({message:'Incorrect password or email' , success: false }) 
        }

        // password is incorrect
        const auth = await bcrypt.compare(password,user.password)
        if (!auth) {
            return res.json({message:'Incorrect password or email' , success: false }) 
        }

        const token = createSecretToken(user._id);
        res.cookie("user", token, {
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
        const loggedInUserId = req.user.id;

        if (!loggedInUserId) {
            return res.status(401).json({ error: 'User is not authenticated' });
        }

        const userProfile = await User.findById(loggedInUserId).select('username email firstName lastName studentNumber grade age biography');

        if (!userProfile) {
            return res.status(404).json({ error: 'User not found' });
        }

        const userListings = await Listing.find({ sellerID: loggedInUserId });
        const listingsWithImageUrl = await Promise.all(userListings.map(async (listing) => {
            listing = listing.toObject(); // Convert to plain JavaScript object to avoid Mongoose schema limitations
            listing.imageUrl = await getObjectSignedUrl(listing.listingPhoto);
            return listing;
        }));

        res.status(200).json({
            success: true,
            username: userProfile.username,
            email: userProfile.email,
            firstName: userProfile.firstName,
            lastName: userProfile.lastName,
            studentNumber: userProfile.studentNumber,
            grade: userProfile.grade,
            age: userProfile.age,
            biography: userProfile.biography,
            id: loggedInUserId,
            listings: listingsWithImageUrl,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST logout
const Logout = async (req, res) => {
    const { id } = req.user || {};
    const token = createSecretToken(id);

    res.cookie('user', token, { expires: new Date(0) });
    res.status(200).json({ message: 'User logged out successfully', success: true });
};

module.exports = {
    Signup,
    Login,
    getProfile, 
    Logout
}
