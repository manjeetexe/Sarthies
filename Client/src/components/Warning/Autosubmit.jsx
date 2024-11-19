import React from "react";

const AutosubmitDueToLeaving = ({ unansweredCount, onConfirmSubmit }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-600">Warning</h2>
        <p className="mb-4 text-gray-700">
          Because you left the exam, your test has been automatically submitted.
        </p>
        <p className="mb-4">
          You had <strong>{unansweredCount}</strong> unanswered{" "}
          {unansweredCount === 1 ? "question" : "questions"} remaining.
        </p>
        <button
          onClick={onConfirmSubmit}
          className="mt-4 w-full px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-md hover:bg-red-600 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AutosubmitDueToLeaving;
