import React, { useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';

export default function Bag(props) { 
    const sampleItems = [
        { id: 1, name: 'Sample Item 1', price: 50 },
        { id: 2, name: 'Sample Item 2', price: 30 },
        { id: 3, name: 'Sample Item 3', price: 40 },
        { id: 4, name: 'Sample Item 4', price: 35 }
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    const handleRadioChange = (value) => {
        setSelectedOption(selectedOption === value ? null : value);
    };

    return (
        <div className='flex w-full border rounded-md shadow-md border-neutral-400 h-fit py-9 px-14' >
            {/* Bag Information */}
            <div className='w-2/3 mr-28'>
                <div className='flex gap-4'>
                    <div className='border border-black h-14 w-14'>Profile Img</div>
                    <h2 className='my-auto text-xl font-bold'>Gracie's Store</h2>
                </div>
                <div className='flex flex-col mt-2'>
                    <p className='my-2 ml-auto text-base font-medium'>Select</p>
                    <div className='grid grid-cols-4 gap-6'>
                        {sampleItems.map(item => (
                            <ItemCard key={item.id} id={item.id} name={item.name} price={item.price} />
                        ))}
                    </div>
                </div>
                <label className='block my-6 text-xl font-bold'>
                    In-Person Pickup:
                </label>
                <select className="block w-1/2 p-1 mb-6 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-5">
                    <option value=""></option>
                    <option value="Red">Location 1</option>
                    <option value="Blue">Location 2</option>
                    <option value="Green">Location 3</option>
                    <option value="Black">Location 4</option>
                </select>
            </div>

            {/* Payment Options */}
            <div className='flex flex-col w-2/5 py-6 ml-auto border rounded-md border-neutral-300 px-7'>
                <p className='mb-5 font-medium'>Subtotal: $300.00</p>
                <p className='font-medium'>Estimated Fees: $0.00</p>
                <hr className='my-6 border border-neutral-400'/>
                <h2 className='text-xl font-bold'>Total: $300.00</h2>

                <div className='my-9'>
                    <div className='flex gap-3 mb-4'>
                        <input 
                            type="radio"
                            value="cash"
                            checked={selectedOption === "cash"}
                            onChange={() => handleRadioChange("cash")} />
                        <label className='text-base font-medium'>Cash</label>
                    </div>
                    <div className='flex gap-3 mb-4'>
                        <input
                            type="radio"
                            value="venmo"
                            checked={selectedOption === "venmo"}
                            onChange={() => handleRadioChange("venmo")} />
                        <label className='text-base font-medium'>Venmo</label>
                    </div>
                    <div className='flex gap-3 mb-4'>
                        <input
                            type="radio"
                            value="cashapp"
                            checked={selectedOption === "cashapp"}
                            onChange={() => handleRadioChange("cashapp")} />
                        <label className='text-base font-medium'>Cashapp</label>
                    </div>
                </div>

                <button className="w-full h-10 mt-auto text-xl font-semibold text-center text-white rounded bg-violet-700">Send Request</button>

            </div>
        </div>
    )


}