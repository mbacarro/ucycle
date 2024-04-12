const express = require('express')
const multer = require('multer')


const {
    createListing, 
    getAvailable,
    getSold,
    getListing,
    deleteListing,
    updateListing,
    getCategory
} = require("../controllers/listingController.js")

const router = express.Router()

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })


// GET all available listings
router.get('/', getAvailable)

// GET all sold listings
router.get('/sold', getSold)

router.get('/category/:category', getCategory)

// GET a single listing
router.get('/:id', getListing)

// POST a new listing
router.post('/', upload.single('listingPhoto'), createListing)

// DELETE an listing
router.delete('/:id', deleteListing)

// UPDATE an listing
router.patch('/:id', updateListing)

module.exports = router