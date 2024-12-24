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
    Chemistry: {
      color: "bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400",
      cards: [
        {
          name: "Periodic Table",
          image: "https://imgs.search.brave.com/Ib_CtuZz417pRP9mI6CTWCFgT0E7zk4FkHTlwPxMJ9s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTAz/Mzc5OTIvcGhvdG8v/cGVyaW9kaWMtdGFi/bGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUtiLWh2N2ts/RlFrYjVDQWZUT0tw/bXpMUDkyVnZTSEFp/UW9IZDdDOXlidEk9",
          lessons: [
            { title: "Group 1 Elements", formula: "Li, Na, K, Rb, Cs, Fr" },
            { title: "Periodic Trends", formula: "Electronegativity, Ionization Energy" },
          ],
        },
        {
          name: "Chemical Bonds",
          image: "https://imgs.search.brave.com/Yke8AgTB_U2P4KHxg8NGjkDMV0cGY78l1zVUf-4GbJU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI4MDcx/NDYuanBn",
          lessons: [
            { title: "Ionic Bonds", formula: "NaCl, KBr" },
            { title: "Covalent Bonds", formula: "H2O, CH4" },
          ],
        },
        {
          name: "Organic Chemistry",
          image: "https://imgs.search.brave.com/ZYVq1SDt-n7OhFzOiUXGSVM_NYSreuVtbv2gI-_7JWg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9l/L2U0LzVhbHBoYS1E/aWh5ZHJvcHJvZ2Vz/dGVyb25lXzNEX2Jh/bGwucG5n",
          lessons: [
            { title: "Alkanes", formula: "CnH2n+2" },
            { title: "Alkenes", formula: "CnH2n" },
          ],
        },
      ],
    },
    Maths: {
      color: "bg-gradient-to-r from-green-500 via-lime-500 to-green-400",
      cards: [
        {
          name: "Algebra",
          image: "https://imgs.search.brave.com/rexMcXwVX2F5s_-I0OIn8PCZLUfXA2qPyYTFbPJD5pI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDcw/NDkzMzQxL3Bob3Rv/L21hdGgtcHJvYmxl/bXMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXpVNlpGNGZX/dGN3VHU1TW96c3lR/Y19BQUdza2tQWEh5/cnJvVTVmeGU5MVk9",
          lessons: [
            { title: "Quadratic Equation", formula: "ax^2 + bx + c = 0" },
            { title: "Linear Equations", formula: "y = mx + c" },
          ],
        },
        {
          name: "Calculus",
          image: "https://imgs.search.brave.com/AGIvwk_DRoVhH0qHYGHTf5NRvsPEK3TuhMV1SOeGjYw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzU1Lzg0Lzk5/LzM2MF9GXzU1ODQ5/OTU4X0dZRjVkQUhZ/TTFMNG1oS2Q5ekFm/OU9qcXBuS0ZqTXVw/LmpwZw",
          lessons: [
            { title: "Derivative", formula: "dy/dx = f'(x)" },
            { title: "Integral", formula: "∫f(x)dx" },
          ],
        },
        {
          name: "Geometry",
          image: "https://imgs.search.brave.com/BXQJR5SZSZYTKe-Zu7r-p8J3kgAP33y1T-Yv6CnbzMc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk1/NTg0NjM1L3Bob3Rv/L21hdGhlbWF0aWNz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1ud3dxLU1RWksx/YU9HdlRCR3NPN0Js/cWhtUzFsQ3hmbGdU/dDkwUU9qZ0dvPQ",
          lessons: [
            { title: "Pythagorean Theorem", formula: "a^2 + b^2 = c^2" },
            { title: "Circle Area", formula: "πr^2" },
          ],
        },
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