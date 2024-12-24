import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const FormulaCards = () => {
  const [selectedSubject, setSelectedSubject] = useState("Physics");
  const navigate = useNavigate();


  // Define subject colors, card data, images, and formulas
  const subjects = {
    Physics: {
      color: "bg-gradient-to-r from-red-500 via-pink-500 to-red-400",
      cards: [
        {
          name: "Newton's Laws",
          image: "https://imgs.search.brave.com/yozrS8xfkPOPlRIvLB9sk0oJVcWOW-9FQs6HqmXBCmU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzExLzI2LzEwLzg2/LzM2MF9GXzExMjYx/MDg2MjRfMFhOcExD/S25pdEQ2bGZFU2Za/VnVtbTZGSVFrakJN/T2YuanBn",
          lessons: [
            { title: "First Law", formula: "F = ma" },
            { title: "Second Law", formula: "a = F/m" },
            { title: "Third Law", formula: "F1 = -F2" },
          ],
        },
        {
          name: "Thermodynamics",
          image: "https://cdn1.byjus.com/wp-content/uploads/2018/11/chemistry/2015/12/29114819/Thermodynamics-2.png",
          lessons: [
            { title: "First Law of Thermodynamics", formula: "ΔU = Q - W" },
            { title: "Entropy", formula: "S = k * log(W)" },
          ],
        },
        {
          name: "Electromagnetism",
          image: "https://cdn.mos.cms.futurecdn.net/xSoberZUiEamaySkdwSV3U-1200-80.jpg.webp",
          lessons: [
            { title: "Coulomb's Law", formula: "F = k * (q1 * q2) / r^2" },
            { title: "Faraday's Law", formula: "E = -dΦ/dt" },
          ],
        },
      ],
    },
    // Add similar structure for Chemistry and Maths
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
                onClick={() =>
                  navigate(`/cardsformula/${selectedSubject}`, {
                    state: { 
                      subject: selectedSubject, 
                      cardName: card.name,
                      cardImage: card.image,
                      lessons: card.lessons,
                    },
                  })
                }
                className={`h-40 w-32 overflow-hidden rounded-xl flex flex-col items-center justify-between text-center shadow-lg transform hover:scale-105 transition-all ${subjects[selectedSubject].color}`}
              >
                {/* Image */}
                <img
                  src={card.image}
                  alt={card.name}
                  className="h-20 w-full object-cover rounded-md bg-white"
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