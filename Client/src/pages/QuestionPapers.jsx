import React from "react";
import { useParams } from "react-router-dom";

const QuestionPapers = () => {
  const { year, subject } = useParams(); // Get the year and subject from route params

  const papers = [
    { name: "Paper 1", color: "bg-gradient-to-r from-red-500 via-pink-500 to-red-400" },
    { name: "Paper 2", color: "bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400" },
    { name: "Paper 3", color: "bg-gradient-to-r from-green-500 via-lime-500 to-green-400" },
    { name: "Paper 4", color: "bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-400" },
    { name: "Paper 5", color: "bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-400" },
  ];

  const handlePaperClick = (paper) => {
    console.log(`Opening ${paper} for ${subject} in ${year}`); // Replace with desired functionality
  };

  return (
    <div className="w-full mt-20 flex flex-col items-center px-4">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Question Papers for <span className="text-blue-600">{subject}</span> - {year}
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {papers.map((paper, index) => (
          <div
            key={index}
            className={`w-full h-40 ${paper.color} text-white rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform`}
            onClick={() => handlePaperClick(paper.name)} // Handle paper click
          >
            <div className="flex flex-col h-full justify-center items-center text-center">
              <h2 className="text-xl font-bold">{paper.name}</h2>
              <p className="mt-2 text-sm">Click to view</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionPapers;