import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OTPVerification = ({ email, onVerificationSuccess }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // Array for 6 digits
  const [error, setError] = useState('');
  const [isResending, setIsResending] = useState(false);
  const inputRefs = Array(6).fill(0).map(() => React.createRef());
  
  const navigate = useNavigate();

  // Handle input change for each digit
  const handleChange = (index, value) => {
    if (isNaN(value)) return; // Only allow numbers
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs[index + 1].current.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        const newOtp = [...otp];
        newOtp[index - 1] = '';
        setOtp(newOtp);
        inputRefs[index - 1].current.focus();
      }
    }
  };

  // Handle paste
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (/^\d+$/.test(pastedData)) {
      const newOtp = [...otp];
      pastedData.split('').forEach((digit, index) => {
        if (index < 6) newOtp[index] = digit;
      });
      setOtp(newOtp);
      if (pastedData.length === 6) {
        inputRefs[5].current.focus();
      } else {
        inputRefs[pastedData.length].current.focus();
      }
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setError('');

    const otpString = otp.join('');
    if (otpString.length !== 6) {
      setError('Please enter the complete verification code');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:3000/api/verify-otp',
        {
          email,
          otp: otpString
        },
        { withCredentials: true }
      );

      if (onVerificationSuccess) {
        onVerificationSuccess(response.data.user);
      }

    } catch (err) {
      console.error("Verification error:", err);
      setError(err.response?.data?.message || 'Verification failed. Please try again.');
    }
  };

  const handleResendOtp = async () => {
    setIsResending(true);
    setError('');

    try {
      await axios.post(
        'http://localhost:3000/api/resend-otp',
        { email },
        { withCredentials: true }
      );

      alert('New verification code sent to your email');
    } catch (err) {
      setError('Failed to resend code. Please try again.');
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">
        Verify Your Email
      </h2>
      <p className="text-gray-600 text-sm mb-6 text-center">
        We've sent a verification code to<br />
        <span className="font-medium">{email}</span>
      </p>

      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-500 text-sm rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleVerify}>
        <div className="flex justify-center gap-2 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              ref={inputRefs[index]}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 
                     rounded-lg shadow-md transition duration-200 mb-4"
        >
          Verify Email
        </button>
      </form>

      <div className="text-center">
        <p className="text-gray-600 text-sm mb-2">
          Didn't receive the code?
        </p>
        <button
          onClick={handleResendOtp}
          disabled={isResending}
          className="text-blue-500 hover:text-blue-600 text-sm font-medium"
        >
          {isResending ? 'Sending...' : 'Resend Code'}
        </button>
      </div>
    </div>
  );
};

export default OTPVerification;