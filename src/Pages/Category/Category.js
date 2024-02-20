import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import NavBar from '../../Components/Navbar/Navbar';
import ItemCard from '../../Components/ItemCard/ItemCard';
import { items, filters } from '../../SampleInventory/sampleInventory';

const Category = () => {
    const { category } = useParams();

    // Get items and filters for the selected category
    const categoryItems = items[category] || [];
    const categoryFilters = filters[category] || [];

    const [sortBy, setSortBy] = useState('default');

    // Sort items based on the selected sort option
    const sortedItems = categoryItems.sort((a, b) => {
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

    return (
        <>
            <NavBar />
            <div className='flex flex-col gap-20 mx-40 my-20'>
                <h1 className='text-3xl font-bold text-black'>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
                <div className='flex flex-wrap w-2/3 gap-3'>
                    {categoryFilters.map((filter) => (
                        <button className="h-10 px-8 text-lg text-center text-black border border-black rounded-full w-fit hover:bg-violet-200" key={filter}>{filter}</button>
                    ))}
                </div>
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
                <div>
                    <div className="grid grid-cols-4 gap-4">
                        {categoryItems.map(item => (
                            <ItemCard key={item.id} id={item.id} name={item.name} price={item.price} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Category;
