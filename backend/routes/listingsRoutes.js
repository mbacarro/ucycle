const express = require('express')
const multer = require('multer')

const {userVerification} = require("../middlewares/AuthMiddleware.js")


const {
    createListing, 
    getAvailable,
    getSold,
    getListing,
    deleteListing,
    updateListing,
    getCategory,
    getListingSeller
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
router.post('/', userVerification, upload.single('listingPhoto'), createListing)

// DELETE an listing
router.delete('/:id', deleteListing)

// UPDATE an listing
router.patch('/:id', updateListing)

// GET seller Information
router.get('/seller/:id', getListingSeller)

module.exports = router