import React from 'react';

const SubmitNotice = ({ unansweredCount, onConfirmSubmit, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Confirm Submission</h2>
        <p className="mb-4">
          You have {unansweredCount} unanswered {unansweredCount === 1 ? "question" : "questions"}.
        </p>
        <p className="mb-6">Do you want to submit the test?</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onConfirmSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            Submit
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitNotice;