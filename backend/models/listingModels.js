const mongoose = require('mongoose')

const Schema = mongoose.Schema

const lisitngSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
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
    paymentMethod: {
        type: [String],
        required: true
    },
    sellerID: {
        type: String,
        required: true
    },
    sold: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

const Listing = mongoose.model('Item', lisitngSchema);

module.exports = Listing;
