import React from 'react';
import { useParams } from 'react-router-dom';
import { items } from '../../SampleInventory/sampleInventory';

import NavBar from '../../Components/Navbar/Navbar';

function findItemById(itemId) {
    itemId = Number(itemId);
    for (const category in items) {
        const categoryItems = items[category];
        const foundItem = categoryItems.find(item => item.itemID === itemId);
        if (foundItem) {
            return foundItem;
        }
    }
    return null;
}

const ItemDetails = () => {
    const { itemId } = useParams();
    const item = findItemById(itemId);

    if (!item) {
        return (
            <>
                <NavBar />
                <div className="mx-40 my-20">Item not found</div>;
            </>


        )
    }

    return (
        <>
            <NavBar />
            <div className="mx-40 my-20">
                <h1 className="text-3xl font-bold text-black">{item.name}</h1>
                <p className="mt-4 text-lg font-medium text-black">Price: ${item.price}</p>
                <p className="text-lg font-medium text-black">Condition: {item.condition}</p>
                <p className="text-lg font-medium text-black">Description: {item.description}</p>
                <p className="text-lg font-medium text-black">Pickup Locations: {item.pickupLocations.join(', ')}</p>
                <p className="text-lg font-medium text-black">Payment Methods: {item.paymentMethod.join(', ')}</p>
                <p className="text-lg font-medium text-black">Seller ID: {item.sellerID}</p>
            </div>
        </>
    );
};

export default ItemDetails;
