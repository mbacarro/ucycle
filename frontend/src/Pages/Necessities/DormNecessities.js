import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import NavBar from '../../Components/Navbar/Navbar';
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';
import ItemCard from '../../Components/ItemCard/ItemCard';

const ApartmentNecessities = () => {
    const [miscItems, setMiscItems] = useState([]);
    const [officeItems, setOfficeItems] = useState([]);
    const [homegoodsItems, setHomegoodsItems] = useState([]);
    const [bedroomItems, setBedroomItems] = useState([]);
    const [electronicsItems, setElectronicsItems] = useState([]);

    useEffect(() => {
        const fetchListings = async () => {
            const response = await fetch('/api/listings/category/Misc')
            const json = await response.json()

            if (response.ok) {
                setMiscItems(json)
            }
        }
        const fetchBedding = async () => {
            const response = await fetch('/api/listings/category/Home%20Goods')
            const json = await response.json()

            if (response.ok) {
                setHomegoodsItems(json)
            }
        }
        const fetchElectronics = async () => {
            const response = await fetch('/api/listings/category/Electronics')
            const json = await response.json()

            if (response.ok) {
                setElectronicsItems(json)
            }
        }

        fetchListings()
        fetchBedding()
        fetchElectronics()
    }, [])

    useEffect(() => {
        const getLast4Items = (items, subcategory) => {
            return items
                .filter(item => item.subcategory.toLowerCase() === subcategory.toLowerCase())
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .slice(0, 4);
        };

        const bedroomm = getLast4Items(homegoodsItems, 'bedroom');
        setBedroomItems(bedroomm);

        const officeItems = getLast4Items(miscItems, 'office supplies');
        setOfficeItems(officeItems);

        const electronics = electronicsItems.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 4);
        setElectronicsItems(electronics);
    }, [miscItems, homegoodsItems]);

    return (
        <>
            <NavBar />
            <div className='mx-20'>
                <Breadcrumbs />
            </div>
            <div className='mb-20 mx-60'>
                <h1 className='text-3xl font-bold'>Dorm Necessities</h1>

                <h2 className='mt-16 mb-12 text-lg font-bold'>Shop dorm necessities by category</h2>
                <div className='grid grid-cols-3 gap-10'>
                    <Link to={`/homegoods/Bedroom`}>
                        <div id='Dorm Necessities' className='p-4 flex flex-col w-full aspect-[13/10] bg-bedroom bg-cover tint'>
                            <h1 className='z-10 text-2xl font-bold text-white'>Bedroom</h1>
                        </div>
                    </Link>
                    <Link to={`/misc/Office%20Supplies`}>
                        <div id='Dorm Necessities' className='p-4 flex flex-col w-full aspect-[13/10] bg-deskarea bg-cover tint'>
                            <h1 className='z-10 text-2xl font-bold text-white'>Office Supplies</h1>
                        </div>
                    </Link>
                    <Link to={`/electronics`}>
                        <div id='Dorm Necessities' className='p-4 flex flex-col w-full aspect-[13/10] bg-electronics bg-cover tint'>
                            <h1 className='z-10 text-2xl font-bold text-white'>Electronics</h1>
                        </div>
                    </Link>
                </div>

                <hr className='my-20 border' />

                <div className='text-black '>
                    <h2 className='mb-10 text-2xl font-bold text-center'>Essential Items for Your Dorm</h2>
                    <div className='flex justify-center gap-20'>
                        <ul className='list-disc list-inside'>
                            <li>Bedding (twin XL sheets, pillows, comforter)</li>
                            <li>Mattress topper</li>
                            <li>Desk and chair</li>
                            <li>Study lamp</li>
                            <li>Closet organizers</li>
                            <li>Kitchenware (plates, bowls, utensils, cups)</li>
                            <li>Microwave</li>
                            <li>Mini fridge</li>
                            <li>Storage bins</li>
                            <li>Shower caddy</li>
                        </ul>
                        <ul className='list-disc list-inside'>
                            <li>Laundry basket</li>
                            <li>Shower shoes</li>
                            <li>Toiletries (toothbrush, toothpaste, shampoo, soap)</li>
                            <li>Towels (bath, hand, washcloth)</li>
                            <li>Trash bins</li>
                            <li>Basic tool kit (screwdrivers, hammer, nails)</li>
                            <li>Extension cords and power strips</li>
                            <li>First aid kit</li>
                            <li>Alarm clock</li>
                            <li>Fan or space heater</li>
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

                <h2 className='mt-16 mb-12 text-lg font-bold'>Elevate your study space and needs</h2>
                <div className='grid grid-cols-4 gap-20'>
                    {officeItems && officeItems.map(listing => (
                        <ItemCard id={listing._id} listing={listing} />
                    ))}
                </div>

                <h2 className='mt-16 mb-12 text-lg font-bold'>Get unused electronics from other students!</h2>
                <div className='grid grid-cols-4 gap-20'>
                    {electronicsItems && electronicsItems.map(listing => (
                        <ItemCard id={listing._id} listing={listing} />
                    ))}
                </div>

            </div>

        </>
    );
};

export default ApartmentNecessities;