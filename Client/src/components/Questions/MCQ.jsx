import React from 'react';

const MCQ = ({ question, options, no, selectedOption, onOptionSelect }) => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-3">Q{no}: {question}</h2>
      <div className="flex flex-col gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onOptionSelect(option)}
            className={`p-3 border rounded-md text-lg ${
              selectedOption === option ? "bg-blue-500 text-white" : "bg-gray-200"
            } hover:bg-blue-400 hover:text-white transition`}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};

export default MCQ;