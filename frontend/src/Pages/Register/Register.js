import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import NavBar from '../../Components/Navbar/Navbar';
import SignupDecor from '../../Images/SignupDecor.png'

export default function Register(props) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [studentNumber, setStudentNumber] = useState('');
    const [grade, setGrade] = useState('');
    const [age, setAge] = useState('');
    const [biography, setBiography] = useState('');
    const [location, setLocation] = useState('');


    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            email,
            username,
            password,
            firstName,
            lastName,
            studentNumber,
            grade,
            age,
            biography,
            location
        };

        try {
            const response = await fetch('api/auth/signup', {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const json = await response.json();

            if (!response.ok || !json.success) {
                throw new Error(json.message || 'Failed Register');
            }

            if (response.ok) {
                console.log("Successfully Registered");
                alert("Successfully Registered");
                navigate('/');

            }
        } catch (error) {
            console.log("ERROR: ", error.message);
            alert("Failed to Register");
        }
    };

    return (
        <>
            <NavBar />
            <div className='grid grid-cols-5 gap-5 mx-48 my-20'>
                <div className='col-span-3 p-12 border rounded-lg shadow border-neutral-200'>
                    <h1 className="mb-4 text-2xl font-bold">Register!</h1>
                    <form onSubmit={handleSubmit} className="w-full">

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
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className="mb-4">
                            <label 
                                htmlFor="username" 
                                className="block mb-4 text-lg font-medium text-gray-700">
                            Username
                            </label>
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
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className="mb-4">
                            <label 
                                htmlFor="first name" 
                                className="block mb-4 text-lg font-medium text-gray-700">
                            First Name
                            </label>
                            <input
                                type="text"
                                name="first name"
                                value={firstName}
                                placeholder="Enter your First Name"
                                onChange={(e) => setFirstName(e.target.value)}
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className="mb-4">
                            <label 
                                htmlFor="Last name" 
                                className="block mb-4 text-lg font-medium text-gray-700">
                            Last Name
                            </label>
                            <input
                                type="text"
                                name="Last name"
                                value={lastName}
                                placeholder="Enter your Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className="mb-4">
                            <label 
                                htmlFor="Student Number" 
                                className="block mb-4 text-lg font-medium text-gray-700">
                            Student Number
                            </label>
                            <input
                                type="number"
                                name="Student Number"
                                value={studentNumber}
                                placeholder="Enter your Student Number"
                                onChange={(e) => setStudentNumber(e.target.value)}
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className="mb-4">
                            <label className='block text-lg font-medium text-gray-900 mb-2.5'>
                                Location
                            </label>
                            <select 
                                required 
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={location} 
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="First "

                            >
                                <option value="" disabled></option>
                                <option value="On Campus">On Campus</option>
                                <option value="Off Campus">Off Campus</option>
                                <option value="Commuter">Commuter</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className='block text-lg font-medium text-gray-900 mb-2.5'>
                                Grade
                            </label>
                            <select 
                                required 
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={grade} 
                                onChange={(e) => setGrade(e.target.value)}
                                placeholder="First "

                            >
                                <option value="" disabled></option>
                                <option value="First Year">First Year</option>
                                <option value="Second Year">Second Year</option>
                                <option value="Third Year">Third Year</option>
                                <option value="Fourth Year">Fourth Year</option>
                                <option value="Fifth Year">Fifth Year</option>
                                <option value="Sixth Year">Sixth Year</option>
                                <option value="Sixth Year">Grad School</option>

                                <option value="Other">Other</option>
                            </select>
                        </div>
                        

                        <div className="mb-4">
                            <label 
                                htmlFor="Age" 
                                className="block mb-4 text-lg font-medium text-gray-700">
                            Age
                            </label>
                            <input
                                type="number"
                                name="Age"
                                value={age}
                                placeholder="Enter your Age"
                                onChange={(e) => setAge(e.target.value)}
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className='mb-4'>

                            <label className='block text-lg font-medium text-gray-900 mb-2.5'>
                                Biography (optional):
                            </label>
                            <textarea 
                                rows='4' 
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={biography} 
                                onChange={(e) => setBiography(e.target.value)} 
                            />
                        </div>
                        
                        <button type="submit" className="px-4 py-2 font-bold text-white rounded bg-violet-700 hover:bg-violet-800">
                            Submit
                        </button>
                        <span className="block mt-2 text-sm">
                            Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
                        </span>
                    </form>
                </div>

                <div className='flex flex-col justify-start col-span-2 align-top'>
                    <div className=" chat chat-start mt-28">
                        <div className="font-medium text-white chat-bubble bg-violet-700">Make sure to use your UW email!</div>
                    </div>
                    <img src={SignupDecor} alt="Make sure to use your UW email!" className='object-scale-down w-full' />
                </div>
            </div>
        </>
    );
    
}