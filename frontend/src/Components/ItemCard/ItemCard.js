import React from 'react';
import { Link } from 'react-router-dom';

export default function ItemCard({listing}) {
    return (
        <Link to={`/item/${listing._id}`} className='block'>
            <div id={`Item${listing._id}`} className='flex flex-col w-full aspect-square'>
                <div id={`Item${listing.id}Img`} className='flex w-full border border-red aspect-square bg-violet-300'>
                    {/* Placeholder for item image */}
                </div>
                <h2 className='mt-3 text-lg font-medium text-black'>{listing.name}</h2>
                <h3 className='mt-3 font-normal text-black text-md'>${listing.price}</h3>
            </div>
        </Link>
    );
};



