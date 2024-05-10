import React from 'react';
import useConversation from '../../Zustand/useConversation';

const Message = ({message}) => {
    const { messages, setMessages, selectedConversation } = useConversation();
    const fromMe = message.senderId.toString() === selectedConversation.loggedInUserID.toString();
    const formattedTime = extractTime(message.createdAt);
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const bubbleColor = fromMe ? "bg-violet-700 text-white" : "bg-gray-200 text-black";

    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img
                        alt='General Profile Icon'
                        src={
                            "https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
                        }
                    />
                </div>
            </div>
            <div className={`chat-bubble ${bubbleColor}  pb-2`}>{message.message}</div>
            <div className='flex items-center gap-1 text-xs opacity-50 chat-footer'>{formattedTime}</div>
        </div>
    );
};
const extractTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
};

export default Message;