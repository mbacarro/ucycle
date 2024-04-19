import React from 'react';
import { Link } from 'react-router-dom';

export default function ItemCard({listing}) {
    return (
        <Link to={`/item/${listing._id}`} className='block'>
            <div id={`Item${listing._id}`} className='flex flex-col w-full aspect-square'>
                <img src={listing.imageUrl} className="object-cover aspect-square" alt="Listing Image" />
                <h2 className='mt-3 text-lg font-medium text-black'>{listing.name}</h2>
                <h3 className='mt-3 font-normal text-black text-md'>${listing.price}</h3>
            </div>
        </Link>
    );
};



