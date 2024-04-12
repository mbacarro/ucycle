const Listing = require("../models/listingModels")
const mongoose = require("mongoose")
const { v4: uuidv4 } = require('uuid');


const { uploadFile, deleteFile, getObjectSignedUrl } = require('../s3.js')

const generateFileName = () => uuidv4();

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

// GET all listings in reqested category
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
<<<<<<< Updated upstream
        otherPaymentNotes,
=======
>>>>>>> Stashed changes
        sellerID } = req.body 

    const listingPhotoFile = req.file

    console.log("req.body ", req.body)
<<<<<<< Updated upstream
    console.log("req.file ", req.file)
=======
    // console.log("req.file ", req.file)
>>>>>>> Stashed changes


    const imageName = generateFileName().toString()
    console.log(imageName)

    await uploadFile(listingPhotoFile.buffer, imageName, listingPhotoFile.mimetype)

    // try {
    //     const parsedPickupLocations = pickupLocations.includes(',') ? pickupLocations.split(',') : [pickupLocations];
    //     const parsedPaymentMethod = paymentMethod.includes(',') ? paymentMethod.split(',') : [paymentMethod];

    //     const listing = await Listing.create({
    //         name: "test", 
    //         price: 2, 
    //         condition: "test", 
    //         category: "test",
    //         description: "test", 
    //         pickupLocations: ["test"], 
    //         otherLocationNotes: "",
    //         paymentMethod: ["test"], 
    //         otherPaymentNotes: "",
    //         sellerID: "test",
    //         listingPhoto: "test"
    //     })
    //     res.status(200).json(listing)
    // } catch (error) {
    //     res.status(400).json({error: error.message})
    // }

    try {
        const listing = await Listing.create({
            name, 
            price, 
            condition, 
            category,
            description, 
<<<<<<< Updated upstream
            pickupLocations: parsedPickupLocations, 
            otherLocationNotes,
            paymentMethod: parsedPaymentMethod, 
            otherPaymentNotes,
            sellerID,
            listingPhoto: imageName
=======
            pickupLocations, 
            otherLocationNotes,
            paymentMethod, 
            otherPaymentNotes,
            sellerID
>>>>>>> Stashed changes
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