const Conversation = require('../models/conversationModel.js')
const Message = require('../models/messageModel.js')
const Listing = require('../models/listingModels.js')
const User = require('../models/userModels.js')


/* 
	for new conversation do POST /api/conversations/send/new
	for existing converstions do POST /api/conversations/send/conversationId
*/

const sendMessage = async (req, res) => {
	try {	
		const { message, listingId, receiverId } = req.body;
		const { conversationId } = req.params;
		const senderId = req.user.id;

		// Check if the listing exists
		const listing = await Listing.findById(listingId);
		if (!listing) {
			return res.status(404).json({ error: 'Listing not found' });
		}
	
		// Check if receiving user exists
		const recievingUser = await User.findById(receiverId);
		if (!recievingUser) {
			return res.status(404).json({ error: 'Recieving User not found' });
		}

		let conversation;

		// Check if it's a request to create a new conversation
		if (conversationId === 'new') {
			conversation = await Conversation.create({
				participants: [senderId, receiverId],
				listing: listingId,
			});
		} else {
			// Handle existing conversation
			conversation = await Conversation.findById(conversationId);

			if (!conversation) {
				return res.status(404).json({ error: 'Conversation not found' });
			}
		}

		const newMessage = new Message({
			senderId,
			receiverId,
			message,
		});

		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}

		await Promise.all([conversation.save(), newMessage.save()]);

		res.status(201).json(newMessage);
	} catch (error) {
		res.status(500).json({ error: error.message});
	}
};


const getMessages = async (req, res) => {
	try {
		const { conversationId } = req.params;

		const conversation = await Conversation.findById(conversationId).populate("messages");

		if (!conversation) return res.status(200).json([]);

		const messages = conversation.messages;

		res.status(200).json(messages);
	} catch (error) {
		console.log("Error in getMessages controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

module.exports = {
    sendMessage,
    getMessages
}
