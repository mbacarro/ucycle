import React, { useEffect, useState } from 'react';
import Conversation from './Conversation';

export default function ConversationList() {

    const [conversations, setConversations] = useState(null)

    useEffect(() => {
        const getConversations = async () => {
            const response = await fetch('/api/messages/conversations');
            const data = await response.json();

            if (response.ok) {
                setConversations(data)
                console.log(conversations)
            }
        }

        getConversations()
    }, [])

	return (
		<div className='flex flex-col h-full py-2 my-10 overflow-auto'>

            {conversations && conversations.map((conversation) => (
                <Conversation
                    conversationInfo = {conversation}
                />
            ))}
			{/* <Conversation />
			<Conversation />
			<Conversation />
			<Conversation />
			<Conversation />
			<Conversation />
			<Conversation /> */}

		</div>
	);
};