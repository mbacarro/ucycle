import React from 'react';
import { Link } from 'react-router-dom';

export default function ItemCard(props) {
    return (
        <Link to={`/item/${props.id}`} className='block'>
            <div key={`Item${props.id}`} id={`Item${props.id}`} className='flex flex-col w-full aspect-square'>
                <div id={`Item${props.id}Img`} className='flex w-full border border-red aspect-square'>
                    {/* Placeholder for item image */}
                </div>
                <h2 className='mt-3 text-lg font-medium text-black'>{props.name}</h2>
                <h3 className='mt-3 font-normal text-black text-mg'>${props.price}</h3>
            </div>
        </Link>
    );
};



