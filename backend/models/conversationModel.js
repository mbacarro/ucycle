const mongoose = require('mongoose')

const Schema = mongoose.Schema


const conversationSchema = new Schema(
	{
		participants: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
		messages: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Message",
				default: [],
			},
		],
        listing: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Listing",
        },
	},
	{ timestamps: true }
);


const Conversation = mongoose.model("Conversation", conversationSchema);

module.exports = Conversation;
