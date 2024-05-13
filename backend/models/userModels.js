const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Your email address is required"],
        unique: true,
    },
    username: {
        type: String,
        required: [true, "Your username is required"],
    },
    firstName: {
        type: String,
        required: [true, "Your first name is required"],
    },
    lastName: {
        type: String,
        required: [true, "Your last name is required"],
    },
    lastName: {
        type: String,
        required: [true, "Your last name is required"],
    },
    studentNumber: {
        type: Number,
        required: [true, "Your student number is required"],
    },
    grade: {
        type: String,
        required: [true, "Your grade is required"],
    },
    age: {
        type: String,
        required: [true, "Your age is required"],
    },
    biography: {
        type: String,
        required: false,
        default: '',
    },
    sold: {
        type: Number,
        default: 0,
    },
    location: {
        type: String,
        required: [true, "Your location is required"],
    },
    password: {
        type: String,
        required: [true, "Your password is required"],
    },
    liked: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Listing',
        default: [],
    }
}, {timestamps: true});

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

const User = mongoose.model("User", userSchema);

module.exports = User
