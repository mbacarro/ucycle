import React from 'react';
import useConversation from '../../Zustand/useConversation';


// STARTER CODE SNIPPET
export default function Conversation({ conversationInfo }) {
    const {selectedConversation, setSelectedConversation } = useConversation();
    const conversationsId =  conversationInfo.conversationsId 
    const otherParticipantUsername =  conversationInfo.otherParticipantUsername 
    const mostRecentMessage = conversationInfo.mostRecentMessage.message 

    const isSelected = selectedConversation?.conversationsId === conversationsId;

    
	return (
		<>
            <div 
                className={`flex w-full px-2 py-4 my-5 h-fit-content hover:bg-violet-100   
                ${isSelected ? "border" : ""}`}
                onClick={() => {
                    setSelectedConversation(conversationInfo)
                    console.log(selectedConversation)}}
            
            >
                <div className="w-16 h-16 rounded-full bg-slate-400"/>

                <div className='flex flex-col items-start gap-2 ml-6'>
                    <p className="text-lg font-medium text-black">{otherParticipantUsername}</p>
                    <p className="text-sm font-medium text-zinc-500">{truncateText(mostRecentMessage)}</p>
                </div>


            </div>
		</>
	);
};

const truncateText = (text) => {
    if (text.length <= 30) {
        return text;
    }
    // Find the last space within the 30
    const lastSpaceIndex = text.lastIndexOf(' ', 30);
    // If no space found, use 30
    const truncatedText = lastSpaceIndex === -1 ? text.slice(0, 30) : text.slice(0, lastSpaceIndex);
    return `${truncatedText}...`;
};