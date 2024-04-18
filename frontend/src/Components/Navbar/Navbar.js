import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import Cookies from 'js-cookie'

import BagIcon from '../../Images/BagIcon.svg'
import InboxIcon from '../../Images/InboxIcon.svg'
import NotificationsIcon from '../../Images/NotificationsIcon.svg'
import ProfileIcon from '../../Images/ProfileIcon.svg'

import { filters } from '../../SampleInventory/sampleInventory';

export default function NavBar(props) {

    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const handleMouseLeave = () => {
        setIsProfileOpen(false);
    };

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await fetch('/api/auth/profile', {
                    method: 'GET',
                    credentials: 'include', // Include cookies in the request
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch profile data');
                }

                const data = await response.json();
                if (data.success) {
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
                
            } catch (error) {
                console.error('Error fetching profile data:', error.message);
            }
        };

        fetchProfileData();
    }, []);

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/auth/logout', {
                method: 'POST',
                credentials: 'include', // Include cookies in the request
            });
    

            const data = await response.json();
            // If the logout was successful, clear the cookie on the frontend
            if (data.success) {
                Cookies.remove('user', { path: '/', domain: 'localhost'})
                alert("Successfully Logged Out")
                
            }
            } catch (error) {
            console.error('Error logging out:', error);
            }
    };

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
                        {isLoggedIn ? (
                                <>
                                    <button className="w-32 h-10 text-xl text-center text-white rounded-full bg-violet-700 hover:bg-violet-800">
                                        <Link to='/sell'>Sell</Link>
                                    </button>
                                    <div className='flex gap-4 ml-8'>
                                        <div className='relative w-6 h-6'>
                                            <button
                                                type='button'
                                                className=''
                                                onClick={() => setIsProfileOpen(!isProfileOpen)}>
                                                <img src={ProfileIcon} alt='Icon 1' className='w-full h-full' />
                                            </button>
                                            {isProfileOpen && (
                                                <div id='profile dropdown' className="absolute z-20 mt-4 transform -translate-x-1/2 bg-white rounded-md shadow-md w-fit left-1/2" onMouseLeave={handleMouseLeave}>
                                                            <div className="flex flex-col px-10" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                                <h1 className='inline-block mb-5 text-xl font-bold whitespace-nowrap text-violet-700'>Account</h1>
                                                                <Link to='/account' className='inline-block mb-2 font-medium text-gray-700 cursor-pointer whitespace-nowrap hover:bg-gray-100 hover:text-gray-900'>Profile</Link>
                                                                <Link to='/account/my-store' className='inline-block mb-2 font-medium text-gray-700 cursor-pointer whitespace-nowrap hover:bg-gray-100 hover:text-gray-900'>My Store</Link>
                                                                <Link to='/account/liked' className='inline-block mb-2 font-medium text-gray-700 cursor-pointer whitespace-nowrap hover:bg-gray-100 hover:text-gray-900'>Liked</Link>
                                                                <Link to='/account/settings' className='inline-block mb-2 font-medium text-gray-700 cursor-pointer whitespace-nowrap hover:bg-gray-100 hover:text-gray-900'>Settings</Link>
                                                                <button onClick={handleLogout} className='inline-block mb-2 font-medium text-gray-700 cursor-pointer whitespace-nowrap hover:bg-gray-100 hover:text-gray-900'>Log Out</button>
                                                                
                                                            </div>
                                                    </div>
                                            )}
                                        </div>
                                        {/* <img
                                            src={NotificationsIcon}
                                            className='w-6 h-6'
                                        /> */}
                                        <Link to='/inbox' className='w-6 h-6'>
                                            <img src={InboxIcon} alt='Icon 3' className='w-full h-full' />
                                        </Link>
                                        <Link to='/shopping-bag' className='w-6 h-6'>
                                            <img src={BagIcon} alt='Icon 4' className='w-full h-full' />
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <Link to='/login' className='inline-block mb-2 font-medium text-gray-700 cursor-pointer whitespace-nowrap hover:bg-gray-100 hover:text-gray-900'>Log in</Link>
                            )}
                    </div>
                </div>
                {/* Bottom Header */}
                <div className='flex justify-center'>
                    {Object.keys(filters).map((category) => (
                        <Dropdown
                            key={category}
                            buttonText={category.charAt(0).toUpperCase() + category.slice(1)}
                            options={filters[category]}
                        />
                    ))}
                </div>
            </nav>
        </header>
    )

}