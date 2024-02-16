import React from 'react';

export default  function Home(props) {
    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Welcome to My Website</h1>
            <p className="text-gray-700">This is a simple homepage created using React and Tailwind CSS.</p>
        </div>
        </div>
    );
}

