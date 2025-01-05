import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/Authcontext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const { isSignedIn, SignIn } = useAuth();

  useEffect(() => {
        
        const popupTimer = setTimeout(() => {
          setShowPopup(true);
          console.log('Popup')
        }, 2000); // Show popup after 2 seconds
    
        return () => clearTimeout(popupTimer);
            
      }, [isSignedIn, navigate]);


  useEffect(() => {
    if (isSignedIn) {
      navigate('/');
    }
  }, [isSignedIn, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/login`, 
        { email, password },
        { withCredentials: true }
      );

      alert('Login successful');
      const data = { ...response.data.user, token: response.data.token };
      SignIn(data);

      navigate('/'); 
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handlePopupChoice = (isSarthie) => {
    if (isSarthie) {
      setShowPopup(false); // Close popup
    } else {
      navigate('/non-sarthie-route'); // Redirect to another route
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">


      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Are you a Sarthie student?
            </h3>
            <div className="flex justify-between">
              <button
                className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-200 w-1/2 mr-2"
                onClick={() => handlePopupChoice(true)}
              >
                I am a Sarthie
              </button>
              <button
                className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-200 w-1/2 ml-2"
                onClick={() => handlePopupChoice(false)}
              >
                I am not a Sarthie
              </button>
            </div>
          </div>
        </div>
      )}







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
          className={`w-full ${loading ? 'bg-blue-400' : 'bg-blue-500 hover:bg-blue-600'} 
            text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200`}
          disabled={loading} // Disable button during loading
        >
          {loading ? 'Loading...' : 'Login'}
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