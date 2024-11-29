import React, { useState } from "react";

const FormulaCards = () => {
  const [selectedSubject, setSelectedSubject] = useState("Physics");

  // Define subject colors, card data, and images
  const subjects = {
    Physics: {
      textColor: "text-blue-500",
      borderColor: "border-blue-500",
      underlineColor: "border-blue-500",
      cards: [
        { name: "Newton's Laws", image: "/images/newton.jpg" },
        { name: "Thermodynamics", image: "/images/thermo.jpg" },
        { name: "Electromagnetism", image: "/images/electro.jpg" },
      ],
    },
    Chemistry: {
      textColor: "text-red-500",
      borderColor: "border-red-500",
      underlineColor: "border-red-500",
      cards: [
        { name: "Periodic Table", image: "/images/periodic.jpg" },
        { name: "Chemical Bonds", image: "/images/bonds.jpg" },
        { name: "Organic Chemistry", image: "/images/organic.jpg" },
      ],
    },
    Maths: {
      textColor: "text-green-500",
      borderColor: "border-green-500",
      underlineColor: "border-green-500",
      cards: [
        { name: "Algebra", image: "/images/algebra.jpg" },
        { name: "Calculus", image: "/images/calculus.jpg" },
        { name: "Geometry", image: "/images/geometry.jpg" },
      ],
    },
  };

  return (
    <div className="w-full mt-5">
      {/* Header */}
      <div className="flex justify-between w-full px-2">
        <h1 className="text-2xl font-semibold">Formula Cards</h1>
        <h1 className="text-xl text-blue-500 font-semibold cursor-pointer">
          View all
        </h1>
      </div>

      {/* Subject Tabs */}
      <div className="px-2 mt-3">
        <div className="flex space-x-6 text-xl font-medium">
          {Object.keys(subjects).map((subject) => (
            <h1
              key={subject}
              className={`cursor-pointer ${
                selectedSubject === subject
                  ? `${subjects[subject].textColor} ${subjects[subject].underlineColor} border-b-2`
                  : "text-gray-700"
              }`}
              onClick={() => setSelectedSubject(subject)}
            >
              {subject}
            </h1>
          ))}
        </div>

        {/* Cards */}
        <div className="overflow-x-auto py-2 mt-2 px-1">
          <div className="flex space-x-4 w-max">
            {subjects[selectedSubject].cards.map((card, index) => (
              <div
                key={index}
                className={`h-40 w-32 rounded-xl flex flex-col items-center justify-between text-center ${
                  subjects[selectedSubject].borderColor
                } ${subjects[selectedSubject].textColor} border-[2px] p-3`}
              >
                {/* Adjusted Image Styling */}
                <img
                  src={card.image}
                  alt={card.name}
                  className="h-20 w-full object-contain rounded-md"
                />
                {/* Adjusted Text Styling */}
                <span className="text-sm font-medium mt-2">{card.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormulaCards;