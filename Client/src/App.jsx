import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';
import TestPage from './pages/Test';
import Notes from './pages/Notes';
import { AuthProvider } from './Context/Authcontext';
import Help from './pages/Help';
import Lessons from './pages/Lessons';
import Home from './pages/Home';
import Exam from './pages/Exam';
import { ExamProvider } from "./Context/ExamContext";
import Signin from './pages/Signin';
import ProtectedRoute from './components/protected';

const App = () => {
  return (
    <AuthProvider>
      <ExamProvider>
      <Router>
        <Header />
        <Routes>
          {/* Public Route: Signin */}
          <Route path="/signin" element={<Signin />} />
          
          {/* Protected Routes */}
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
      </Router>
    </ExamProvider>
    </AuthProvider>
    
  );
};

export default App;