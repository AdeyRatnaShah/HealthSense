import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // fixed react-router import
import axios from 'axios';
import { LoggedInContext, UserInfoContext } from '../../App';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useContext(UserInfoContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(LoggedInContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('All fields are required!');
    } else {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/users/login`,
          { email, password }
        );

        const token = response.data.token;
        localStorage.setItem(`${import.meta.env.VITE_APP_NAME}_token`, token);
        localStorage.setItem(
          `${import.meta.env.VITE_APP_NAME}_user_name`,
          response.data.user.name
        );

        setIsLoggedIn(true);
        navigate('/');
      } catch (err) {
        console.log('Error: ', err.message);
        setError('Invalid credentials!');
      }
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      // style={{ backgroundImage: `url('/heroImageBanner.png')` }}
    >
      {/* Overlay (optional, for dark effect) */}
      <div className="absolute inset-0 bg-gray-300 bg-opacity-40">
        <img src="/heroImageBanner.png" alt="" />
      </div>

      {/* Login Form */}
      <div className="relative z-10 ml-auto mr-10 bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>

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

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="********"
          />
        </div>

        {error && (
          <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
        )}

        <button
          onClick={handleLogin}
          className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition font-semibold"
        >
          Login
        </button>

        <NavLink to="/signup">
          <p className="text-center text-sm text-gray-500 mt-4">
            Don&apos;t have an account?{' '}
            <span className="text-indigo-600 hover:underline cursor-pointer">
              Sign up
            </span>
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
