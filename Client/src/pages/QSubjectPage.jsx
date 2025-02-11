import React from "react";
import { useParams } from "react-router-dom";

const papers = [
  { name: "Maths 1", color: "bg-gradient-to-r from-red-500 via-pink-500 to-red-400" },
  { name: "Maths 2", color: "bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-400" },
  { name: "Science 1", color: "bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400" },
  { name: "Science 2", color: "bg-gradient-to-r from-green-500 via-lime-500 to-green-400" },
  { name: "English", color: "bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-400" },
  { name: "Hindi", color: "bg-gradient-to-r from-red-600 via-pink-600 to-red-500" },
  { name: "Marathi", color: "bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-500" },
  { name: "Geography", color: "bg-gradient-to-r from-teal-500 via-green-500 to-teal-400" },
  { name: "History", color: "bg-gradient-to-r from-gray-600 via-gray-700 to-gray-500" },
];

const QuestionPapers = () => {
  const { year } = useParams(); // Get year from URL params

  const handlePaperClick = (subject) => {
    // Convert subject name to lowercase with hyphens (e.g., "Maths 1" → "maths-1")
    const fileName = subject.toLowerCase().replace(/\s+/g, "-");
    const filePath = `/pdfs/${year}_${fileName}.pdf`;

    window.open(filePath, "_blank"); // Open the PDF in a new tab
  };

  return (
    <div className="w-full mt-20 flex flex-col items-center mb-24 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Question Papers - {year}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {papers.map((paper, index) => (
          <div
            key={index}
            className={`w-full h-40 ${paper.color} text-white rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform`}
            onClick={() => handlePaperClick(paper.name)}
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