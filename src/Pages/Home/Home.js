import React from 'react';

import NavBar from '../../Components/Navbar/Navbar';
import ItemCard from '../../Components/ItemCard/ItemCard';

import womenswearImg from '../../Images/Womenswear.jpg'
import menswearImg from '../../Images/Menswear.jpg'
import homegoodsImg from '../../Images/Homegoods.png'
import electronicsImg from '../../Images/Electronics.png'
import accessoriesImg from '../../Images/Accessories.png'
import miscImg from '../../Images/Misc.png'

export default  function Home(props) {
    return (
        <>
            <NavBar />
            <div className='flex flex-col gap-20 mx-40 my-20'>
                {/* Necessities */}
                <div id="Necessities" className='flex justify-center gap-8 '>
                    <div id='Apartment Necessities' className='p-4 flex flex-col w-1/3 aspect-[13/10] bg-apartment bg-cover tint '>
                        <h1 className='z-10 w-1/4 text-2xl font-bold text-white'>Apartment Necessities</h1>
                        <button className='z-10 self-center w-1/4 px-2 py-2 mt-auto mb-4 text-base text-center bg-white border border-black rounded-md'>Shop Now</button>
                    </div>
                    <div id='Dorm Necessities' className='p-4 flex flex-col w-1/3 aspect-[13/10] bg-dorm bg-cover tint'>
                        <h1 className='z-10 w-1/4 text-2xl font-bold text-white'>Dorm Necessities</h1>
                        <button className='z-10 self-center w-1/4 px-2 py-2 mt-auto mb-4 text-base text-center bg-white border border-black rounded-md'>Shop Now</button>
                    </div>
                </div>

                {/* Shop by Categories */}
                <div id='Categories' className='flex flex-col justify-center gap-6'>
                    <h1 className='text-2xl font-bold text-black'>Shop by Category</h1>
                    <div className='grid grid-cols-6 gap-4'>
                        <div id='Womenswear' className='flex flex-col w-full aspect-square'>
                            <img src={womenswearImg} alt="Womenswear" className='object-cover w-full aspect-square'/>
                            <h2 className='mt-3 text-lg font-medium text-black'>Womenswear</h2>
                        </div>
                        <div id='Menswear' className='flex flex-col w-full aspect-square'>
                            <img src={menswearImg} alt="Menswear" className='object-cover w-full aspect-square' />
                            <h2 className='mt-3 text-lg font-medium text-black'>Menswear</h2>
                        </div>
                        <div id='Home Goods' className='flex flex-col w-full aspect-square'>
                            <img src={homegoodsImg} alt="Home Goods" className='object-cover w-full aspect-square' />
                            <h2 className='mt-3 text-lg font-medium text-black'>Home Goods</h2>
                        </div>
                        <div id='Electronics' className='flex flex-col w-full aspect-square'>
                            <img src={electronicsImg} alt="Electronics" className='object-cover w-full aspect-square' />
                            <h2 className='mt-3 text-lg font-medium text-black'>Electronics</h2>
                        </div>
                        <div id='Accessories' className='flex flex-col w-full aspect-square '>
                            <img src={accessoriesImg} alt="Accessories" className='object-cover w-full aspect-square' />
                            <h2 className='mt-3 text-lg font-medium text-black'>Accessories</h2>
                        </div>
                        <div id='Misc' className='flex flex-col w-full aspect-square'>
                            <img src={miscImg} alt="Misc" className='object-cover w-full aspect-square' />
                            <h2 className='mt-3 text-lg font-medium text-black'>Misc</h2>
                        </div>
                    </div>
                </div>

                {/* Popular Items */}
                <div id='Categories' className='flex flex-col gap-6 justify-evenly'>
                    <h1 className='text-2xl font-bold text-black'>Popular Items</h1>
                    <div className='grid grid-cols-4 gap-20'>
                        {[...Array(10).keys()].map((i) => (
                            <ItemCard key={i + 1} id={i + 1} />
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
}

