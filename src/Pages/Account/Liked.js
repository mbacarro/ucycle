import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../../Components/Navbar/Navbar';

export default function Liked(props) {
    return (
        <>
            <NavBar />
            <div className="flex flex-col gap-20 my-20 mx-60">
                <div className='flex'>
                    <div className='flex flex-col w-1/4'>
                        <h1 className='text-3xl font-bold'>Liked</h1>
                        <Link to='/account' className='my-4 text-lg font-medium text-neutral-600 hover:bg-gray-100 hover:text-gray-900'>Profile</Link>
                        <Link to='/account/my-store' className='my-4 text-lg font-medium text-neutral-600 hover:bg-gray-100 hover:text-gray-900'>My Store</Link>
                        <Link to='/account/settings' className='my-4 text-lg font-medium text-neutral-600 hover:bg-gray-100 hover:text-gray-900'>Settings</Link>
                        <button className='my-4 text-lg font-medium text-left text-neutral-600 hover:bg-gray-100 hover:text-gray-900'>Log Out</button>
                    </div>
                    <div className='w-3/4 h-screen border border-black'>

                    </div>
                </div>
            </div>
        </>

    );
}

