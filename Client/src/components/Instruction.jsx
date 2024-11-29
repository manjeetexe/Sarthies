import React from 'react';
import { useNavigate } from 'react-router-dom';

const Instructions = ({ subject, selectedLesson, goBack, lessonData, setExamStarted }) => {
  const navigate = useNavigate();

  const startTest = () => {
    if (setExamStarted) {
      setExamStarted(true);
    }
    navigate('/exam', { state: { lessonData, subject, selectedLesson } });
  };

  return (
    <div className='p-6 mt-10'>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl  shadow-lg mt-10 md:mt-20 border border-gray-200">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-blue-700">
          Ready for {selectedLesson}?
        </h1>
        <p className="text-gray-500 text-base mt-2">
          Please follow the instructions carefully to excel in your test.
        </p>
      </div>

      {/* Instructions List */}
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
            1
          </div>
          <p className="text-gray-700 text-lg">
            Read each question carefully before selecting your answer.
          </p>
        </div>
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold">
            2
          </div>
          <p className="text-gray-700 text-lg">
            Each question has a time limit. Make sure to answer within the given time.
          </p>
        </div>
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center font-semibold">
            3
          </div>
          <p className="text-gray-700 text-lg">
            Avoid refreshing or navigating away. Exiting may disqualify your test.
          </p>
        </div>
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold">
            4
          </div>
          <p className="text-gray-700 text-lg">
            Your score and performance will be displayed after you complete the test.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
        <button
          className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-full font-semibold hover:from-green-500 hover:to-green-600 shadow-lg transition-all"
          onClick={startTest}
        >
          Start Test
        </button>
        <button
          className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-red-400 to-red-500 text-white rounded-full font-semibold hover:from-red-500 hover:to-red-600 shadow-lg transition-all"
          onClick={goBack}
        >
          Cancel
        </button>
      </div>
    </div>
    </div>
  );
};

export default Instructions;