import React, { useState } from 'react';
import NavBar from '../../Components/Navbar/Navbar';

const CreateListing = () => {
    const [name, setName] = useState('');
    const [condition, setCondition] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    const [locationOptions, setLocationOptions] = useState(['Location 1', 'Location 2', 'Location 3', 'Location 4', 'Location 5'])
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [showOtherLocationNotes, setShowOtherLocationNotes] = useState(false);
    const [otherLocationNotes, setOtherLocationNotes] = useState('');

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


    return (
        <>
            <NavBar/>
            <h1 className='mt-20 text-2xl font-bold mx-96'>Create a Listing</h1>
            <form className="mt-10 mb-20 mx-96" onSubmit={handleSubmit}>
                <label className='block text-lg font-medium text-gray-900 mb-2.5'>
                    Name of item:
                </label>
                <input className="block w-1/2 p-1 mb-6 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" type="text" value={name} onChange={(e) => setName(e.target.value)} />


                <label className='block text-lg font-medium text-gray-900 mb-2.5'>
                    Item Condition:

                </label>
                <select className="block w-1/2 p-1 mb-6 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" value={condition} onChange={(e) => setCondition(e.target.value)}>
                    <option value=""></option>
                    <option value="New">New</option>
                    <option value="Like New">Like New</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                    <option value="Poor">Poor</option>
                </select>
                
                <label className='block text-lg font-medium text-gray-900 mb-2.5'>
                    Item Category:
                </label>
                <select className="block w-1/2 p-1 mb-6 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value=""></option>
                    <option value="Womenswear">Womenswear</option>
                    <option value="Menswear">Menswear</option>
                    <option value="Home Goods">Home Goods</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Misc">Misc</option>

                </select>

                <label className='block text-lg font-medium text-gray-900 mb-2.5'>
                    Description:
                </label>
                <textarea rows='4' className="block p-2.5 w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-6" value={description} onChange={(e) => setDescription(e.target.value)} />

                <label className="block text-lg font-medium text-gray-900 mb-2.5 ">
                    Upload file
                </label>
                <input className="block w-1/2 p-1 mb-6 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" aria-describedby="user_avatar_help" id="user_avatar" type="file" />

                <fieldset>
                    <legend className="block text-lg font-medium text-gray-900 mb-2.5">Pickup locations</legend>
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
                    <legend className="block text-lg font-medium text-gray-900 mb-2.5">Payment options</legend>
                    {paymentOptions.map((option, index) => (
                        <div key={index} className="flex items-center mb-4">
                            <input
                                id={`payment-${option.toLowerCase()}`}
                                type="checkbox"
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

export default CreateListing;
