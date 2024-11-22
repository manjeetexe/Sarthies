import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './../Context/Authcontext'; // Import the context

const ProtectedRoute = () => {
  const { isSignedIn } = useAuth(); // Get the isSignedIn state from context
  console.log(isSignedIn)
  if (!isSignedIn) {
    // If not signed in, redirect to the sign-in page
    return <Navigate to="/signin" />;
  }

  return <Outlet />; // Allow access to the protected route
};

export default ProtectedRoute;