import React, {useState} from 'react';
import { IoSend } from "react-icons/io5";

import useConversation from '../../Zustand/useConversation';



const MessageInput = () => {
    const [message, setMessage] = useState('')

    const { messages, setMessages, selectedConversation } = useConversation();


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("in Input: ",selectedConversation);

        if (!message) return;

        try {
            const response = await fetch(`/api/messages/send/${selectedConversation.conversationsId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    message: message, 
                    listingId: selectedConversation.listingId, 
                    receiverId: selectedConversation.otherParticipantID }),
            });
            const data = await response.json()
            if (data.error) {
                throw new Error(data.error) 
            }  
            console.log(data)
            setMessages([...messages, data])
            setMessage('')
        } catch (error) {
            console.error('Error sending message:', error.message);
        }

    }

    return (
        <form className='px-4 my-3' onSubmit={handleSubmit}>
            <div>{selectedConversation.otherParticipantId}</div>
            <div className='relative w-full'>
                <input
                    type='text'
                    className='border text-sm rounded-lg block w-full p-2.5  border-neutral-500 text-black'
                    placeholder='Send a message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type='submit' className='absolute inset-y-0 flex items-center end-0 pe-3'>
                    <IoSend />
                </button>
            </div>
        </form>
    );
};
export default MessageInput;