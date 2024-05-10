import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import NavBar from '../../Components/Navbar/Navbar';
import Arrow from '../../Images/Arrow.svg'
import LoginPhoto from '../../Images/LoginPhoto.png'


export default function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            email,
            password
        };
    
        try {
            const response = await fetch('api/auth/login', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
    
            if (!response.ok || !json.success) {
                throw new Error(json.message || 'Failed to log in');
            }
    
            console.log('Successfully Logged In');
            alert('Successfully Logged In');
            navigate('/');
        } catch (error) {
            console.error('ERROR:', error.message);
            alert('Failed to Log In');
        }
    };
    

    return (
        <>
            <NavBar />
            <div className='grid grid-cols-2 gap-24 my-20 mx-60'>
                <div>
                    <h1 className='mb-3 text-3xl font-bold'>Join other UW Students in buying and selling second-hand!</h1>
                    <p className='mb-3 text-xl font-medium'>Connect with peers to trade goods, find bargains, and contribute to sustainable consumption within our community.</p>

                    <ul className="flex flex-col">
                        <li className="flex space-x-2.5 my-2.5">
                            <img src={Arrow} alt="" />
                            <span>Maintain sustainability</span>
                        </li>
                        <li className="flex space-x-2.5 my-2.5">
                            <img src={Arrow} alt="" />
                            <span>Ensure safety</span>
                        </li>
                        <li className="flex space-x-2.5 my-2.5">
                            <img src={Arrow} alt="" />
                            <span>Stay budget-frieldly</span>
                        </li>
                    </ul>

                    <img src={LoginPhoto} alt="" className='object-scale-down w-2/3' />

                </div>
                <div className='flex flex-col p-12 border rounded-lg shadow border-neutral-200'>
                    <h1 className="text-2xl font-bold mb-9">Log In</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col flex-grow w-full">
                        {/* */ }
                        <div className="mb-4">
                            <label 
                                htmlFor="email" 
                                className="block mb-4 text-lg font-medium text-gray-700">
                            UW Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Enter your email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label 
                                htmlFor="password" 
                                className="block mb-4 text-lg font-medium text-gray-700">
                            Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="w-full px-4 py-2 mt-auto font-bold text-white rounded bg-violet-700 hover:bg-violet-800">
                            Login
                        </button>
                        <p className="block mt-4 text-sm">
                            Need to Register? <Link to="/register" className="text-blue-500 hover:underline">Register Here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
    
}