import React, { useState, useContext } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { LoggedInContext, UserInfoContext } from '../../App';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setUserInfo } = useContext(UserInfoContext);
    const { setIsLoggedIn } = useContext(LoggedInContext);

    const handleSignup = async (e) => {
        e.preventDefault();
        if (!name || !email || !password || !confirmPassword) {
            setError('All fields are required!');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/auth/signup`,
                { name, email, password }
            );

            const token = response.data.token;
            localStorage.setItem(`${import.meta.env.VITE_APP_NAME}_token`, token);
            localStorage.setItem(
                `${import.meta.env.VITE_APP_NAME}_user_name`,
                response.data.user.name
            );

            setUserInfo(response.data.user);
            setIsLoggedIn(true);
            navigate('/');
        } catch (err) {
            console.error('Error: ', err.message);
            setError('Signup failed! Try again.');
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gray-300 bg-opacity-40">
                <img
                    src="/heroImageBanner.png"
                    alt=""
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Signup Form */}
            <div className="relative z-10 ml-auto mr-10 bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Create Your Account
                </h2>

                {/* Name */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                        placeholder="John Doe"
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                        placeholder="you@example.com"
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                        placeholder="********"
                    />
                </div>

                {/* Confirm Password */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                        placeholder="********"
                    />
                </div>

                {/* Error Message */}
                {error && (
                    <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
                )}

                {/* Signup Button */}
                <button
                    onClick={handleSignup}
                    className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition font-semibold"
                >
                    Sign Up
                </button>

                {/* Already have account */}
                <NavLink to="/login">
                    <p className="text-center text-sm text-gray-500 mt-4">
                        Already Have an Account?{' '}
                        <span className="text-indigo-600 hover:underline cursor-pointer">
                            Log In
                        </span>
                    </p>
                </NavLink>
            </div>
        </div>
    );
};

export default Signup;
