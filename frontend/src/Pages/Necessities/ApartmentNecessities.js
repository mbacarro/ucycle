import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import NavBar from '../../Components/Navbar/Navbar';
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';
import ItemCard from '../../Components/ItemCard/ItemCard';

const ApartmentNecessities = () => {
    const [listings, setListings] = useState([]);
    const [kitchenItems, setKitchenItems] = useState([]);
    const [livingRoomItems, setLivingRoomItems] = useState([]);
    const [bedroomItems, setBedroomItems] = useState([]);

    useEffect(() => {
        const fetchListings = async () => {
            const response = await fetch('/api/listings/category/Home%20Goods')
            const json = await response.json()

            if (response.ok) {
                setListings(json)
            }
        }

        fetchListings()
        console.log(listings)
    }, [])

    useEffect(() => {
        const getLast4Items = (items, subcategory) => {
            return items
                .filter(item => item.subcategory.toLowerCase() === subcategory.toLowerCase())
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .slice(0, 4);
        };

        // Get the last 4 kitchen items
        const kitchen = getLast4Items(listings, 'kitchen');
        setKitchenItems(kitchen);

        // Get the last 4 living room items
        const livingroom = getLast4Items(listings, 'living room');
        setLivingRoomItems(livingroom);

        // Get the last 4 bedroom items
        const bedroom = getLast4Items(listings, 'bedroom');
        setBedroomItems(bedroom);

        console.log("Kitchen Items: ", kitchen);
        console.log("Living Room Items: ", livingroom);
        console.log("Bedroom Items: ", bedroom);
    }, [listings]);

    return (
        <>
            <NavBar />
            <div className='mx-20'>
                <Breadcrumbs />
            </div>
            <div className='mb-20 mx-60'>
                <h1 className='text-3xl font-bold'>Apartment Necessities</h1>
                
                <h2 className='mt-16 mb-12 text-lg font-bold'>Shop apartment necessities by category</h2>
                <div className='grid grid-cols-3 gap-10'>
                    <Link to={`/homegoods/Bedroom`}>
                        <div id='Dorm Necessities' className='p-4 flex flex-col w-full aspect-[13/10] bg-bedroom bg-cover tint'>
                            <h1 className='z-10 text-2xl font-bold text-white'>Bedroom</h1>
                        </div>
                    </Link>
                    <Link to={`/homegoods/Kitchen`}>
                        <div id='Dorm Necessities' className='p-4 flex flex-col w-full aspect-[13/10] bg-kitchen bg-cover tint'>
                            <h1 className='z-10 text-2xl font-bold text-white'>Kitchen</h1>
                        </div>
                    </Link>
                    <Link to={`/homegoods/Living%20Room`}>
                        <div id='Dorm Necessities' className='p-4 flex flex-col w-full aspect-[13/10] bg-livingroom bg-cover tint'>
                            <h1 className='z-10 text-2xl font-bold text-white'>Living Room</h1>
                        </div>
                    </Link>
                </div>

                <hr className='my-20 border' />

                <div className='text-black '>
                    <h2 className='mb-10 text-2xl font-bold text-center'>Essential Items for Your Apartment</h2>
                    <div className='flex justify-center gap-20'>

                        <ul className='list-disc list-inside'>
                            <li>Bedding (sheets, pillows, comforter)</li>
                            <li>Mattress topper</li>
                            <li>Desk and chair</li>
                            <li>Study lamp</li>
                            <li>Closet organizers</li>
                            <li>Kitchenware (plates, bowls, utensils, cups)</li>
                            <li>Cooking essentials (pots, pans, spatula)</li>
                            <li>Microwave</li>
                            <li>Mini fridge</li>
                            <li>Cleaning supplies (broom, mop, cleaning solutions)</li>
                        </ul>
                        <ul className='list-disc list-inside'>
                            <li>Laundry basket</li>
                            <li>Shower curtain and bath mat</li>
                            <li>Toiletries (toothbrush, toothpaste, shampoo, soap)</li>
                            <li>Towels (bath, hand, washcloth)</li>
                            <li>Trash bins (kitchen and bathroom)</li>
                            <li>Basic tool kit (screwdrivers, hammer, nails)</li>
                            <li>Storage containers</li>
                            <li>Extension cords and power strips</li>
                            <li>First aid kit</li>
                            <li>Alarm clock</li>
                        </ul>
                    </div>
                </div>



                <hr className='my-20 border' />


                <h2 className='mt-16 mb-12 text-lg font-bold'>Decorate your room with these latest items</h2>
                <div className='grid grid-cols-4 gap-20'>
                    {bedroomItems && bedroomItems.map(listing => (
                        <ItemCard id={listing._id} listing={listing} />
                    ))}
                </div>

                <h2 className='mt-16 mb-12 text-lg font-bold'>Recent kitchen applilances for all your cooking needs</h2>
                <div className='grid grid-cols-4 gap-20'>
                    {kitchenItems && kitchenItems.map(listing => (
                        <ItemCard id={listing._id} listing={listing} />
                    ))}
                </div>

                <h2 className='mt-16 mb-12 text-lg font-bold'>Creating comfort and style in your living room</h2>
                <div className='grid grid-cols-4 gap-20'>
                    {livingRoomItems && livingRoomItems.map(listing => (
                        <ItemCard id={listing._id} listing={listing} />
                    ))}
                </div>

            </div>

        </>
    );
};

export default ApartmentNecessities;