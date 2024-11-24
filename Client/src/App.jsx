import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';
import TestPage from './pages/Test';
import Notes from './pages/Notes';
import { AuthProvider, useAuth } from './Context/Authcontext'; // Import useAuth
import Help from './pages/Help';
import Lessons from './pages/Lessons';
import Home from './pages/Home';
import Exam from './pages/Exam';
import { ExamProvider } from "./Context/ExamContext";
import Signin from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './components/protected';

const AppContent = () => {
  const { isSignedIn } = useAuth(); // Access isSignedIn inside AuthProvider

  return (
    <>
      {isSignedIn && <Header />}
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Test" element={<TestPage />} />
          <Route path="/Notes" element={<Notes />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/exam" element={<Exam />} />
        </Route>
      </Routes>
      <Nav />
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <ExamProvider>
        <Router>
          <AppContent />
        </Router>
      </ExamProvider>
    </AuthProvider>
  );
};

export default App;