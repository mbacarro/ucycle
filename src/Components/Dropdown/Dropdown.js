import React, { useState } from 'react';

const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option) => {
        props.onSelect(option);
        setIsOpen(false);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block mx-5 my-3 text-left" >
            <div>
                <button
                    type="button"
                    className="inline-flex justify-between w-full px-4 py-2 text-base font-medium leading-5 text-gray-700 bg-white "
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {props.buttonText}
                    <svg
                        className="w-5 h-5 ml-2 -mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-.707.293z"
                        />
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="absolute right-0 z-20 w-full mt-2 origin-top-right rounded-md shadow-lg" onMouseLeave={handleMouseLeave}> 
                    <div className="bg-white rounded-md shadow-xs">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {props.options.map((option) => (
                                <div
                                    key={option}
                                    className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900"
                                    onClick={() => handleOptionClick(option)}
                                    role="menuitem"
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
