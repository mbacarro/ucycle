import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';

import BagIcon from '../../Images/BagIcon.svg'
import InboxIcon from '../../Images/InboxIcon.svg'
import NotificationsIcon from '../../Images/NotificationsIcon.svg'
import ProfileIcon from '../../Images/ProfileIcon.svg'

export default function NavBar(props) {

    return (
        <header>
            <nav>
                {/* Top Header */}
                <div className='flex my-2.5 px-10 shadow-lg'>
                    <Link to="/" className="text-[42px] font-bold text-violet-700 mr-8 my-auto">UCycle</Link>

                    {/* <div id="search" className='flex items-center justify-center h-10 my-auto mr-auto border border-black border-solid rounded-full w-52 justify-items-center'>
                        <p>temp search bar</p>
                    </div> */}
                    <div id="actions" className='flex items-center justify-center my-auto ml-auto'>
                        <button className="w-32 h-10 text-xl text-center text-white rounded-full bg-violet-700 hover:bg-violet-800">
                            <Link to='/Sell'>Sell</Link>
                        </button>
                        <div className='flex gap-4 ml-8'>
                            <Link to='/Profile' className='w-6 h-6'>
                                <img src={ProfileIcon} alt='Icon 1' className='w-full h-full' />
                            </Link>
                            <img
                                src={NotificationsIcon}
                                className='w-6 h-6'
                            />
                            <Link to='/Inbox' className='w-6 h-6'>
                                <img src={InboxIcon} alt='Icon 3' className='w-full h-full' />
                            </Link>
                            <Link to='/Bag' className='w-6 h-6'>
                                <img src={BagIcon} alt='Icon 4' className='w-full h-full' />
                            </Link>
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