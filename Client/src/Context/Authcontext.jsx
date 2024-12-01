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
          const decoded = jwtDecode(token);
          if (decoded.exp * 1000 > Date.now()) {
            setIsSignedIn(true);
            // Send a request to the backend with the decoded data
            const response = await axios.post(
              'http://localhost:8000/api/getUserData',
              { email: decoded.email, isSarthie: decoded.isSarthie },
              { headers: { Authorization: `Bearer ${token}` } }
            );
            // Update the user state
            setUser(response.data);
          } else {
            // Token expired, cleanup
            localStorage.removeItem('token');
            setIsSignedIn(false);
            setUser(null);
          }
        } catch (err) {
          console.error('Error fetching user data:', err);
          localStorage.removeItem('token'); // Clean up invalid token
          setIsSignedIn(false);
          setUser(null);
        }
      } else {
        setIsSignedIn(false);
        setUser(null);
      }
    };
  
    fetchUserData();
  }, []);


  
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