import React from 'react';

import NavBar from '../../Components/Navbar/Navbar';
import ItemCard from '../../Components/ItemCard/ItemCard';



export default  function Home(props) {
    return (
        <>
            <NavBar />
            <div className='flex flex-col gap-20 mx-20 my-20'>
                {/* Necessities */}
                <div id="Necessities" className='flex justify-center gap-8 '>
                    <div id='Apartment Necessities' className='p-4 flex flex-col w-1/3 aspect-[13/10] bg-apartment bg-cover tint '>
                        <h1 className='z-10 w-1/4 text-2xl font-bold text-white'>Apartment Necessities</h1>
                        <button className='z-10 self-center w-1/4 px-2 py-2 mt-auto mb-4 text-base text-center bg-white border-2 border-black rounded-md'>Shop Now</button>
                    </div>
                    <div id='Dorm Necessities' className='p-4 flex flex-col w-1/3 aspect-[13/10] bg-dorm bg-cover tint'>
                        <h1 className='z-10 w-1/4 text-2xl font-bold text-white'>Dorm Necessities</h1>
                        <button className='z-10 self-center w-1/4 px-2 py-2 mt-auto mb-4 text-base text-center bg-white border-2 border-black rounded-md'>Shop Now</button>
                    </div>
                </div>

                {/* Shop by Categories */}
                <div id='Categories' className='flex flex-col justify-center gap-6'>
                    <h1 className='text-2xl font-bold text-black'>Shop by Category</h1>
                    <div className='flex gap-8'>
                        <div id='Womenswear' className='flex flex-col w-1/6 aspect-square'>
                            <div id='Womenswear Img' className='flex w-full border border-red aspect-square'>

                            </div>
                            <h2 className='mt-3 text-lg font-medium text-black'>Womenswear</h2>
                        </div>
                        <div id='Menswear' className='flex flex-col w-1/6 aspect-square'>
                            <div id='Menswear Img' className='flex w-full border border-red aspect-square'>

                            </div>
                            <h2 className='mt-3 text-lg font-medium text-black'>Menswear</h2>
                        </div>
                        <div id='Home Goods' className='flex flex-col w-1/6 aspect-square'>
                            <div id='Home Goods Img' className='flex w-full border border-red aspect-square'>

                            </div>
                            <h2 className='mt-3 text-lg font-medium text-black'>Home Goods</h2>
                        </div>
                        <div id='Electronics' className='flex flex-col w-1/6 aspect-square'>
                            <div id='Electronics Img' className='flex w-full border border-red aspect-square'>

                            </div>
                            <h2 className='mt-3 text-lg font-medium text-black'>Electronics</h2>
                        </div>
                        <div id='Accessories' className='flex flex-col w-1/6 aspect-square'>
                            <div id='Accessories Img' className='flex w-full border border-red aspect-square'>

                            </div>
                            <h2 className='mt-3 text-lg font-medium text-black'>Accessories</h2>
                        </div>
                        <div id='Misc' className='flex flex-col w-1/6 aspect-square'>
                            <div id='Misc Img' className='flex w-full border border-red aspect-square'>

                            </div>
                            <h2 className='mt-3 text-lg font-medium text-black'>Misc</h2>
                        </div>
                    </div>
                </div>

                {/* Popular Itme */}
                <div id='Categories' className='flex flex-col gap-6 justify-evenly'>
                    <h1 className='text-2xl font-bold text-black'>Popular Items</h1>
                    <div className='grid grid-cols-4 gap-10'>
                        {[...Array(10).keys()].map((i) => (
                            <ItemCard key={i + 1} id={i + 1} />
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
}

