import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios'; // Using axios for HTTP requests

// Create AuthContext
const AuthContext = createContext();

// Provide AuthContext to children
export const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Fetch user data when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          // Decode the token to get email and isSarthies
          const decoded = jwtDecode(token);

          // Ensure the token is not expired
          if (decoded.exp * 1000 > Date.now()) {
            setIsSignedIn(true);

            // Send a request to the backend with the decoded data
            const response = await axios.post(
              'http://localhost:8000/api/getUserData',
              {
                email: decoded.email,
                isSarthies: decoded.isSarthie,
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`, // Include the token in the header if needed
                },
              }
            );

            // Update the user state with the data from the backend
            setUser(response.data);
            console.log('User data fetched from backend:', response.data);
          } else {
            // Remove expired token
            localStorage.removeItem('token');
            setIsSignedIn(false);
            setUser(null);
          }
        } catch (err) {
          console.error('Error fetching user data:', err);
          localStorage.removeItem('token'); // Remove invalid token
          setIsSignedIn(false);
          setUser(null);
        }
      }
    };

    fetchUserData();
  }, []); // Runs once on mount

  // Example function to handle sign-in
  const SignIn = (userData) => {
    setIsSignedIn(true);
    setUser(userData);
    localStorage.setItem('token', userData.token);
  };

  // Example function to handle sign-out
  const SignOut = () => {
    setIsSignedIn(false);
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, user, SignIn, SignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const   useAuth = () => useContext(AuthContext);