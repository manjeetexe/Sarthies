import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/Authcontext';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSarthie, setIsSarthie] = useState(false);
  const [className, setClassName] = useState('');
  const [error, setError] = useState('');
  
  // New states for OTP verification
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [isResending, setIsResending] = useState(false);
  
  const navigate = useNavigate();
  const { isSignedIn, SignIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/');
    }
  }, [isSignedIn, navigate]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedName = name.trim();
    const trimmedClassName = className.trim();
  
    // Validation checks...
    if (!trimmedEmail || !trimmedPassword || !trimmedName || !trimmedClassName) {
      setError('All fields are required.');
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError('Please enter a valid email address.');
      return;
    }
  
    const allowedClasses = ['7', '8', '9', '10'];
    if (!allowedClasses.includes(trimmedClassName)) {
      setError('Please select a valid class from the dropdown.');
      return;
    }
  
    try {
      const response = await axios.post(
        'http://localhost:8000/api/signup',
        {
          email: trimmedEmail,
          password: trimmedPassword,
          name: trimmedName,
          isSarthie,
          class: trimmedClassName,
        },
        { withCredentials: true }
      );
  
      setShowOtpForm(true);
      
    } catch (err) {
      console.error("Error during sign-in:", err);
      setError(err.response?.data?.message || 'Sign-in failed. Please try again.');
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setOtpError('');

    if (!otp.trim()) {
      setOtpError('Please enter the verification code');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8000/api/verify-otp',
        {
          email,
          otp: otp.trim()
        },
        { withCredentials: true }
      );

     
      console.log(response.data)
      const data = { ...response.data.user, token: response.data.token }
      SignIn(data);
      console.log(data)
      alert('Account verified successfully!');
      navigate('/');

    } catch (err) {
      console.error("Error during verification:", err);
      setOtpError(err.response?.data?.message || 'Verification failed. Please try again.');
    }
  };

  const handleResendOtp = async () => {
    setIsResending(true);
    setOtpError('');

    try {
      await axios.post(
        'http://localhost:8000/api/resend-otp',
        { email },
        { withCredentials: true }
      );

      alert('New verification code sent to your email');
    } catch (err) {
      setOtpError('Failed to resend verification code. Please try again.');
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      {!showOtpForm ? (
        // Original sign-up form
        <form
          method='post'
          onSubmit={handleSignIn}
          className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-gray-800">
            Sign Up
          </h2>
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          
          {/* Your existing form fields... */}
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
          <label htmlFor="class" className="block text-sm font-medium text-gray-600">
            Class
          </label>
          <select
            id="class"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>Select your class</option>
            <option value="7">Class 7</option>
            <option value="8">Class 8</option>
            <option value="9">Class 9</option>
            <option value="10">Class 10</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Are you a Sarthie student?</label>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value={true}
                checked={isSarthie === true}
                onChange={() => setIsSarthie(true)}
                className="form-radio text-blue-500"
              />
              <span className="ml-2 text-gray-700">Yes</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                value={false}
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
            Sign Up
          </button>
          <p className="mt-4 text-sm text-gray-600 text-center">
            Already Have an account?{' '}
            <Link to="/signin" className="text-blue-500 hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      ) : (
        // OTP verification form
        <form
          onSubmit={handleVerifyOtp}
          className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-gray-800">
            Verify Your Email
          </h2>
          <p className="text-gray-600 text-sm mb-6 text-center">
            We've sent a verification code to {email}
          </p>
          
          {otpError && <div className="text-red-500 text-sm mb-4">{otpError}</div>}
          
          <div className="mb-6">
            <label htmlFor="otp" className="block text-sm font-medium text-gray-600 mb-2">
              Verification Code
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter verification code"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200 mb-4"
          >
            Verify Email
          </button>
          
          <button
            type="button"
            onClick={handleResendOtp}
            disabled={isResending}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
          >
            {isResending ? 'Sending...' : 'Resend Code'}
          </button>
        </form>
      )}
    </div>
  );
};

export default SignIn;