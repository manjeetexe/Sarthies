import React from "react";
import { useNavigate } from "react-router-dom";

const PaperCards = () => {
  const navigate = useNavigate();

  const papers = [
    { year: "2024", color: "bg-gradient-to-r from-red-500 via-pink-500 to-red-400" },
    { year: "2023", color: "bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400" },
    { year: "2022", color: "bg-gradient-to-r from-green-500 via-lime-500 to-green-400" },
    { year: "2021", color: "bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-400" },
    { year: "2020", color: "bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-400" },
  ];

  const handleCardClick = (year) => {
    navigate(`./papers/${year}`); // Navigate to the route for the selected year
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex gap-4 overflow-x-auto w-full max-w-4xl">
        {papers.map((paper, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-40 h-56 ${paper.color} text-white rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform`}
            onClick={() => handleCardClick(paper.year)} // Pass the year to the handler
          >
            <div className="flex flex-col h-full justify-center items-center text-center">
              <h1 className="text-2xl font-bold">{paper.year}</h1>
              <p className="mt-2 text-sm">Click to view subjects</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaperCards;