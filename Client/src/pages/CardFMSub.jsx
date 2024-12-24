import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CardFMSub = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state || {};
  const { subject = "Unknown", cardName = "Unknown Card", cardImage, lessons = [] } = state;

  // Set dynamic page title
  useEffect(() => {
    document.title = `${cardName} - Formulas`;
  }, [cardName]);

  return (
    <div className="mt-20 p-5">
      
      <h1 className="text-3xl font-bold">{cardName}</h1>
      <h2 className="text-lg text-gray-500">Subject: {subject}</h2>
      {cardImage && (
        <img
          src={cardImage}
          alt={cardName}
          className="h-60 w-full object-cover rounded-md my-4"
        />
      )}
      <div className="mt-5">
        <h3 className="text-xl font-semibold">{cardName}</h3>
        {lessons.length > 0 ? (
          <ul className="list-disc ml-5 mt-2 space-y-2">
            {lessons.map((lesson, index) => (
              <li
                key={index}
                className="text-lg hover:text-blue-600 transition-all"
              >
                <strong>{lesson.title}:</strong> {lesson.formula}
              </li>
            ))}
          </ul>
        ) : (
          <p>No lessons or formulas available.</p>
        )}
      </div>
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-500 mt-4  text-white px-4 w-full py-2 rounded hover:bg-blue-600 mb-4"
      >
        Go Back
      </button>
    </div>
  );
};

export default CardFMSub;