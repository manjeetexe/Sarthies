import React, { useState } from "react";
import { useLocation } from "react-router-dom";



const Analysis = () => {
  const location = useLocation();
  const { summary ,score,totalMarks , subject ,lesson } = location.state || {};
  console.log(subject);
  console.log(lesson);

  // Calculate overall stats
  const totalQuestions = summary?.length || 0;
  const correctAnswers = summary?.filter((item) => item.isCorrect).length || 0;
  const incorrectAnswers = totalQuestions - correctAnswers;

  // Ensure all questions have the 'Marks' field for total calculation
  const Score = score
    
  // Toggle state for question details
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <div className="min-h-screen mt-20 flex flex-col items-center bg-gray-50 p-8">
      <h1 className="text-4xl font-semibold text-gray-800 mb-8">Exam Analysis</h1>
      <h1>{subject}</h1>
      <h1>{lesson}</h1>

      {/* Performance Summary */}
      <div className="w-full md:w-3/4 lg:w-1/2 bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Performance Overview</h2>
        <div className="flex flex-col gap-6">
          {/* Correct Answers */}
          <div>
            <p className="font-medium text-gray-600">Correct Answers</p>
            <div className="relative bg-gray-200 rounded-full h-5 overflow-hidden">
              <div
                className="absolute bg-green-500 h-5"
                style={{ width: `${(correctAnswers / totalQuestions) * 100}%` }}
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {correctAnswers} out of {totalQuestions}
            </p>
          </div>

          {/* Incorrect Answers */}
          <div>
            <p className="font-medium text-gray-600">Incorrect Answers</p>
            <div className="relative bg-gray-200 rounded-full h-5 overflow-hidden">
              <div
                className="absolute bg-red-500 h-5"
                style={{ width: `${(incorrectAnswers / totalQuestions) * 100}%` }}
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {incorrectAnswers} out of {totalQuestions}
            </p>
          </div>

          {/* Total Marks */}
          <div className="text-lg font-semibold text-center mt-4">
            Score : <span className="text-indigo-600">{Score} / {totalMarks}</span>
          </div>
        </div>
      </div>

      {/* Detailed Question Analysis */}
      <div className="w-full md:w-3/4 lg:w-1/2 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Detailed Question Analysis</h2>
        <div className="space-y-6">
          {summary?.map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border border-gray-300 shadow-md ${
                item.isCorrect ? "bg-green-50" : "bg-red-50"
              } transition-all duration-300 ease-in-out hover:shadow-lg hover:border-gray-500`}
            >
              {/* Question Summary */}
              <div
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                className="cursor-pointer flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-gray-700">
                  Q{item.questionNumber}: {item.question.slice(0, 50)}...
                </h3>
                <span
                  className={`text-sm font-medium ${
                    item.isCorrect ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {item.isCorrect ? "Correct" : "Incorrect"}
                </span>
              </div>

              {/* Expandable Details */}
              {openQuestion === index && (
                <div className="mt-2 pl-4">
                  <p className="text-gray-600">
                    <span className="font-medium">Your Answer:</span> {item.selectedOption}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Correct Answer:</span>{" "}
                    {item.isCorrect ? "Yes" : "No"}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Marks:</span> {item.Marks}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analysis;