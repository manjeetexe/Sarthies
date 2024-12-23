import React, { useState } from "react";

const FormulaCards = () => {
  const [selectedSubject, setSelectedSubject] = useState("Physics");

  // Define subject colors, card data, and images
  const subjects = {
    Physics: {
      color: "bg-gradient-to-r from-red-500 via-pink-500 to-red-400",
      cards: [
        { name: "Newton's Laws", image: "/images/newton.jpg" },
        { name: "Thermodynamics", image: "/images/thermo.jpg" },
        { name: "Electromagnetism", image: "/images/electro.jpg" },
      ],
    },
    Chemistry: {
      color: "bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400",
      cards: [
        { name: "Periodic Table", image: "/images/periodic.jpg" },
        { name: "Chemical Bonds", image: "/images/bonds.jpg" },
        { name: "Organic Chemistry", image: "/images/organic.jpg" },
      ],
    },
    Maths: {
      color: "bg-gradient-to-r from-green-500 via-lime-500 to-green-400",
      cards: [
        { name: "Algebra", image: "https://imgs.search.brave.com/rexMcXwVX2F5s_-I0OIn8PCZLUfXA2qPyYTFbPJD5pI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDcw/NDkzMzQxL3Bob3Rv/L21hdGgtcHJvYmxl/bXMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXpVNlpGNGZX/dGN3VHU1TW96c3lR/Y19BQUdza2tQWEh5/cnJvVTVmeGU5MVk9" },
        { name: "Calculus", image: "https://imgs.search.brave.com/AGIvwk_DRoVhH0qHYGHTf5NRvsPEK3TuhMV1SOeGjYw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzU1Lzg0Lzk5/LzM2MF9GXzU1ODQ5/OTU4X0dZRjVkQUhZ/TTFMNG1oS2Q5ekFm/OU9qcXBuS0ZqTXVw/LmpwZw" },
        { name: "Geometry", image: "/images/geometry.jpg" },
      ],
    },
  };

  return (
    <div className="w-full mt-5">
      {/* Header */}
      <div className="flex justify-between w-full px-2">
        <h1 className="text-2xl font-semibold">Formula Cards</h1>
        <h1 className="text-xl text-blue-600 font-semibold cursor-pointer">
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
                  ? "border-b-2 border-black"
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
            {subjects[selectedSubject]?.cards.map((card, index) => (
              <div
                key={index}
                className={`h-40 w-32 overflow-hidden rounded-xl flex flex-col items-center justify-between text-center shadow-lg transform hover:scale-105 transition-all ${subjects[selectedSubject].color}`}
              >
                {/* Image */}
                <img
                  src={card.image}
                  alt={card.name}
                  className="h-20 w-full object-contain object-cover rounded-md bg-white"
                />
                {/* Text */}
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