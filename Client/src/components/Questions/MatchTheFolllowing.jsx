import React, { useState, useEffect } from 'react';

const MatchTheFollowing = () => {
  // Hardcoded data for matching questions
  const questions = [
    {
      left: "Apple",
      right: "Fruit"
    },
    {
      left: "Carrot",
      right: "Vegetable"
    },
    {
      left: "Elephant",
      right: "Animal"
    },
    {
      left: "Rose",
      right: "Flower"
    }
  ];

  const shuffledRightOptions = [...questions.map(q => q.right)].sort(() => Math.random() - 0.5);

  const [matches, setMatches] = useState({});
  const [timeLeft, setTimeLeft] = useState(180);
  const [examFinished, setExamFinished] = useState(false);
  const [showSubmitNotice, setShowSubmitNotice] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      handleSubmit();
    }
  }, [timeLeft]);

  const handleMatch = (leftItem, selectedRight) => {
    setMatches(prev => ({ ...prev, [leftItem]: selectedRight }));
  };

  const handleSubmit = () => {
    setShowSubmitNotice(false);
    setExamFinished(true);
    const summary = questions.map((question, index) => ({
      leftItem: question.left,
      selectedMatch: matches[question.left] || "No Match",
      isCorrect: matches[question.left] === question.right
    }));
    console.log("Exam Summary:", summary);
  };

  const handleConfirmSubmit = () => {
    handleSubmit();
  };

  const handleCancelSubmit = () => {
    setShowSubmitNotice(false);
  };

  const previousQuestion = () => {
    setTimeLeft(180);
    // Optionally implement navigation if multiple pages of match questions exist
  };

  return (
    <div className="min-h-screen mt-20 flex flex-col items-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6">Match the Following</h1>
      <div className="flex items-center justify-between w-full px-4 mb-6">
        <div className="text-2xl font-semibold text-red-500">Time Left: {timeLeft}s</div>
        {examFinished && <h2 className="text-2xl font-semibold text-green-500">Exam Finished!</h2>}
      </div>

      <div className="bg-white shadow-lg rounded-lg w-full md:w-3/4 lg:w-1/2 p-6 grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Left Side</h2>
          <ul>
            {questions.map((question, index) => (
              <li key={index} className="mb-4">
                <span className="block bg-blue-100 text-blue-800 rounded px-3 py-2 text-lg font-medium">
                  {question.left}
                </span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Match Options</h2>
          <ul>
            {shuffledRightOptions.map((option, index) => (
              <li key={index} className="mb-4">
                <button
                  onClick={() => handleMatch(questions[index]?.left, option)}
                  className={`block w-full bg-gray-200 text-gray-800 rounded px-3 py-2 text-lg font-medium transition ${
                    matches[questions[index]?.left] === option ? "bg-blue-500 text-white" : ""
                  }`}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-between w-full mt-6 px-4">
        <button
          onClick={previousQuestion}
          className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Previous
        </button>
        <button
          onClick={() => setShowSubmitNotice(true)}
          className="px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
        >
          Submit Test
        </button>
      </div>

      {showSubmitNotice && (
        <div className="bg-gray-100 p-4 mt-4 rounded shadow-lg">
          <p className="text-xl mb-4">Are you sure you want to submit?</p>
          <div className="flex gap-4">
            <button
              onClick={handleConfirmSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Confirm
            </button>
            <button
              onClick={handleCancelSubmit}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchTheFollowing;