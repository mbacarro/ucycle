const express = require('express')

const { getMessages, sendMessage, getConversations } = require("../controllers/messageController.js")

const {userVerification} = require("../middlewares/AuthMiddleware.js")

const router = express.Router()

router.get("/conversations", userVerification, getConversations);
router.get("/:conversationId", userVerification, getMessages);
router.post("/send/:conversationId", userVerification, sendMessage);


module.exports = router;