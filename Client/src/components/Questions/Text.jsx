import React, { useState } from 'react';

const Text = ({ question, onAnswerChange }) => {
  const [answer, setAnswer] = useState('');

  const handleChange = (e) => {
    setAnswer(e.target.value);
    onAnswerChange(e.target.value);
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-3">{question}</h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={answer}
          onChange={handleChange}
          onPaste={(e) => e.preventDefault()} // Prevents pasting
          className="p-3 border rounded-md text-lg bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="Type your answer here"
        />
      </div>
    </>
  );
};

export default Text;