import React, { useState } from 'react';
import Instructions from './../components/Instruction';
import { useLocation } from 'react-router-dom';
import { MdPlayLesson } from "react-icons/md";

const TestNumber = () => {
  const location = useLocation();

  // Validate that location.state contains the necessary data
  if (!location.state || !location.state.lessonData) {
    return <p className="text-center mt-24 text-xl text-red-500">Invalid data. Please go back and try again.</p>;
  }

  const { subject, lessonData, selectedLesson } = location.state; // Extract props from location.state
  const testNumbers = Object.keys(lessonData); // Get test keys (e.g., Test1, Test2)

  const [selectedTestNo, setSelectedTestNo] = useState(null);
  const [questions, setQuestions] = useState(null); // Store the questions for the selected test

  const handleTestSelect = (testNo) => {
    const testData = lessonData[testNo]; // Get data for the selected test
    setSelectedTestNo(testNo);
    setQuestions(testData.Questions); // Store the questions array
    console.log(`Selected Test: ${testNo}`, testData.Questions);
  };

  const goBack = () => {
    setSelectedTestNo(null);
    setQuestions(null);
  };

  return (
    <>
      {!selectedTestNo ? (
        <>
          <h1 className="px-8 my-1 mt-24 font-bold text-xl flex items-center gap-2 text-purple-600">
            <MdPlayLesson className="text-3xl" /> Select a Test for "{selectedLesson}"
          </h1>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8 py-4">
            {testNumbers.map((testNo) => (
              <div
                key={testNo}
                className="h-28 w-full rounded-xl shadow-lg border border-gray-300 hover:bg-gradient-to-r from-purple-400 to-indigo-400 transition-all p-5 text-xl text-gray-800 font-medium cursor-pointer flex items-center justify-center"
                onClick={() => handleTestSelect(testNo)}
              >
                <h1 className="text-center">{testNo}</h1>
              </div>
            ))}
          </section>
        </>
      ) : (
        <Instructions
          selectedLesson={selectedLesson}
          subject={subject}
          testNumber={selectedTestNo} // Pass the selected test number
          questions={questions} // Pass the questions array
          goBack={goBack} // Pass the goBack function
        />
      )}
    </>
  );
};

export default TestNumber;