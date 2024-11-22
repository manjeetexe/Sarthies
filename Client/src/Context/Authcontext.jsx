import React, { createContext, useState, useContext } from 'react';

// Create a context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Function to handle sign in
  const SignIn = (token) => {
    setIsSignedIn(true);
    // You can store the token in memory, or just rely on isSignedIn
    // if you need to persist the token, you can store it in a secure place
  };

  // Function to handle sign out
  const SignOut = () => {
    setIsSignedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, SignIn, SignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);