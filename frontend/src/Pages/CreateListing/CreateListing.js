import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import NavBar from '../../Components/Navbar/Navbar';
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';

import { filters } from '../../SampleInventory/sampleInventory';

export default function CreateListing(props){
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [price, setPrice] = useState(null);
    const [condition, setCondition] = useState('');
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState([]);
    const [description, setDescription] = useState('');
    const [images, setImages] = useState();

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setSubCategory(''); // Reset subCategory when main category changes
    };

    const handleSubCategoryChange = (e) => {
        setSubCategory(e.target.value);
    };

    // on campus location logic
    const [onCampusOptions, setOnCampusOptons] = useState(["Red Square", "The HUB", "The Quad", "IMA"])
    const [selectedOnCampusLocations, setSelectedOnCampusLocations] = useState([]);



    const handleSelectedOnCampusLocationChange = (location, isChecked) => {
        if (!isChecked) {
            setSelectedOnCampusLocations((prevSelected) =>
                prevSelected.filter((item) => item !== location)
            );
        } else {
            setSelectedOnCampusLocations((prevSelected) =>
                prevSelected.includes(location)
                    ? prevSelected
                    : [...prevSelected, location]
            );
        }
    };

    const handleOnCampusLocationOptionChange = (index, value) => {
        setSelectedOnCampusLocations((prevSelected) =>
            prevSelected.filter((location) => location !== onCampusOptions[index])
        );
        setOnCampusOptons((prevOptions) =>
            prevOptions.map((option, i) => (i === index ? value : option))
        );
    };

        // on campus location logic
    const [offCampusOptions, setOffCampusOptions] = useState(["UDistrict Station", "UW Station", "Northgate", "UVillage"])
    const [selectedOffCampusLocations, setSelectedOffCampusLocations] = useState([]);



    const handleSelectedOffCampusLocationChange = (location, isChecked) => {
        if (!isChecked) {
            setSelectedOffCampusLocations((prevSelected) =>
                prevSelected.filter((item) => item !== location)
            );
        } else {
            setSelectedOffCampusLocations((prevSelected) =>
                prevSelected.includes(location)
                    ? prevSelected
                    : [...prevSelected, location]
            );
        }
    };

    const handleOffCampusLocationOptionChange = (index, value) => {
        setSelectedOffCampusLocations((prevSelected) =>
            prevSelected.filter((location) => location !== offCampusOptions[index])
        );
        setOffCampusOptions((prevOptions) =>
            prevOptions.map((option, i) => (i === index ? value : option))
        );
    };

    // payment logic
    const paymentOptions = ['Cash', 'Venmo', 'Zelle', 'Cashapp'];

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [showOtherNotes, setShowOtherNotes] = useState(false);
    const [otherNotes, setOtherNotes] = useState('');

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

    // other change hanlders
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setImages(file);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('subcategory', subCategory);
        formData.append('condition', condition);
        formData.append('description', description);
        formData.append('onCampusLocations', selectedOnCampusLocations);
        formData.append('offCampusLocations', selectedOffCampusLocations);
        formData.append('paymentMethod', selectedOptions);
        formData.append('otherPaymentNotes', otherNotes);
        formData.append('listingPhoto', images); // Assuming only one image is selected
        
        try {
            const response = await fetch('api/listings', {
                method: 'POST',
                body: formData
            });
    
            if (!response.ok) {
                throw new Error('Failed to create listing');
            }
    
            const data = await response.json();
            console.log('Listing created:', data);
            alert('Listing created successfully');
            navigate('/');
        } catch (error) {
            console.error('Error creating listing:', error.message);
            alert('Failed to create listing');
        }

    };

    return (
        <>
            <NavBar/>
            <Breadcrumbs />
            <h1 className='mt-3 text-2xl font-bold mx-96'>Create a Listing</h1>
            <form className="mt-10 mb-20 mx-96" onSubmit={handleSubmit}>
                <label className='block text-lg font-medium text-gray-900 mb-2.5'>
                    Name of item:
                </label>
                <input required className="block w-1/2 p-1 mb-6 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <label className='block text-lg font-medium text-gray-900 mb-2.5'>
                    Item Price:
                </label>
                <input required className="block w-1/2 p-1 mb-6 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />

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
                <textarea required rows='4' className="block p-2.5 w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-6" value={description} onChange={(e) => setDescription(e.target.value)} />

                <label className="block text-lg font-medium text-gray-900 mb-2.5 ">
                    Upload file
                </label>
                <input required className="block w-1/2 p-1 mb-6 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
                    id="listing_photo" 
                    type="file" 
                    name='listingPhoto' 
                    onChange={handleFileChange}/>

                
                <div className='grid grid-cols-2'>
                    <fieldset>
                        
                        <legend className="block text-lg font-medium text-gray-900 mb-2.5 relative">
                            On Campus Pickup locations
                            <input
                                required
                                id="pickup-locations"
                                type="checkbox"
                                value=""
                                checked={selectedOnCampusLocations.length > 0}
                                onChange={(e) => {
                                    if (!e.target.checked) {
                                        setSelectedOnCampusLocations([]);
                                    }
                                }}
                                className="absolute top-0 left-0 opacity-0" // Hide the checkbox behind the legend
                            />
                        </legend>
                        {onCampusOptions.map((location, index) => (
                            <div key={index} className="flex items-center mb-4">
                                <input
                                    type="checkbox"
                                    checked={selectedOnCampusLocations.includes(location)}
                                    onChange={(e) => handleSelectedOnCampusLocationChange(location, e.target.checked)}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                                />
                                <input
                                    type="text"
                                    value={location}
                                    onChange={(e) => handleOnCampusLocationOptionChange(index, e.target.value)}
                                    className="p-1 text-sm font-medium text-gray-900 border border-gray-300 rounded ms-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        ))}
                    </fieldset>

                    <fieldset>
                        
                        <legend className="block text-lg font-medium text-gray-900 mb-2.5 relative">
                            Off Campus Pickup locations
                            <input
                                required
                                id="pickup-locations"
                                type="checkbox"
                                value=""
                                checked={selectedOffCampusLocations.length > 0}
                                onChange={(e) => {
                                    if (!e.target.checked) {
                                        setSelectedOffCampusLocations([]);
                                    }
                                }}
                                className="absolute top-0 left-0 opacity-0" // Hide the checkbox behind the legend
                            />
                        </legend>
                        {offCampusOptions.map((location, index) => (
                            <div key={index} className="flex items-center mb-4">
                                <input
                                    type="checkbox"
                                    checked={selectedOffCampusLocations.includes(location)}
                                    onChange={(e) => handleSelectedOffCampusLocationChange(location, e.target.checked)}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                                />
                                <input
                                    type="text"
                                    value={location}
                                    onChange={(e) => handleOffCampusLocationOptionChange(index, e.target.value)}
                                    className="p-1 text-sm font-medium text-gray-900 border border-gray-300 rounded ms-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        ))}
                    </fieldset>

                </div>





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

                <button className="w-40 h-10 mt-10 text-xl text-center text-white rounded bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 focus:outline-none dark:focus:ring-violet-800" type="submit">List Item</button>
            </form>
        </>
    );
};


