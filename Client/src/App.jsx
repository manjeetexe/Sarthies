import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';
import TestPage from './pages/Test';
import Notes from './pages/Notes';
import { AuthProvider, useAuth } from './Context/Authcontext'; 
import Help from './pages/Help';
import Lessons from './pages/Lessons';
import TestNo from './pages/TestNumber'
import Home from './pages/Home';
import Exam from './pages/Exam';
import { ExamProvider } from "./Context/ExamContext";
import Signin from './pages/Login';
import Signup from './pages/Signup';
import { useLocation } from 'react-router-dom';
import ProtectedRoute from './components/protected';
import ExamEnd from './pages/ExamEnd'
import Instructions from './components/Instruction';
import Analysis from './pages/AnalizeMCQ';
import ExamDetailAnlize from './pages/examdetailanalize'
import EditProfile from './pages/EditProfile'
import UploadPDF from './pages/UploadPDF'
import Displaypdf from './pages/DisplayPdf'
import PaperDetails from './pages/QSubjectPage'
import CardFMSub from './pages/CardFMSub';
import TestNumber from './pages/TestNumber';


const AppContent = () => {



  const { isSignedIn } = useAuth(); // Access isSignedIn inside AuthProvider
  const [examStarted, setExamStarted] = useState(false); // Track if the exam has started
  const location = useLocation();

    const hideHeaderNav = examStarted || location.pathname === '/exam'


    return (
      <>
        {!hideHeaderNav && isSignedIn && <Header />}
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Help" element={<Help />} />
            <Route path="/uploadpdf" element={<UploadPDF />} />
            <Route path="/TestNo" element={<TestNo />} />
            <Route path="/papers/:year" element={<PaperDetails />} />
            <Route path="/cardsformula/:Subject" element={<CardFMSub />} />
            <Route path="/ExamEND" element={<ExamEnd />} /> 
            <Route path="/DisplayPdf" element={<Displaypdf />} /> 
            <Route path="/EditProfile" element={<EditProfile />} /> 
            <Route path="/examdetailanalize" element={<ExamDetailAnlize />} />   /
            <Route path="/Test" element={<TestPage />} />
            <Route path="/analysis" element={<Analysis />} /> 
            <Route path="/Notes" element={<Notes />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/exam" element={<Exam />} />
            <Route
              path="/instruction"
              element={<Instructions setExamStarted={setExamStarted} />} 
            />
          </Route>
        </Routes>
        {!hideHeaderNav && isSignedIn && <Nav />}
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