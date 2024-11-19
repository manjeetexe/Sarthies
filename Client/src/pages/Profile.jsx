import React, { useContext } from "react";
import { ExamContext } from "./../Context/ExamContext";

const Profile = () => {
  const { examResults, totalSolvedQuestions, totalCorrectAnswers, totalScore } = useContext(ExamContext);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-300 h-48 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="absolute -bottom-16">
            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-20">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-1 text-black">Username</h1>
            <h2 className="text-black font-medium mb-2">Display Name</h2>
            <p className="text-black max-w-lg">Bio goes here. This is a sample bio text that can span multiple lines and show more personality.</p>
          </div>
          <button className="px-4 py-2 w-64 bg-purple-600 text-white rounded-full hover:opacity-90 transition">
            Edit Profile
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-7">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm text-center">
              <div className="text-2xl font-bold text-black">{totalSolvedQuestions}</div>
              <div className="text-gray-500">Total Questions Solved</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm text-center">
              <div className="text-2xl font-bold text-black">{totalCorrectAnswers}</div>
              <div className="text-gray-500">Total Correctly Solved</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm text-center">
              <div className="text-2xl font-bold text-black">
                {totalSolvedQuestions > 0 
                  ? ((totalCorrectAnswers / totalSolvedQuestions) * 100).toFixed(2) + "%" 
                  : "N/A"}
              </div>
              <div className="text-gray-500">Accuracy</div>
            </div>
          </div>

          <div className="mb-8 flex justify-center">
            <button className="bg-purple-500 py-2 px-4 text-white rounded-3xl hover:bg-purple-400 transition">Know More About Your Scores</button> 
          </div>

          {/* Other Profile Details */}
          <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
            <h1 className="text-2xl font-semibold text-black">Your Details</h1>
            <div className="text-md pl-2 font-medium text-black">
              <p>Name</p>
              <p>Email</p>
              <p>Phone Number</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
            <h1 className="text-2xl font-semibold text-black">Other Details</h1>
            <div className="text-md pl-2 font-medium text-black">
              <p>Class</p>
              <p>School Name</p>
              <p>State</p>
              <p>City</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  );
};

export default Profile;