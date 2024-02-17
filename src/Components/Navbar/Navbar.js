import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';

export default function NavBar(props) {

    return (
        <header>
            <nav>
                {/* Top Header */}
                <div className='flex my-2.5 px-10 shadow-lg'>
                    <Link to="/" className="text-[42px] font-bold text-violet-700 mr-8 my-auto">UCycle</Link>

                    <div id="search" className='flex items-center justify-center h-10 my-auto mr-auto border border-black border-solid rounded-full w-52 justify-items-center'>
                        <p>temp search bar</p>
                    </div>
                    <div id="actions" className='flex items-center justify-center my-auto ml-auto'>
                        <button class="h-10 w-32 text-white text-center text-xl bg-violet-700 rounded-full hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 focus:outline-none dark:focus:ring-violet-800">
                            Sell
                        </button>
                        <div className='flex gap-4 ml-8'>
                            <div className='w-6 h-6 border border-black border-solid'></div>
                            <div className='w-6 h-6 border border-black border-solid'></div>
                            <div className='w-6 h-6 border border-black border-solid'></div>
                            <div className='w-6 h-6 border border-black border-solid'></div>
                        </div>
                    </div>
                </div>
                {/* Bottom Header */}
                <div className='flex justify-center'>
                    <Dropdown 
                        buttonText="Womenswear"
                        options={["option 1", "option 2"]} 
                    />
                    <Dropdown
                        buttonText="Menswear"
                        options={["option 1", "option 2"]}
                    />
                    <Dropdown
                        buttonText="Home Goods"
                        options={["option 1", "option 2"]}
                    />
                    <Dropdown
                        buttonText="Electronics"
                        options={["option 1", "option 2"]}
                    />
                    <Dropdown
                        buttonText="Accessories"
                        options={["option 1", "option 2"]}
                    />
                    <Dropdown
                        buttonText="Misc"
                        options={["option 1", "option 2"]}
                    />
                </div>
            </nav>
        </header>
    )

}