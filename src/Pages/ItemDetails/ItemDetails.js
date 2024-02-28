import React from 'react';
import { useParams } from 'react-router-dom';
import { items } from '../../SampleInventory/sampleInventory';

import NavBar from '../../Components/Navbar/Navbar';
import SchoolIcon from '../../Images/SchoolIcon.svg'
import BuildingIcon from '../../Images/BuildingIcon.svg'
import BoxIcon from '../../Images/BoxIcon.svg'

import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';


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
                <Breadcrumbs />
                <div className="mx-40 mt-3">Item not found</div>;
            </>


        )
    }

    console.log(item.pickupLocations)
    console.log(item.paymentMethod)


    return (
        <>
            <NavBar />
            <div className='mx-24'>
                <Breadcrumbs />
            </div>

            <div className="mx-40 mt-3">
                {/* Item */}
                <div className='flex'>
                    {/* Item Images*/}
                    <div className='flex justify-center w-1/2 h-fit gap-9'>
                        {/* Image Options*/}
                        <div className='flex flex-col gap-2'>
                            <div className='w-24 h-24 border border-black'></div>
                            <div className='w-24 h-24 border border-black'></div>
                            <div className='w-24 h-24 border border-black'></div>
                            <div className='w-24 h-24 border border-black'></div>
                        </div>
                        {/* Image Preview*/}
                        <div className='w-3/5 border border-black aspect-square'>

                        </div>
                    </div>
                    {/* Item Details*/}
                    <div className='w-1/2 h-fit'>
                        {/* General Item Info*/}
                        <div className='mx-2.5 mb-2'>
                            <h1 className='text-2xl font-semibold'>{item.name}</h1>
                            <p className='mb-3 text-lg'>${item.price}</p>
                            <p className='mb-3 text-base'>{item.description}</p>
                            <div className='flex gap-3 mb-8'>
                                <div className='w-8 h-8 rounded-full'></div>
                                <div className='w-8 h-8 rounded-full'></div>
                            </div>
                            <div className='flex gap-3'>
                                <button className="px-10 py-2 text-xl font-semibold text-center text-white border rounded h-fit w-fit bg-violet-700 hover:bg-violet-800">Add to bag</button>
                                <button className="px-10 py-2 text-xl font-semibold text-center text-black border border-black rounded h-fit w-fit">Report Item</button>
                            </div>
                        </div>
                        <hr className='my-8 border mx-2.5'/>
                        {/* Pickup Options*/}
                        <div className='mx-2.5 mb-2 '>
                            <h2 className='mb-4 text-lg font-semibold'>Pick-up Options</h2>
                            <div className='mx-2 flex flex-col gap-2.5'>
                                <div className='flex gap-2.5'>
                                    <img src={SchoolIcon} alt="" />
                                    <h3 className='text-base'>Available for on-campus pickup</h3>
                                </div>
                                <li>{item.pickupLocations.join(', ')}</li>
                                <div className='flex gap-2.5'>
                                    <img src={BuildingIcon} alt="" />
                                    <h3 className='text-base'>Available for off-campus pickup</h3>
                                </div>
                                <li>{item.pickupLocations.join(', ')}</li>
                                <div className='flex gap-2.5'>
                                    <img src={BoxIcon} alt="" />
                                    <h3 className='text-base'>No refunds or returns</h3>
                                </div>
                            </div>
                        </div>
                        <hr className='my-8 border mx-2.5' />
                        {/* Seller Information*/}
                        <div className='mx-2.5 mb-2 '>
                            <h2 className='mb-4 text-lg font-semibold'>Seller Information</h2>
                            <div className='flex gap-3 mx-2 my-9'>
                                <div className='border border-black h-14 w-14'>Profile Img</div>
                                <div className='flex flex-col'>
                                    <h3 className='text-lg font-semibold'>{item.sellerID}</h3>
                                    <div>Rating Placeholder</div>
                                </div>
                            </div>
                            <button className="w-2/3 px-10 py-2 text-base font-semibold text-center text-black border border-black rounded h-fit">Message seller</button>

                        </div>
                    </div>
                </div>

                {/* More Items from Seller Shop*/}
                <div>

                </div>
            </div>
            <div className='mx-40 my-20'>
                <h2 className='text-2xl font-bold my-7'>More items from {item.sellerID}'s Shop</h2>
                <p >Condition: {item.condition}</p>
                <p >Payment Methods: {item.paymentMethod.join(', ')}</p>
            </div>
        </>
    );
};

export default ItemDetails;
