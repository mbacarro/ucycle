import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';


import NavBar from '../../Components/Navbar/Navbar';
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';
import ItemCard from '../../Components/ItemCard/ItemCard';

export default function Profile(props) {
    const [profileData, setProfileData] = useState(null);

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
                setProfileData(data);
            } catch (error) {
                console.error('Error fetching profile data:', error.message);
            }
        };

        fetchProfileData();
    }, []);
    
    return (
        <>
            <NavBar />
            <div className='mx-20'>
                <Breadcrumbs />
            </div>
            <div className="flex flex-col gap-20 mt-3 mx-60">
                <div className='flex'>
                    <div className='flex flex-col w-1/4'>
                        <h1 className='text-3xl font-bold'>Profile</h1>
                        <Link to='/account/my-store'className='my-4 text-lg font-medium text-neutral-600 hover:bg-gray-100 hover:text-gray-900'>My Store</Link>
                        <Link to='/account/liked' className='my-4 text-lg font-medium text-neutral-600 hover:bg-gray-100 hover:text-gray-900'>Liked</Link>
                        <Link to='/account/settings'className='my-4 text-lg font-medium text-neutral-600 hover:bg-gray-100 hover:text-gray-900'>Settings</Link>
                        <button className='my-4 text-lg font-medium text-left text-neutral-600 hover:bg-gray-100 hover:text-gray-900'>Log Out</button>
                    </div>
                    <div className='w-3/4 h-screen border border-black'>


                    <div>
                        {profileData ? (
                            <>
                                <h1>Welcome, {profileData.username}!</h1>
                                <p>Email: {profileData.email}</p>
                                <h2>Your Listings:</h2>
                                <ul>
                                    {profileData.listings.map((listing) => (
                                        <ItemCard id={listing._id} listing={listing} />
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <p>Loading profile...</p>
                        )}
                    </div>

                    </div>
                </div>
            </div>
        </>

    );
}

