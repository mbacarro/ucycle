import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';


import NavBar from '../../Components/Navbar/Navbar';
import ItemCard from '../../Components/ItemCard/ItemCard';
import { items, filters } from '../../SampleInventory/sampleInventory';

import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';

const Category = () => {
    const { category, subcategory } = useParams();
    console.log("cat: " + category);
    console.log(subcategory);


    const navigate = useNavigate();


    // Check if subcategory is provided
    const hasSubcategory = subcategory !== undefined && subcategory !== '';


    const [listings, setListings] = useState([])

    // Get items and filters for the selected category
    useEffect(() => {
        if (category !== "homegoods") {
            if(!(category in filters)) {
                return
            }
        }


        const fetchListings = async () => {
            let response
            if (category === "homegoods") {
                response = await fetch('/api//listings/category/Home%20Goods')

            }
            else {
                response = await fetch('/api/listings/category/' + category.charAt(0).toUpperCase() + category.slice(1))
            }
            const json = await response.json()

            if (response.ok) {
                let filteredListings = json;
                if (hasSubcategory) {
                    filteredListings = json.filter(listing => listing.subcategory &&  listing.subcategory.toLowerCase() === subcategory.toLowerCase());
                }
                setListings(filteredListings);
            }
        }

        fetchListings()
    }, [category, subcategory])

    let categoryFilters
    if (category === "homegoods") {
        categoryFilters = filters["home goods"] || [];

    } else {
        categoryFilters = filters[category] || [];

    }
    
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
            <Breadcrumbs />
            <div className='flex flex-col gap-20 mx-40 mt-3'>
                <div className='flex'>
                    <div className='w-1/4'>
                        <h1 className='text-3xl font-bold text-black'>{category === "homegoods" ? "Home Goods" : category.charAt(0).toUpperCase() + category.slice(1)}</h1>

                    </div>
                    <div className='flex flex-col w-3/4'>
                        <div className='ml-auto'>
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
                    </div>

                </div>
                
                <div className='flex'>
                    <div className='flex flex-col w-1/4'>
                        {categoryFilters.map((filter) => (
                            <Link to={`/${category}/${filter.toLowerCase()}`}>
                                <button className="w-full h-10 mb-4 text-lg font-medium text-left text-black hover:bg-gray-100 hover:text-gray-900" key={filter}>{filter}</button>
                            </Link>
                        ))}
                    </div>
                    <div className="grid w-3/4 grid-cols-4 gap-4">
                        {listings && listings.map(listing => (
                            <ItemCard id={listing._id} listing={listing} />

                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Category;
