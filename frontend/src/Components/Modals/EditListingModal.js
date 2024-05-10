import React, { useState } from 'react';
import { Modal } from "flowbite-react";
import { filters } from '../../SampleInventory/sampleInventory';


const EditListingModal = ({ listingData }) => {
    console.log(listingData);

    const [openModal, setOpenModal] = useState(false);

    function onCloseModal() {
        setOpenModal(false);
    }

    const [name, setName] = useState(listingData.name);
    const [price, setPrice] = useState(listingData.price);
    const [condition, setCondition] = useState(listingData.condition);
    const [category, setCategory] = useState(listingData.category);
    const [subCategory, setSubCategory] = useState(listingData.subcategory);
    const [description, setDescription] = useState(listingData.description);

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setSubCategory(''); // Reset subCategory when main category changes
    };

    const handleSubCategoryChange = (e) => {
        setSubCategory(e.target.value);
    };

    // location logic
    const [locationOptions, setLocationOptions] = useState(['Location 1', 'Location 2', 'Location 3', 'Location 4', 'Location 5'])
    const [selectedLocations, setSelectedLocations] = useState(listingData.pickupLocations);
    const [showOtherLocationNotes, setShowOtherLocationNotes] = useState(false);
    const [otherLocationNotes, setOtherLocationNotes] = useState(listingData.otherLocationNotes);

    const handleSelectedLocationChange = (location, isChecked) => {
        if (!isChecked) {
            setSelectedLocations((prevSelected) =>
                prevSelected.filter((item) => item !== location)
            );
        } else {
            setSelectedLocations((prevSelected) =>
                prevSelected.includes(location)
                    ? prevSelected
                    : [...prevSelected, location]
            );
        }
    };

    const handleLocationOptionChange = (index, value) => {
        setSelectedLocations((prevSelected) =>
            prevSelected.filter((location) => location !== locationOptions[index])
        );
        setLocationOptions((prevOptions) =>
            prevOptions.map((option, i) => (i === index ? value : option))
        );
    };

    const handleOtherLocationNotesChange = (e) => {
        setOtherLocationNotes(e.target.value);
    };

    const handleOtherLocationOptionChange = (e) => {
        const isChecked = e.target.checked;
        setShowOtherLocationNotes(isChecked);
        if (!isChecked) {
            setSelectedLocations(selectedLocations.filter((location) => location !== 'Other'));
        } else if (!selectedLocations.includes('Other')) {
            setSelectedLocations([...selectedLocations, 'Other']);
        }
    };

    // payment logic
    const paymentOptions = ['Cash', 'Venmo', 'Zelle', 'Cashapp'];

    const [selectedOptions, setSelectedOptions] = useState(listingData.paymentMethod);
    const [showOtherNotes, setShowOtherNotes] = useState(false);
    const [otherNotes, setOtherNotes] = useState(listingData.otherPaymentNotes);

    const handleOptionChange = (option) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter((item) => item !== option));
        } else if (selectedOptions.length < 3) {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    const handleOtherNotesChange = (e) => {
        setOtherNotes(e.target.value);
    };

    const handleOtherOptionChange = (e) => {
        handleOptionChange('Other');
        setShowOtherNotes(e.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const body  = {
            name: name,
            price: price,
            category: category,
            subcategory: subCategory,
            condition: condition,
            description: description,
            pickupLocations: selectedLocations,
            otherLocationNotes: otherLocationNotes,
            paymentMethod: selectedOptions,
            otherPaymentNotes: otherNotes
        }
        console.log('body:', body);

        try {
            const response = await fetch(`/api/listings/${listingData._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            if (!response.ok) {
                throw new Error('Failed to update item');
            }
            // Update the listing in your frontend state or trigger a re-fetch of listings
            alert('Item info updated');
            console.log(`Item ${listingData._id} info updated`);

            setOpenModal(false);
            window.location.reload();


        } catch (error) {
            alert('Errr updating iotem: ', error.message);
            console.error('Errr updating iotem:', error);

            setOpenModal(false);
            window.location.reload();

        }

    };


    return (
        <>
            <button 
                className='w-full px-2 py-1 rounded bg-zinc-200'
                onClick={() => setOpenModal(true)}
            >
                Edit Listing
            </button>

            <Modal show={openModal} size="4xl" onClose={onCloseModal} popup>
                <Modal.Header> Edit Listing</Modal.Header >
                <Modal.Body>
                    <form className="mt-10 mb-20" onSubmit={handleSubmit}>
                        <label className='block text-lg font-medium text-gray-900 mb-2.5'>
                            Name of item:
                        </label>
                        <input 
                            required 
                            className="block w-1/2 p-1 mb-6 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                        />

                        <label className='block text-lg font-medium text-gray-900 mb-2.5'>
                            Item Price:
                        </label>
                        <input 
                            required 
                            className="block w-1/2 p-1 mb-6 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
                            type="number" 
                            value={price} 
                            onChange={(e) => setPrice(e.target.value)}
                        />

                        <label className='block text-lg font-medium text-gray-900 mb-2.5'>
                            Item Category:
                        </label>
                        <select required className="block w-1/2 p-1 mb-6 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" value={category} onChange={handleCategoryChange}>
                            <option value=""></option>
                            <option value="Womenswear">Womenswear</option>
                            <option value="Menswear">Menswear</option>
                            <option value="Home Goods">Home Goods</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Misc">Misc</option>
                        </select>

                        {category && (
                            <div>
                                <label className="block text-lg font-medium text-gray-900 mb-2.5">
                                    Sub Category:
                                </label>
                                <select
                                    required
                                    className="block w-1/2 p-1 mb-6 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                    value={subCategory}
                                    onChange={handleSubCategoryChange}
                                >
                                    <option value=""></option>
                                    {filters[category.toLocaleLowerCase()].map((subCategory) => (
                                        <option key={subCategory} value={subCategory}>
                                            {subCategory}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        <label className='block text-lg font-medium text-gray-900 mb-2.5'>
                            Item Condition:
                        </label>
                        <select required className="block w-1/2 p-1 mb-6 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" value={condition} onChange={(e) => setCondition(e.target.value)}>
                            <option value=""></option>
                            <option value="New">New</option>
                            <option value="Like New">Like New</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                            <option value="Poor">Poor</option>
                        </select>

                        <label className='block text-lg font-medium text-gray-900 mb-2.5'>
                            Description:
                        </label>
                        <textarea 
                            required 
                            rows='4' 
                            className="block p-2.5 w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-6" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                        />

                        <fieldset>
                            <legend className="block text-lg font-medium text-gray-900 mb-2.5 relative">
                                Pickup locations
                                <input
                                    required
                                    id="pickup-locations"
                                    type="checkbox"
                                    value=""
                                    checked={selectedLocations.length > 0}
                                    onChange={(e) => {
                                        if (!e.target.checked) {
                                            setSelectedLocations([]);
                                        }
                                    }}
                                    className="absolute top-0 left-0 opacity-0" // Hide the checkbox behind the legend
                                />
                            </legend>
                            {locationOptions.map((location, index) => (
                                <div key={index} className="flex items-center mb-4">
                                    <input
                                        type="checkbox"
                                        checked={selectedLocations.includes(location)}
                                        onChange={(e) => handleSelectedLocationChange(location, e.target.checked)}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    <input
                                        type="text"
                                        value={location}
                                        onChange={(e) => handleLocationOptionChange(index, e.target.value)}
                                        className="p-1 text-sm font-medium text-gray-900 border border-gray-300 rounded ms-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            ))}
                            <div className="flex items-center mb-4">
                                <input
                                    id="location-other"
                                    type="checkbox"
                                    checked={selectedLocations.includes('Other')}
                                    onChange={handleOtherLocationOptionChange}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                                />
                                <label htmlFor="location-other" className="text-sm font-medium text-gray-900 ms-2">
                                    Other
                                </label>
                            </div>
                            {showOtherLocationNotes && (
                                <textarea
                                    value={otherLocationNotes}
                                    onChange={handleOtherLocationNotesChange}
                                    placeholder="Additional location notes..."
                                    className="block p-2.5 w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"

                                />
                            )}
                        </fieldset>



                        <fieldset>
                            <legend className="block text-lg font-medium text-gray-900 mb-2.5 relative">
                                Payment options
                                <input
                                    required
                                    id="payment-options"
                                    type="checkbox"
                                    value=""
                                    checked={selectedOptions.length > 0}
                                    onChange={(e) => {
                                        if (!e.target.checked) {
                                            setSelectedOptions([]);
                                        }
                                    }}
                                    className="absolute top-0 left-0 opacity-0" // Hide the checkbox behind the legend
                                />
                            </legend>
                            {paymentOptions.map((option, index) => (
                                <div key={index} className="flex items-center mb-4">
                                    <input
                                        type="checkbox"
                                        id={`payment-${option.toLowerCase()}`}
                                        value={option}
                                        checked={selectedOptions.includes(option)}
                                        onChange={() => handleOptionChange(option)}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    <label htmlFor={`payment-${option.toLowerCase()}`} className="text-sm font-medium text-gray-900 ms-2">
                                        {option}
                                    </label>
                                </div>
                            ))}
                            <div className="flex items-center mb-4">
                                <input
                                    id="payment-other"
                                    type="checkbox"
                                    checked={selectedOptions.includes('Other')}
                                    onChange={handleOtherOptionChange}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                                />
                                <label htmlFor="payment-other" className="text-sm font-medium text-gray-900 ms-2">
                                    Other
                                </label>
                            </div>
                            {showOtherNotes && (
                                <textarea
                                    value={otherNotes}
                                    onChange={handleOtherNotesChange}
                                    placeholder="Additional notes..."
                                    className="block p-2.5 w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                />
                            )}
                        </fieldset>

                        {/* <button className="w-40 h-10 mt-10 text-xl text-center text-white rounded bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 focus:outline-none dark:focus:ring-violet-800" type="submit">List Item</button> */}
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button 
                        onClick={handleSubmit}
                        className="px-10 py-2 text-xl font-semibold text-center text-white rounded bg-violet-700 hover:bg-violet-800"
                        type="submit"
                    >
                        Save Changes
                    </button>
                    <button 
                        className="px-10 py-2 text-lg font-semibold text-center border rounded border-violet-700 text-violet-700"

                        onClick={() => setOpenModal(false)}
                    >
                        Cancel
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default EditListingModal;