import React, {useEffect, useRef} from 'react';

import Message from "./Message";
import useConversation from '../../Zustand/useConversation';


const MessageList = () => {

    const { messages, setMessages, selectedConversation } = useConversation();
    const lastMessageRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }, [messages]);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const response = await fetch(`/api/messages/${selectedConversation.conversationsId}`);
                const data = await response.json();

                if (data.error) {
                    throw new Error(data.error);
                }   
                setMessages(data);
                console.log("messages: ", messages); 
                console.log("selected convo: ", selectedConversation)
            } catch (error) {
                console.log('Error fetching messages:', error.message);
            }
        }
        
        if (selectedConversation?.conversationsId) {
            getMessages();
        }

    }, [selectedConversation?.conversationsId, setMessages]);



    return (
        <div className='flex-1 px-4 overflow-auto'>
            {messages.map(message => (
                <div key={message._id} ref={lastMessageRef}>
                    <Message message={message} />
                </div>
            ))}
        </div>
    );
};
export default MessageList;