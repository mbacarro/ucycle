const Listing = require("../models/listingModels")
const mongoose = require("mongoose")

// GET all available listing
const getAvailable = async (req, res) => {
    try {
        const availableListings = await Listing.find({sold: false})
        res.status(200).json(availableListings)
    } catch (error) {
        res.status(400).json({error: "Error with query"})
    }
}


// GET all sold listing
const getSold = async (req, res) => {
    try {
        const soldListings = await Listing.find({sold: true})
        res.status(200).json(soldListings)
    } catch (error) {
        res.status(400).json({error: "Error with query"})
    }
}

const getCategory = async (req, res) => {
    try {
        const {category} = req.params
        const availableListings = await Listing.find({category: category})
        res.status(200).json(availableListings)
    } catch (error) {
        res.status(400).json({error: "Error with query"})
    }
}

// GET listing by ID
const getListing = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'Invalid ID' });
        }

        const listingFromID = await Listing.findById(id);
        if (!listingFromID) {
            return res.status(404).json({ error: 'Listing not found' });
        }

        res.status(200).json(listingFromID);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(400).json({ error: "Error with query" });
    }
};


// POST (create) a new listing
const createListing = async (req, res) => {
    const {
        name, 
        price, 
        condition, 
        category,
        description, 
        pickupLocations, 
        otherLocationNotes,
        paymentMethod, 
        otherPaymentNotes,
        sellerID } = req.body 

        try {
            const listing = await Listing.create({
                name, 
                price, 
                condition, 
                category,
                description, 
                pickupLocations, 
                otherLocationNotes,
                paymentMethod, 
                otherPaymentNotes,
                sellerID
            })
            res.status(200).json(listing)
        } catch (error) {
            res.status(400).json({error: error.message})
        }
}


// DELETE an listing
const deleteListing = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'Invalid ID' });
        }

        const listingFromID = await Listing.findOneAndDelete({_id: id})
        if (!listingFromID) {
            return res.status(404).json({ error: 'Listing not found' });
        }

        res.status(200).json(listingFromID);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(400).json({ error: "Error with query" });
    }
};


// UPDATE an listing
const updateListing = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'Invalid ID' });
        }

        const listingFromID = await Listing.findOneAndUpdate({_id: id}, {
            ...req.body
        })

        if (!listingFromID) {
            return res.status(404).json({ error: 'Listing not found' });
        }

        res.status(200).json(listingFromID);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(400).json({ error: "Error with query" });
    }
};


module.exports = {
    createListing, 
    getAvailable,
    getSold,
    getListing,
    deleteListing,
    updateListing,
    getCategory
}