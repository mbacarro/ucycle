import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import NavBar from '../../Components/Navbar/Navbar';
import ItemCard from '../../Components/ItemCard/ItemCard';

import womenswearImg from '../../Images/Womenswear.jpg'
import menswearImg from '../../Images/Menswear.jpg'
import homegoodsImg from '../../Images/Homegoods.png'
import electronicsImg from '../../Images/Electronics.png'
import accessoriesImg from '../../Images/Accessories.png'
import miscImg from '../../Images/Misc.png'
import homePageImg from '../../Images/HomePage.png'
import sustainabilityImg from '../../Images/Sustainability.svg'
import safteyImg from '../../Images/Safety.svg'
import savingsImg from '../../Images/Savings.svg'





export default  function Home(props) {

    const [listings, setListings] = useState(null)

    const navigate = useNavigate();

    useEffect(() => {
        const fetchListings = async () => {
            const response = await fetch('/api/listings')
            const json = await response.json()

            if (response.ok) {
                const recentListings = json.slice(0, 8);
                setListings(recentListings)
            }
        }

        fetchListings()
    }, [])

    const goToDormEssentials = () => {
        navigate('/dorm-necessities')
    }
    const goToAprtEssentials = () => {
        navigate('/apartment-necessities')
    }

    return (
        <>
            <NavBar />
            <div className='flex flex-col gap-20 my-20 mx-60'>

                <div className='flex justify-center gap-20'>
                    <img src={homePageImg} alt="" />
                    <div id='About' className='flex flex-col justify-center w-1/2 gap-4'>
                        <h1 className='text-4xl font-bold text-black'>Need a new home for your favorite items?</h1>
                        <p className='text-lg text-black'>Browse listings made by other UW students or find your own things a loving home by selling them on UCycle.</p>
                        <div className='flex gap-5'>
                            <Link to='/login'>
                                <button className="h-12 text-xl text-center text-white rounded-full w-44 bg-violet-700 hover:bg-violet-800">
                                    Login
                                </button>
                            </Link>
                            <Link to='/register'>
                                <button className="h-12 text-xl font-bold text-center border border-2 rounded-full w-44 text-violet-700 border-violet-700">
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Shop by Categories */}
                <div id='Categories' className='flex flex-col justify-center gap-6'>
                    <div class="flex items-center justify-center w-full">
                        <h1 className='mr-4 text-2xl font-bold text-black whitespace-nowrap'>Shop by Category</h1>
                        <hr class="flex-grow h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                    </div>
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
                
                {/* Necessities */}
                <div>
                    <div class="flex items-center justify-center w-full mb-6">
                        <h1 className='mr-4 text-2xl font-bold text-black whitespace-nowrap'>Essentials</h1>
                        <hr class="flex-grow h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                    </div>
                    <div id="Necessities" className='flex justify-center gap-10 '>
                        <div id='Apartment Necessities' className='p-4 flex flex-col w-full aspect-[13/8] bg-apartment bg-cover tint '>
                            <h1 className='z-10 w-1/4 text-2xl font-bold text-white'>Apartment Necessities</h1>
                            <button onClick={goToAprtEssentials}
                            className='z-10 self-center w-1/4 px-2 py-2 mt-auto mb-4 text-base text-center bg-white border border-black rounded-md'>Shop Now</button>
                        </div>
                        <div id='Dorm Necessities' className='p-4 flex flex-col w-full aspect-[13/8] bg-dorm bg-cover tint'>
                            <h1 className='z-10 w-1/4 text-2xl font-bold text-white'>Dorm Necessities</h1>
                            <button onClick={goToDormEssentials}
                            className='z-10 self-center w-1/4 px-2 py-2 mt-auto mb-4 text-base text-center bg-white border border-black rounded-md'>Shop Now</button>
                        </div>
                    </div>
                </div>

                {/* Why UCycle */}
                <div>
                    <div class="flex items-center justify-center w-full mb-6">
                        <h1 className='mr-4 text-2xl font-bold text-black whitespace-nowrap'>Why Ucycle?</h1>
                        <hr class="flex-grow h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                    </div>
                    <div id="Necessities" className='grid grid-cols-3 gap-4'>
                        <div className='flex flex-col items-center justify-center w-full gap-2 px-10 py-20 border'>
                            <img src={sustainabilityImg} alt="Sustainability Image" />
                            <h3 className='font-medium'>Sustainability</h3>
                            <p className='text-center'>Find items you don’t need anymore. Start spring cleaning your dorm or apartment.</p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-full gap-2 px-10 py-20 border'>
                            <img src={safteyImg} alt="Sustainability Image" />
                            <h3 className='font-medium'>Safety</h3>
                            <p className='text-center'>Ensure safety by allowing buyers to inspect items firsthand and verify their condition.</p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-full gap-2 px-10 py-20 border'>
                            <img src={savingsImg} alt="Sustainability Image" />
                            <h3 className='font-medium'>Savings</h3>
                            <p className='text-center'>Allows for negotiation and bargaining, potentially securing items at lower prices compared to buying new.</p>
                        </div>
                    </div>
                </div>


                {/* Recently Posted Items */}
                <div id='Categories' className='flex flex-col gap-6 justify-evenly'>
                    <div class="flex items-center justify-center w-full">
                        <h1 className='mr-4 text-2xl font-bold text-black whitespace-nowrap'>Recently Posted Items</h1>
                        <hr class="flex-grow h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                    </div>
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

