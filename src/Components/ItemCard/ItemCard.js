import React from 'react';

const ItemCard = ({ id }) => {
    return (
        <div key={`Item${id}`} id={`Item${id}`} className='flex flex-col w-full aspect-square'>
            <div id={`Item${id}Img`} className='flex w-full border border-red aspect-square'>
                {/* Placeholder for item image */}
            </div>
            <h2 className='mt-3 text-lg font-medium text-black'>Item {id}</h2>
            <h3 className='mt-3 font-normal text-black text-mg'>$ Price</h3>
        </div>
    );
};

export default ItemCard;
