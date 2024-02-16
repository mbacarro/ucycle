import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function NavBar(props) {

    return (
        <header>
            <nav>
                <div className='flex my-2.5'>
                    <div id="search" className='flex items-center justify-center w-[200px] h-8 ml-10 mr-auto border border-black border-solid justify-items-center'>
                        <p>temp search bar</p>
                    </div>
                    <div id="logo">
                        <Link to="/" className="text-2xl font-bold text-violet-700">UCycle</Link>
                    </div>
                    <div id="actions" className='flex items-center justify-center ml-auto'>
                        <button class="h-8 w-28 text-white text-center bg-violet-700 rounded-md hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 focus:outline-none dark:focus:ring-violet-800">
                            Sell
                        </button>
                        <div className='flex gap-4 ml-4'>
                            <div className='w-6 h-6 border border-black border-solid'></div>
                            <div className='w-6 h-6 border border-black border-solid'></div>
                            <div className='w-6 h-6 border border-black border-solid'></div>
                            <div className='w-6 h-6 border border-black border-solid'></div>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )

}