

import React, { useState } from 'react';

const login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: '',
  });



  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleRadioChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      userType: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/dashboard'); 
      } else {
        alert('Invalid email or password'); 
      }
    } catch (error) {
      console.error('Error during login:', error); 
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-red-200">
      <div className="bg-emerald-300 min-w-72 md:min-w-96 min-h-96 rounded-xl p-7">
        <h1 className="text-4xl text-center mt-6 mb-8">Login In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            required
            className="w-60 px-3 py-4 h-8 md:w-80 rounded-lg border-2 border-black"
            id="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            required
            className="w-60 px-3 py-4 h-8 md:w-80 rounded-lg border-2 border-black"
            id="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="flex gap-5 justify-center">
            <div className="flex gap-2">
              <input
                required
                type="radio"
                id="sarthi"
                name="userType"
                value="sarthi"
                checked={formData.userType === 'sarthi'}
                onChange={handleRadioChange}
              />
              <label htmlFor="sarthi">Sarthies</label>
            </div>
            <div className="flex gap-2">
              <input
                required
                type="radio"
                id="non-sarthi"
                name="userType"
                value="non-sarthi"
                checked={formData.userType === 'non-sarthi'}
                onChange={handleRadioChange}
              />
              <label htmlFor="non-sarthi">Non-Sarthies</label>
            </div>
          </div>
          <div className="flex gap-5 justify-center mt-5">
            <button type="button" className="bg-gray-500 px-6 md:px-12 py-2 text-lg font-bold rounded-2xl">
              Sign Up
            </button>
            <button type="submit" className="bg-red-500 px-6 md:px-12 py-2 text-lg font-bold rounded-2xl">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;