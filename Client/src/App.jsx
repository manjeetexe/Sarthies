import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';
import TestPage from './pages/Test';
import Notes from './pages/Notes';
import Help from './pages/Help';
import Lessons from './pages/Lessons';
import Home from './pages/Home';
import Exam from './pages/Exam';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Test" element={<TestPage />} />
          <Route path="/Notes" element={<Notes />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/exam" element={<Exam />} />
        </Routes>
        <Nav />
      </div>
    </Router>
  );
}

export default App;