import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../../Components/Navbar/Navbar';
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';


export default function MyStore(props) {
    return (
        <>
            <NavBar />
            <div className='mx-20'>
                <Breadcrumbs />
            </div>
            <div className="flex flex-col gap-20 mt-3 mx-60">
                <div className='flex'>
                    <div className='flex flex-col w-1/4'>
                        <h1 className='text-3xl font-bold'>My Store</h1>
                        <Link to='/account' className='my-4 text-lg font-medium text-neutral-600 hover:bg-gray-100 hover:text-gray-900'>Profile</Link>
                        <Link to='/account/liked' className='my-4 text-lg font-medium text-neutral-600 hover:bg-gray-100 hover:text-gray-900'>Liked</Link>
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

