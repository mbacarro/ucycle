import React, { useEffect, useState } from 'react';
import useConversation from '../../Zustand/useConversation';

const ConversationItem = () => {
    const { selectedConversation } = useConversation();
    const [listing, setListing] = useState(null);

    useEffect(() => {
        const getListingInfo = async () => {
            if (!selectedConversation?.listingId) {
                setListing(null);
                return;
            }

            try {
                const response = await fetch(`/api/listings/${selectedConversation.listingId}`);
                const data = await response.json();

                if (data.error) {
                    throw new Error(data.error);
                }
                setListing(data);
            } catch (error) {
                console.log('Error fetching listing info:', error.message);
            }
        };

        getListingInfo();
    }, [selectedConversation?.listingId]);

    if (!listing) {
        return (
            <div className="flex justify-center mt-4">
                <h1 className="text-xl font-bold">Chat with: {selectedConversation?.otherParticipantUsername}</h1>
            </div>
        );
    }

    return (
        <>
            <div className="flex flex-col items-center gap-4 p-4">
                <img src={listing.imageUrl} alt={listing.name} className="object-cover w-2/3 rounded-lg aspect-square" />
                <h2 className="text-xl font-bold">{listing.name}</h2>
                <p className="text-lg">${listing.price}</p>
            </div>
        </>
    );
};

export default ConversationItem;