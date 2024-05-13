import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import NavBar from '../../Components/Navbar/Navbar';
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';
import ItemCard from '../../Components/ItemCard/ItemCard';
import SendMessageModal from '../../Components/Modals/SendMessageModal';


export default function Seller() {
    const { sellerId } = useParams()

    const [seller, setSeller] = useState(null)
    const [listings, setListings] = useState([])


    useEffect(() => {
        const fetchSeller = async () => {
            try {
                const response = await fetch('/api/listings/seller/' + sellerId)


            if (!response.ok) {
                throw new Error('Failed to fetch seller data');
            }

            const data = await response.json();
            setSeller(data);
            setListings(data.listings)
            console.log(listings)
        } catch (error) {
            console.error('Error fetching profile data:', error.message);
        }
        }

        fetchSeller()
    }, [])


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




    if (!seller) {
        return (
            <>
                <NavBar />
                <Breadcrumbs />
                <div className="mx-40 mt-3">Seller not found</div>;
            </>
        )
    }


    return (
        <>
        <NavBar />
        <div className='mx-20'>
                <Breadcrumbs />
        </div>

        <div className='my-3 mx-60'>
            <div class="flex gap-12 mb-6 items-center">
                <img
                    className='object-cover w-40 h-40 rounded-full'
                    alt='Tailwind CSS chat bubble component'
                    src={
                        "https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
                    }
                />
                <div class="text-neutral-500 text-base font-medium flex flex-col gap-2">
                    <h1 className='text-3xl font-bold text-black'>{seller.username}</h1>
                    <h2>{seller.sold} Sold</h2>
                    <h2>{seller.location}</h2>
                </div>
            </div>
            <p className='w-full mb-10'>{seller.biography}</p>
            <SendMessageModal receiverId={sellerId}/>

            <hr className='my-8 border mx-2.5'/>

            {!(listings.length == 0) ? 
                <>
                    <div className='flex mb-10'>
                        <h2 className='text-lg font-medium align-middle'>Listed Items:</h2>
                        <select
                            className="w-48 h-10 px-2 ml-auto text-lg text-black border border-black rounded"
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

                    <div className='grid grid-cols-4 gap-8'>
                        {listings.map((listing) => (
                            <ItemCard 
                                key={listing._id}
                                listing={listing} 
                            />
                        ))}
                    </div>
                </>
                :
                <div className='flex flex-col items-center justify-center gap-10'>
                    <p> Oops! Looks like this seller doesn't have any available items!</p>
                </div>
            }   
            

        </div>
        </>
    )
}