import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import NavBar from '../../Components/Navbar/Navbar';
import ItemCard from '../../Components/ItemCard/ItemCard';

import womenswearImg from '../../Images/Womenswear.jpg'
import menswearImg from '../../Images/Menswear.jpg'
import homegoodsImg from '../../Images/Homegoods.png'
import electronicsImg from '../../Images/Electronics.png'
import accessoriesImg from '../../Images/Accessories.png'
import miscImg from '../../Images/Misc.png'

export default  function Home(props) {

    const [listings, setListings] = useState(null)

    useEffect(() => {
        const fetchListings = async () => {
            const response = await fetch('/api/listings')
            const json = await response.json()

            if (response.ok) {
                setListings(json)
            }
        }

        fetchListings()
    }, [])

    return (
        <>
            <NavBar />
            <div className='flex flex-col gap-20 my-20 mx-60'>
                {/* Necessities */}
                <div id="Necessities" className='flex justify-center gap-8 '>
                    <div id='Apartment Necessities' className='p-4 flex flex-col w-full aspect-[13/10] bg-apartment bg-cover tint '>
                        <h1 className='z-10 w-1/4 text-2xl font-bold text-white'>Apartment Necessities</h1>
                        <button className='z-10 self-center w-1/4 px-2 py-2 mt-auto mb-4 text-base text-center bg-white border border-black rounded-md'>Shop Now</button>
                    </div>
                    <div id='Dorm Necessities' className='p-4 flex flex-col w-full aspect-[13/10] bg-dorm bg-cover tint'>
                        <h1 className='z-10 w-1/4 text-2xl font-bold text-white'>Dorm Necessities</h1>
                        <button className='z-10 self-center w-1/4 px-2 py-2 mt-auto mb-4 text-base text-center bg-white border border-black rounded-md'>Shop Now</button>
                    </div>
                </div>

                {/* Shop by Categories */}
                <div id='Categories' className='flex flex-col justify-center gap-6'>
                    <h1 className='text-2xl font-bold text-black'>Shop by Category</h1>
                    <div className='grid grid-cols-6 gap-4'>
                        <Link to="/womenswear" className='flex flex-col w-full aspect-square'>
                            <img src={womenswearImg} alt="Womenswear" className='object-cover w-full aspect-square' />
                            <h2 className='mt-3 text-lg font-medium text-black'>Womenswear</h2>
                        </Link>
                        <Link to="/menswear" className='flex flex-col w-full aspect-square'>
                            <img src={menswearImg} alt="Menswear" className='object-cover w-full aspect-square' />
                            <h2 className='mt-3 text-lg font-medium text-black'>Menswear</h2>
                        </Link>
                        <Link to="/homegoods" className='flex flex-col w-full aspect-square'>
                            <img src={homegoodsImg} alt="Home Goods" className='object-cover w-full aspect-square' />
                            <h2 className='mt-3 text-lg font-medium text-black'>Home Goods</h2>
                        </Link>
                        <Link to="/electronics" className='flex flex-col w-full aspect-square'>
                            <img src={electronicsImg} alt="Electronics" className='object-cover w-full aspect-square' />
                            <h2 className='mt-3 text-lg font-medium text-black'>Electronics</h2>
                        </Link>
                        <Link to="/accessories" className='flex flex-col w-full aspect-square '>
                            <img src={accessoriesImg} alt="Accessories" className='object-cover w-full aspect-square' />
                            <h2 className='mt-3 text-lg font-medium text-black'>Accessories</h2>
                        </Link>
                        <Link to="/misc" className='flex flex-col w-full aspect-square'>
                            <img src={miscImg} alt="Misc" className='object-cover w-full aspect-square' />
                            <h2 className='mt-3 text-lg font-medium text-black'>Misc</h2>
                        </Link>
                    </div>
                </div>

                {/* Popular Items */}
                <div id='Categories' className='flex flex-col gap-6 justify-evenly'>
                    <h1 className='text-2xl font-bold text-black'>Recently Posted Items</h1>
                    <div className='grid grid-cols-4 gap-20'>
                        {listings && listings.map(listing => (
                            <ItemCard id={listing._id} listing={listing} />
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
}

