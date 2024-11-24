import React, { createContext, useContext, useState } from 'react';

// Create AuthContext
const AuthContext = createContext();

// Provide AuthContext to children
export const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Example function to handle sign-in
  const SignIn = (userData) => {
    setIsSignedIn(true);
    setUser(userData);
  };

  // Example function to handle sign-out
  const SignOut = () => {
    setIsSignedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, user, SignIn, SignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);