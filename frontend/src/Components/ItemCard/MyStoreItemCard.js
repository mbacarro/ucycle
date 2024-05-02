import React from 'react';
import { Link } from 'react-router-dom';

import { FaTrash } from "react-icons/fa";
import EditListingModal from '../EditListingModal';

export default function MyStoreItemCard({ listing }) {

    const handleMarkAsSold = async (id) => {
        try {
            const response = await fetch(`/api/listings/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sold: true
                })
            });
            if (!response.ok) {
                throw new Error('Failed to mark item as sold');
            }
            // Update the listing in your frontend state or trigger a re-fetch of listings
            alert('Item marked as sold');
            console.log(`Item ${id} marked as sold`);
            window.location.reload();

        } catch (error) {
            alert('Error marking item as sold: ', error.message);
            console.error('Error marking item as sold:', error);
            window.location.reload();

        }
    };

    const handleRelistItem = async (id) => {
        try {
            const response = await fetch(`/api/listings/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sold: false
                })
            });
            if (!response.ok) {
                throw new Error('Failed to relist item');
            }
            // Update the listing in your frontend state or trigger a re-fetch of listings
            alert('Item relisted');
            console.log(`Item ${id} relisted`);
            window.location.reload();

        } catch (error) {
            alert('Error relisting item: ', error.message);
            console.error('Error relisting item:', error);
            window.location.reload();

        }
    };

    return (
        <div 
            className='flex gap-10 p-5 border rounded-lg shadow-lg w-fit h-36'
            id={`${listing._id}`}
        >
            <div className='h-full aspect-square'>
                <img
                    src={listing.imageUrl}
                    className="object-cover aspect-square"
                    alt="Listing Image"
                />
            </div>

            <div className='flex flex-col '>
                <h2 className='text-lg font-medium text-black '>{listing.name}</h2>
                <h3 className='font-normal text-black text-md'>${listing.price}</h3>
                <div className='grid grid-cols-2 gap-4 mt-auto'>
                    {listing.sold ?
                        <>
                            <button 
                                className='w-40 px-8 py-1 rounded bg-zinc-200'
                                onClick={() => handleRelistItem(listing._id)}
                            >
                                Relist Item  
                            </button>
                            {/* Placehodler button to maintain layout*/}
                            <button className='invisible w-40 px-8 py-1 rounded bg-zinc-200'>
                                Edit Listing
                            </button>
                        </>
                        :
                        <>
                            <button 
                                className='w-40 px-8 py-1 rounded bg-zinc-200'
                                onClick={() => handleMarkAsSold(listing._id)}
                            >
                                Mark as sold
                            </button>
                            {/* <button className='w-40 px-8 py-1 rounded bg-zinc-200'>
                                Edit Listing
                            </button> */}
                            <EditListingModal listingData={listing} />
                        </>
                    }
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='flex gap-6'>
                    <h3>Listed on {formatCreatedAt(listing.createdAt)}</h3>
                    <FaTrash size={28} />
                </div>
                <div className="flex items-center mt-auto">
                    {listing.sold ? (
                        <>
                            <div className="w-4 h-4 mr-2 bg-red-600 rounded-full" />
                            <p className='flex-1 mt-auto font-medium text-red-600'>This listing has been sold</p>
                        </>
                    ) : (
                        <>
                            <div className="w-4 h-4 mr-2 rounded-full bg-lime-500"></div>
                            <p className="flex-1 font-medium text-lime-500">This is an active listing</p>
                        </>
                    )}
                </div>
            </div>
        </div>


    );
};

const formatCreatedAt = (createdAt) => {
    // Convert the createdAt string to a Date object
    const date = new Date(createdAt);

    // Extract the required parts from the Date object
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get the month (0-11), add 1 and pad with leading zero if needed
    const day = String(date.getDate()).padStart(2, '0'); // Get the day and pad with leading zero if needed
    const year = String(date.getFullYear()); // Get the full year // Get the last two digits of the year

    // Format the date as "03.25.24"
    const formattedDate = `${month}.${day}.${year}`;

    return formattedDate;
};
