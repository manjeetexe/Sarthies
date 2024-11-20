import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSarthie, setIsSarthie] = useState(''); // 'sarthie' or 'non-sarthie'

  const handleSignIn = async (e) => {
    e.preventDefault();
  
    console.log(email, password, name, isSarthie);
    try {
      // Make sure to include http:// or https:// in the URL
      const response = await axios.post('http://localhost:3000/api/signin', {
        email: email,        // Ensure email is set
      password: password,  // Ensure password is set
      name: name,          // Ensure name is set
      isSarthie: isSarthie 
      });
      
      alert('Sign-in successful');
    } catch (err) {
      console.error(err);
      alert('Sign-in failed');
    }
  
    setEmail("");
    setPassword("");
    setName("");
    setIsSarthie("");
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
                value="sarthie"
                checked={isSarthie === 'sarthie'}
                onChange={(e) => setIsSarthie(e.target.value)}
                className="form-radio text-blue-500"
              />
              <span className="ml-2 text-gray-700">Yes</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                value="non-sarthie"
                checked={isSarthie === 'non-sarthie'}
                onChange={(e) => setIsSarthie(e.target.value)}
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