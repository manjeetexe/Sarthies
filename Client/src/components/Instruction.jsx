import React from 'react';
import { useNavigate } from 'react-router-dom';

const Instructions = ({ selectedLesson, goBack }) => {
  const navigate = useNavigate();

  const startTest = () => {
    navigate('/exam'); // Adjust this route to match your actual Exam page route
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-blue-50 rounded-lg shadow-md mt-20">
      <h1 className="text-2xl font-bold text-black mb-4">Instructions for {selectedLesson}</h1>
      <ul className="list-disc list-inside space-y-3 text-black text-lg">
        <li>Please read the instructions carefully before starting the test for {selectedLesson}.</li>
        <li>Each question has a time limit; answer within the time to proceed.</li>
        <li>No pausing or exiting the test midway. Restarting may not be allowed.</li>
        <li>Select the correct answer from the options given for each question.</li>
        <li>Your score and accuracy will be shown at the end of the test.</li>
      </ul>
      <div className="mt-6 text-center">
        <button 
          className="px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-400 transition mr-4"
          onClick={startTest}
        >
          Start Test
        </button>
        <button 
          className="px-6 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-400 transition" 
          onClick={goBack}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Instructions;