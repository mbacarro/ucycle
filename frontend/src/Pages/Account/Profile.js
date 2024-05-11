import React, { useEffect, useState } from 'react';

import Cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom';



import NavBar from '../../Components/Navbar/Navbar';
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';
import ItemCard from '../../Components/ItemCard/ItemCard';

export default function Profile(props) {
    const [profileData, setProfileData] = useState(null);
    const navigate = useNavigate();


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
                navigate('/');
                window.location.reload();
            }
            } catch (error) {
                console.error('Error logging out:', error);
            }
    };
    
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
                        <button onClick={handleLogout}className='my-4 text-lg font-medium text-left text-neutral-600 hover:bg-gray-100 hover:text-gray-900'>Log Out</button>
                    </div>
                    <div className='w-3/4 h-fit'>


                        <div>
                            {profileData ? (
                                <>

                                    <div class="flex gap-12 my-6">
                                    <img
                                        className='object-cover w-40 h-40 rounded-full'
                                        alt='Tailwind CSS chat bubble component'
                                        src={
                                            "https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
                                        }
                                    />
                                        <div class="text-black text-base font-medium flex flex-col gap-5">
                                            <p>Username: </p>
                                            <p>Email:</p>
                                            <p>First Name:</p>
                                            <p>Last Name:</p>
                                            <p>Student Number:</p>

                                        </div>
                                        <div className='flex flex-col gap-5 text-base font-normal text-neutral-700'>
                                            <p> {profileData.username}</p>
                                            <p> {profileData.email}</p>
                                            <p> {profileData.firstName}</p>
                                            <p> {profileData.lastName}</p>
                                            <p> {profileData.studentNumber}</p>
                                        </div>
                                    </div>

                                    <h2 className='mt-12 mb-5 font-medium text-black'>Bio:</h2>
                                    <p className='w-full rounded text-neutral-700'>
                                        {profileData.biography}
                                    </p>

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

