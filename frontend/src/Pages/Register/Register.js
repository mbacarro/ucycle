import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../../Components/Navbar/Navbar';

export default function Register(props) {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {
            email, 
            username, 
            password
        }
        
        try {
            const response = await fetch('api/auth/signup', {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const json = await response.json()

            if (!response.ok || !json.success) {
                throw new Error(json.message || 'Failed Register');
            }
            
            if (response.ok) {
                console.log("Successfully Registered")
                alert("Successfully Registered")
            }
        } catch (error) {
            console.log("ERROR: ", error.message)
            alert("Failed to Register")

        }

    }

    return (
        <>
            <NavBar />
            <div className='mx-40 mt-3'>
                <h1 className="mb-4 text-2xl font-bold">Register!</h1>
                <form onSubmit={handleSubmit} className="max-w-sm">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            placeholder="Enter your username"
                            onChange={(e) => setUsername(e.target.value)}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                        Submit
                    </button>
                    <span className="block mt-2 text-sm">
                        Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
                    </span>
                </form>
            </div>
        </>
    );
    
}