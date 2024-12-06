import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/Authcontext';

const SignUp = () => {
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

  // Loading states
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const navigate = useNavigate();
  const { isSignedIn, SignIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/');
    }
  }, [isSignedIn, navigate]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setIsSigningUp(true);

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedName = name.trim();
    const trimmedClassName = className.trim();

    // Validation checks...
    if (!trimmedEmail || !trimmedPassword || !trimmedName || !trimmedClassName) {
      setError('All fields are required.');
      setIsSigningUp(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError('Please enter a valid email address.');
      setIsSigningUp(false);
      return;
    }

    const allowedClasses = ['7', '8', '9', '10'];
    if (!allowedClasses.includes(trimmedClassName)) {
      setError('Please select a valid class from the dropdown.');
      setIsSigningUp(false);
      return;
    }

    try {
      const response = await axios.post(
        'https://sarthies-4.onrender.com/api/signup',
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
      console.error('Error during sign-up:', err);
      setError(err.response?.data?.message || 'Sign-up failed. Please try again.');
    } finally {
      setIsSigningUp(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setOtpError('');
    setIsVerifying(true);

    if (!otp.trim()) {
      setOtpError('Please enter the verification code');
      setIsVerifying(false);
      return;
    }

    try {
      const response = await axios.post(
        'https://sarthies-4.onrender.com/api/verify-otp',
        {
          email,
          otp: otp.trim(),
        },
        { withCredentials: true }
      );

      alert('Account verified successfully!');
      const data = { ...response.data.user, token: response.data.token };
      SignIn(data);

      navigate('/');
    } catch (err) {
      console.error('Error during verification:', err);
      setOtpError(err.response?.data?.message || 'Verification failed. Please try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendOtp = async () => {
    setIsResending(true);
    setOtpError('');

    try {
      await axios.post(
        'https://sarthies-4.onrender.com/api/resend-otp',
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
        // Sign-up form
        <form
          method="post"
          onSubmit={handleSignUp}
          className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-gray-800">
            Sign Up
          </h2>
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          {/* Name */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Class */}
          <div className="mb-6">
            <label htmlFor="className" className="block text-sm font-medium text-gray-600 mb-2">
              Class
            </label>
            <select
              id="className"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select your class</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <button
            type="submit"
            className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200 ${
              isSigningUp && 'opacity-70 cursor-not-allowed'
            }`}
            disabled={isSigningUp}
          >
            {isSigningUp ? 'Signing Up...' : 'Sign Up'}
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
              className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200 ${
                isVerifying && 'opacity-70 cursor-not-allowed'
              }`}
              disabled={isVerifying}
            >
              {isVerifying ? 'Verifying...' : 'Verify'}
            </button>
  
            <div className="mt-4 flex justify-between items-center">
              <button
                type="button"
                className={`text-blue-500 text-sm hover:underline ${
                  isResending && 'opacity-70 cursor-not-allowed'
                }`}
                onClick={handleResendOtp}
                disabled={isResending}
              >
                {isResending ? 'Resending...' : 'Resend Code'}
              </button>
              <Link
                to="/signup"
                className="text-sm text-gray-500 hover:underline"
              >
                Edit Email
              </Link>
            </div>
          </form>
        )}
      </div>
    );
  };
  
  export default SignUp;