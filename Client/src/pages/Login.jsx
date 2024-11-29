import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';// Import useNavigate for navigation
import { useAuth } from '../Context/Authcontext';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const { isSignedIn, SignIn } = useAuth();
  

  useEffect(() => {
    if (isSignedIn) {
      navigate('/');
    }
  }, [isSignedIn, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8000/api/login', // Update with your backend login API endpoint
        { email, password },
        { withCredentials: true } // Ensures cookies are sent and received
      );
      alert('Login successful');
      console.log(response.data.user);
      SignIn(response.data.user);

      // Redirect to home page after successful login
      navigate('/');

      // Optionally, save token or user info to localStorage/sessionStorage if needed
      // localStorage.setItem('token', response.data.token);

      setEmail('');
      setPassword('');
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
        >
          Login
        </button>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;