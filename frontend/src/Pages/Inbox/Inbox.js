import React, { useEffect } from 'react';

import NavBar from '../../Components/Navbar/Navbar';
import ConversationList from '../../Components/Inbox/ConversationList';
import MessageList from '../../Components/Inbox/MessageList';
import MessageInput from '../../Components/Inbox/MessageInput';

import useConversation from '../../Zustand/useConversation';


export default function Inbox(props) {
    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {
        // cleanup function (unmounts)
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]);

    return (
        <>
            <NavBar />
            <div className="grid grid-cols-4 gap-4 mt-12 border-t border-gray-300 ">
                <div className="h-screen col-span-1 px-8 py-10 border-r border-gray-300">
                    <h1 className='text-xl font-bold text-black'>Inbox</h1>
                    <ConversationList />
                </div>

                <div className="col-span-2 overflow-auto border-gray-300 ">
                    {!selectedConversation ? (
                        <NoChatSelected />
                    ) : (
                        <>
                            {/* Heading */}
                            <div className='flex items-center justify-center gap-3 my-6'>
                                <div className="w-[100px] h-[100px] rounded-full bg-slate-400" />
                                <h2 className='text-lg font-semibold'>{selectedConversation.otherParticipantUsername}</h2>
                                <button className="w-40 h-10 px-5 py-2 text-base font-medium text-center text-white rounded bg-violet-700 hover:bg-violet-800">
                                    Visit Profile {/* Wrap in Link later*/}
                                </button>
                                <button className="w-40 h-10 text-base font-medium text-center text-black border border-black rounded">
                                    Report {/* Wrap in Link later*/}
                                </button>
                            </div>
                            <MessageList />
                            <MessageInput />
                        </>
                    )}
                    

                </div>

                <div className="h-screen col-span-1 border-l border-gray-300">Right Sidebar</div>
            </div>


        </>

    );
}

const NoChatSelected = () => {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='flex flex-col items-center gap-2 px-4 font-semibold text-center text-black sm:text-lg md:text-xl'>
                <p>Welcome! </p>
                <p>Select a chat to start messaging</p>

            </div>
        </div>
    );
};
