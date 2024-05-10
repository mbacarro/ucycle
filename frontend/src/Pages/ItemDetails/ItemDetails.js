import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import NavBar from '../../Components/Navbar/Navbar';
import SchoolIcon from '../../Images/SchoolIcon.svg'
import BuildingIcon from '../../Images/BuildingIcon.svg'
import BoxIcon from '../../Images/BoxIcon.svg'

import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';

export default function ItemDetails() {
    const { itemId } = useParams()
    const navigate = useNavigate()

    const [listing, setListing] = useState(null)
    const [seller, setSeller] = useState(null)

    useEffect(() => {
        const fetchListing = async () => {
            const response = await fetch('/api/listings/' + itemId)
            const json = await response.json()

            if (response.ok) {
                setListing(json)
            }
        }

        fetchListing()
    }, [])

    useEffect(() => {
        if (!listing) return
        const fetchSeller = async () => {
            const response = await fetch('/api/listings/seller/' + listing.sellerID)
            const json = await response.json()

            if (response.ok) {
                setSeller(json)
            }
        }

        fetchSeller()
    }, [listing])

    if (!listing) {
        return (
            <>
                <NavBar />
                <Breadcrumbs />
                <div className="mx-40 mt-3">Item not found</div>;
            </>


        )
    }

    const messageAskingPrice = async () => {
        const listingId  = listing._id
        const message = `Hi, I'm interested in your item. I would like to buy for $${listing.price}.`
        const receiverId = listing.sellerID

        try {
            const response = await fetch('/api/messages/send/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message, listingId, receiverId })
            })

            if (!response.ok) {
                throw new Error('Failed to send message')
            }
            alert('Message sent successfully')
            navigate('/inbox')
        }
        catch (error) {
            alert('Failed to send message: ', error.message)
        }
        
    }


    return (
        <>
            <NavBar />
            <div className='mx-24'>
                <Breadcrumbs />
            </div>

            <div className="mx-40 mt-3">
                {/* Item */}
                <div className='flex'>
                    {/* Item Images*/}
                    <div className='flex justify-center w-1/2 h-fit gap-9'>
                        {/* Image Options*/}
                        <div className='flex flex-col gap-2'>
                            <div className='w-24 h-24 border border-black'></div>
                            <div className='w-24 h-24 border border-black'></div>
                            <div className='w-24 h-24 border border-black'></div>
                            <div className='w-24 h-24 border border-black'></div>
                        </div>
                        {/* Image Preview*/}
                            <img src={listing.imageUrl} className='object-cover w-3/5 aspect-square'></img>
                    </div>
                    {/* Item Details*/}
                    <div className='w-1/2 h-fit'>
                        {/* General Item Info*/}
                        <div className='mx-2.5 mb-2'>
                            <h1 className='mb-2 text-2xl font-semibold '>{listing.name}</h1>
                            <p className='mb-6 text-lg'>${listing.price}</p>
                            {/* <div className='flex gap-3 mb-8'>
                                <div className='w-8 h-8 rounded-full bg-slate-600'></div>
                                <div className='w-8 h-8 rounded-full'></div>
                            </div> */}
                            <div className='flex gap-3'>
                                <button
                                    onClick={() => messageAskingPrice()} 
                                    className="px-10 py-2 text-lg font-semibold text-center text-white border rounded h-fit w-fit bg-violet-700 hover:bg-violet-800"
                                >
                                    Buy for ${listing.price}
                                </button>
                                <button 
                                    className="px-10 py-2 text-lg font-semibold text-center border rounded border-violet-700 text-violet-700 h-fit w-fit"
                                >
                                    Make an offer
                                </button>
                            </div>
                        </div>
                        
                        <hr className='my-8 border mx-2.5'/>

                        <div className='mx-2.5 mb-2'>
                            <h2 className='mb-4 text-xl font-semibold text-black mt-9'>Details</h2>
                            <div class="flex gap-12 mb-6">
                                <div class="text-neutral-500 text-base font-medium flex flex-col gap-2">
                                    <p>Condition: <span id="condition"></span></p>
                                    <p>Category: <span id="category"></span></p>
                                </div>
                                <div className='flex flex-col gap-2 text-base font-normal text-black'>
                                    <p> {listing.condition}</p>
                                    <p> {listing.category}</p>
                                </div>
                            </div>
                            <h2 className='mb-4 text-xl font-semibold text-black mt-9'>Description</h2>
                            <p className='mb-4 text-base'>{listing.description}</p>
                        </div>
                        
                        <hr className='my-8 border mx-2.5' />

                        {/* Pickup Options*/}
                        <div className='mx-2.5 mb-2 '>
                            <h2 className='mb-4 text-lg font-semibold'>Pick-up Options</h2>
                            <div className='mx-2 flex flex-col gap-2.5'>
                                <div className='flex gap-2.5'>
                                    <img src={SchoolIcon} alt="" />
                                    <h3 className='text-base'>Available for on-campus pickup</h3>
                                </div>
                                <li>{listing.pickupLocations.join(', ')}</li>
                                <div className='flex gap-2.5'>
                                    <img src={BuildingIcon} alt="" />
                                    <h3 className='text-base'>Available for off-campus pickup</h3>
                                </div>
                                <li>{listing.pickupLocations.join(', ')}</li>
                                <div className='flex gap-2.5'>
                                    <img src={BoxIcon} alt="" />
                                    <h3 className='text-base'>No refunds or returns</h3>
                                </div>
                            </div>
                        </div>
                        <hr className='my-8 border mx-2.5' />
                        {/* Seller Information*/}
                        <div className='mx-2.5 mb-2 '>
                            <h2 className='mb-4 text-lg font-semibold'>Seller Information</h2>
                            <div className='flex gap-3 mx-2 my-9'>
                                <img
                                    className='object-cover rounded-full w-14 h-14'
                                    alt='Tailwind CSS chat bubble component'
                                    src={
                                        "https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
                                    }
                                />
                                <div className='flex flex-col'>
                                    <h3 className='text-lg font-semibold'>{seller && seller.username}</h3>
                                    <div>Rating Placeholder</div>
                                </div>
                            </div>
                            <button className="w-2/3 px-10 py-2 text-base font-semibold text-center text-white rounded bg-violet-700 h-fit">Message seller</button>

                        </div>
                    </div>
                </div>

                {/* More Items from Seller Shop*/}
                <div>

                </div>
            </div>
            <div className='mx-40 my-20'>
                <h2 className='text-2xl font-bold my-7'>More items from {listing.sellerID}'s Shop</h2>
                <p >Payment Methods: {listing.paymentMethod.join(', ')}</p>
            </div>
        </>
    );
};

