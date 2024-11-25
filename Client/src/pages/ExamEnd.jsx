import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ExamEND = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { score, totalMarks, summary ,subject ,lesson} = location.state || {};


  return (
    <div className="min-h-screen mt-20 flex flex-col items-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-4">Exam Finished</h1>
      <p className="text-xl mb-4">Thank you for taking the exam. Your responses have been submitted.</p>
      <p className="text-xl font-bold mb-4">Your Score: {score}/{totalMarks}</p>
      
      <div className="flex gap-4">
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Go to Home
        </button>
        <button
          onClick={() => navigate('/analysis', { state: { summary , score ,totalMarks , subject ,lesson} })}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
        >
          Analyze Exam
        </button>
      </div>
    </div>
  );
};

export default ExamEND;