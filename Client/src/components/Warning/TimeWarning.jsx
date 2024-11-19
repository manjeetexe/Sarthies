import React from "react";

const TimeOutWarning = ({ unansweredCount, onConfirmSubmit }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-600">Time's Up!</h2>
        <p className="mb-4 text-gray-700">
          The exam time has ended, and you can no longer answer questions.
        </p>
        <p className="mb-4 text-gray-700">
          You have <strong>{unansweredCount}</strong> unattempted{" "}
          {unansweredCount === 1 ? "question" : "questions"}.
        </p>
        <p className="mb-6 text-gray-600">
          Please submit the test to complete the exam process.
        </p>
        <button
          onClick={onConfirmSubmit}
          className="w-full px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-md hover:bg-red-600 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default TimeOutWarning;