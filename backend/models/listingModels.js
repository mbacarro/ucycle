const mongoose = require('mongoose')

const Schema = mongoose.Schema

const listingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    pickupLocations: {
        type: [String],
        required: true
    },
    otherLocationNotes: {
        type: String,
        required: false,
        default: null
    },
    paymentMethod: {
        type: [String],
        required: true
    },
    otherPaymentNotes: {
        type: String,
        required: false,
        default: null
    },
    sellerID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    sold: {
        type: Boolean,
        default: false
    }
    ,
    listingPhoto: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
