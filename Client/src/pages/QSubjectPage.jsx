import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Subjects = () => {
  const { year } = useParams(); // Get the selected year from route params
  const navigate = useNavigate();

  const subjects = [
    { name: "Mathematics", color: "bg-gradient-to-r from-red-500 via-pink-500 to-red-400" },
    { name: "Science", color: "bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400" },
    { name: "History", color: "bg-gradient-to-r from-green-500 via-lime-500 to-green-400" },
    { name: "English", color: "bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-400" },
    { name: "Geography", color: "bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-400" },
  ];

  const handleSubjectClick = (subject) => {
    navigate(`./${subject.toLowerCase()}`); // Navigate to the route for the selected subject
  };

  return (
    <div className="w-full mt-14 flex flex-col items-center mb-24 px-4">
      {/* Header */}
      <h2 className="text-3xl font-bold text-gray-800 my-8">
        Subjects for <span className="text-blue-600">{year}</span>
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className={`w-full h-40 ${subject.color} text-white rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform`}
            onClick={() => handleSubjectClick(subject.name)} // Pass the subject name to the handler
          >
            <div className="flex flex-col h-full justify-center items-center text-center">
              <h1 className="text-xl font-bold">{subject.name}</h1>
              <p className="mt-2 text-sm">Click to explore</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;