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
              '/api/getUserData',
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
    // Make sure to include the bannerImage, profilePicture, and phoneNumber in the userData object if they're not already present
    const updatedUserData = {
        ...userData,
        bannerImage: userData.bannerImage || 'https://via.placeholder.com/1500x400', // Default Banner Image if not present
        profilePicture: userData.profilePicture || 'https://via.placeholder.com/150', // Default Profile Image if not present
        phoneNumber: userData.phoneNumber || '',
        bio:userData.bio || ''  // Empty phoneNumber if not present
    };

    setIsSignedIn(true);
    setUser(updatedUserData); // Set the updated user data with images and empty phone number
    localStorage.setItem('token', userData.token); 
};



  
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