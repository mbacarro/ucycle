import React from 'react';

import NavBar from '../../Components/Navbar/Navbar';
import Bag from '../../Components/Bag/Bag';

export default function ShoppingBag(props) {
    return (
        <>
            <NavBar />
            <div className='flex flex-col gap-6 my-20 mx-60'>
                <div>
                    <h1 className='text-2xl font-bold'>Julie's Shopping Bag</h1>
                    <p>12 Items in your bag</p>
                </div>
                <Bag/>
                <Bag />
                <Bag />
            </div>
        </>

    );
}

