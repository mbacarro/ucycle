import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../../Components/Navbar/Navbar';
import ItemCard from '../../Components/ItemCard/ItemCard';

import womenswearImg from '../../Images/Womenswear.jpg'
import menswearImg from '../../Images/Menswear.jpg'
import homegoodsImg from '../../Images/Homegoods.png'
import electronicsImg from '../../Images/Electronics.png'
import accessoriesImg from '../../Images/Accessories.png'
import miscImg from '../../Images/Misc.png'

export default  function Home(props) {
    const sampleItems = [
        { id: 1, name: 'Sample Item 1', price: 50 },
        { id: 2, name: 'Sample Item 2', price: 30 },
        { id: 3, name: 'Sample Item 3', price: 40 },
        { id: 4, name: 'Sample Item 4', price: 35 },
        { id: 5, name: 'Sample Item 5', price: 45 },
        { id: 6, name: 'Sample Item 6', price: 60 },
        { id: 7, name: 'Sample Item 7', price: 100 },
        { id: 8, name: 'Sample Item 8', price: 150 },
        { id: 9, name: 'Sample Item 9', price: 50 },
        { id: 10, name: 'Sample Item 10', price: 80 },
    ];


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
                        <Link to="/category/womenswear" className='flex flex-col w-full aspect-square'>
                            <img src={womenswearImg} alt="Womenswear" className='object-cover w-full aspect-square' />
                            <h2 className='mt-3 text-lg font-medium text-black'>Womenswear</h2>
                        </Link>
                        <Link to="/category/menswear" className='flex flex-col w-full aspect-square'>
                            <img src={menswearImg} alt="Menswear" className='object-cover w-full aspect-square' />
                            <h2 className='mt-3 text-lg font-medium text-black'>Menswear</h2>
                        </Link>
                        <Link to="/category/homegoods" className='flex flex-col w-full aspect-square'>
                            <img src={homegoodsImg} alt="Home Goods" className='object-cover w-full aspect-square' />
                            <h2 className='mt-3 text-lg font-medium text-black'>Home Goods</h2>
                        </Link>
                        <Link to="/category/electronics" className='flex flex-col w-full aspect-square'>
                            <img src={electronicsImg} alt="Electronics" className='object-cover w-full aspect-square' />
                            <h2 className='mt-3 text-lg font-medium text-black'>Electronics</h2>
                        </Link>
                        <Link to="/category/accessories" className='flex flex-col w-full aspect-square '>
                            <img src={accessoriesImg} alt="Accessories" className='object-cover w-full aspect-square' />
                            <h2 className='mt-3 text-lg font-medium text-black'>Accessories</h2>
                        </Link>
                        <Link to="/category/misc" className='flex flex-col w-full aspect-square'>
                            <img src={miscImg} alt="Misc" className='object-cover w-full aspect-square' />
                            <h2 className='mt-3 text-lg font-medium text-black'>Misc</h2>
                        </Link>
                    </div>
                </div>

                {/* Popular Items */}
                <div id='Categories' className='flex flex-col gap-6 justify-evenly'>
                    <h1 className='text-2xl font-bold text-black'>Popular Items</h1>
                    <div className='grid grid-cols-4 gap-20'>
                        {sampleItems.map(item => (
                            <ItemCard key={item.id} id={item.id} name={item.name} price={item.price} />
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
}

