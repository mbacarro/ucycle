import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../../Components/Navbar/Navbar';
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';
import MyStoreItemCard from '../../Components/ItemCard/MyStoreItemCard';


export default function MyStore(props) {
    const [profileData, setProfileData] = useState(null);
    const [listings, setListings] = useState([])


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
                setListings(data.listings)
                console.log(listings)
            } catch (error) {
                console.error('Error fetching profile data:', error.message);
            }
        };

        fetchProfileData();
    }, []);

    const [sortBy, setSortBy] = useState('default');

    //Sort items based on the selected sort option
    useEffect(() => {
        const sorted = [...listings].sort((a, b) => {
            if (sortBy === 'priceAsc') {
                return a.price - b.price;
            } else if (sortBy === 'priceDesc') {
                return b.price - a.price;
            } else if (sortBy === 'nameAsc') {
                return a.name.localeCompare(b.name);
            } else if (sortBy === 'nameDesc') {
                return b.name.localeCompare(a.name);
            }
            return 0;
        });

        setListings(sorted);
    }, [sortBy]);
    
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
                        <button className='my-4 text-lg font-medium text-left text-neutral-600 hover:bg-gray-100 hover:text-gray-900'>Log Out</button>
                    </div>
                    <div className='w-3/4 h-screen'>
                        <div>
                            {profileData && (
                                <>
                                    <div class="flex gap-12 mb-6">
                                        <img
                                            className='object-cover w-40 h-40 rounded-full'
                                            alt='Tailwind CSS chat bubble component'
                                            src={
                                                "https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
                                            }
                                        />
                                        <div class="text-neutral-500 text-base font-medium flex flex-col gap-2">
                                            <h1 className='text-3xl font-bold text-black'>{profileData.username}</h1>
                                            <p>X sold </p>
                                        </div>

                                    </div>
                                </>
                            )}
                        </div>
                        


                        <div className='flex flex-col gap-8'>
                            {!(listings.length == 0) ? 
                                <div className='mb-10 ml-auto'>
                                    <select
                                        className="w-48 h-10 px-2 text-lg text-black border border-black rounded"
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                    >
                                        <option value="default">Sort By</option>
                                        <option value="priceAsc">Price: Low to High</option>
                                        <option value="priceDesc">Price: High to Low</option>
                                        <option value="nameAsc">Name: A to Z</option>
                                        <option value="nameDesc">Name: Z to A</option>
                                    </select>
                                </div> 
                                :
                                <p>Add Items</p>
                            }    
                            {profileData && listings.map((listing) => (
                                <MyStoreItemCard id={listing._id} listing={listing} />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
}

