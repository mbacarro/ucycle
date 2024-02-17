import React from 'react';

import NavBar from '../../Components/Navbar/Navbar';

export default  function Home(props) {
    return (
        <>
            <NavBar />
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="p-6 bg-white rounded shadow-lg">
                    <h1 className="mb-4 text-2xl font-bold">Home Page</h1>
                    <p className="text-gray-700">This is a simple homepage created using React and Tailwind CSS.</p>
                </div>
            </div>
        </>

    );
}

