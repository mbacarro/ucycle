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
		const loggedInUser = req.user.id;

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
				participants: [loggedInUser, receiverId],
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
			senderId: loggedInUser,
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

const getConversations = async (req, res) => {
	try {
		const loggedInUser = req.user.id;

		const conversations = await Conversation.find({ participants: loggedInUser }).populate("participants messages listing");

		// Transform the conversations array to include only the required fields
		const transformedConversations = conversations.map(conversation => {
			// Find the other participant's username
			const conversationsId = conversation._id;
			const otherParticipant = conversation.participants.find(participant => participant._id.toString() !== loggedInUser.toString());
			const otherParticipantUsername = otherParticipant.username;
			const otherParticipantID = otherParticipant._id;

			// Find the most recent message
			const mostRecentMessage = conversation.messages[conversation.messages.length - 1];

			// Extract the listing id and name
			const listingId = conversation.listing._id;
			const listingName = conversation.listing.name;

			return {
				conversationsId,
				loggedInUserID: loggedInUser,
				otherParticipantID,
				otherParticipantUsername,
				mostRecentMessage,
				listingId,
				listingName
			};
		});

		res.status(200).json(transformedConversations);
	} catch (error) {
		console.log("Error in getConversations controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};


module.exports = {
    sendMessage,
    getMessages,
	getConversations
}
