import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSarthie, setIsSarthie] = useState(false); // Keep it as a boolean
  const [error, setError] = useState(''); // To handle errors

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    
    // Validate inputs
    if (!email || !password || !name || isSarthie === null || isSarthie === undefined) {
      setError('All fields are required.');
      return;
    }
  
    // Validate email format (optional but good practice)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
  
    try {
      const response = await axios.post(
        'http://localhost:3000/api/signin', 
        {
          email,
          password,
          name,
          isSarthie, // Send as a boolean
        },
        {
          withCredentials: true,  // Important to send cookies with the request
        }
      );
  
      alert('Sign-in successful');
      // Optional: Redirect or perform other actions after successful sign-in
      // Example: history.push('/dashboard'); if you're using react-router
  
      // Reset form fields
      setEmail('');
      setPassword('');
      setName('');
      setIsSarthie(false);  // Reset to default state (false or another default)
      
    } catch (err) {
      console.error("Error during sign-in:", err);
      
      // Check if the error has a response with message
      if (err.response && err.response.data) {
        setError(err.response.data.message || 'Sign-in failed. Please try again.');
      } else {
        setError('Sign-in failed. Please try again.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        method='post'
        onSubmit={handleSignIn}
        className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-gray-800">
          Sign In
        </h2>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>} {/* Error message */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
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
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Are you a Sarthie student?</label>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value={true} // Pass as a boolean
                checked={isSarthie === true}
                onChange={() => setIsSarthie(true)}
                className="form-radio text-blue-500"
              />
              <span className="ml-2 text-gray-700">Yes</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                value={false} // Pass as a boolean
                checked={isSarthie === false}
                onChange={() => setIsSarthie(false)}
                className="form-radio text-blue-500"
              />
              <span className="ml-2 text-gray-700">No</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
        >
          Sign In
        </button>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Don’t have an account?{' '}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;