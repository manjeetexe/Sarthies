import React, { useContext ,useState } from "react";
import { ExamContext } from "./../Context/ExamContext";
import { useAuth } from './../Context/Authcontext';
import { MdOutlineFileUpload } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import DailyGoal from "./../components/DailyGoal"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { FaMobileScreen } from "react-icons/fa6";
import LogoutButton from "../components/Logout";
import { Link } from "react-router-dom";


const Profile = () => {
  const { examResults, totalSolvedQuestions, totalCorrectAnswers, totalScore } = useContext(ExamContext);
  const { user } = useAuth();
  const navigate = useNavigate();


  const handleEditProfile = () => {
    navigate("/EditProfile", { state: { user } });
  };

  const handleClick = () => {
    navigate('/examdetailanalize');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Banner Section */}
      <div className="bg-purple-300 h-44 lg:h-72 mt-20 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="absolute inset-0">
            <div className="relative w-full h-full">
              <img
                src={user.bannerImage}
                alt="Banner"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Profile Picture Section */}
      <div className="absolute left-[20%] top-[24%] lg:top-[37%] lg:left-[23%] transform -translate-x-1/2">
        <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full border-4 border-white overflow-hidden bg-white">
          <img
            src={user.profilePicture } // Use placeholder if no profile image
            alt="Profile"
            className="w-full h-full object-cover" // Ensure it covers the div without distortion
          />
        </div>
      </div>

      {/* Profile Information */}
      <div className="max-w-4xl mx-auto px-4 lg:mt-10 pt-20">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-1 text-black">{user.name}</h1>
            <p className="text-black max-w-lg">{user.bio || "Bio goes here."}</p>
          </div>
          <button
            className="px-4 py-2 bg-purple-600 text-sm text-white rounded-full hover:opacity-90 transition"
            onClick={handleEditProfile}
          >
            Edit Profile
          </button>
        </div>


        {/* Stats */}
        <div className="flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out text-center">
            <div className="text-xl font-bold text-black">{totalSolvedQuestions}</div>
            <div className="text-gray-500">Total Questions Solved</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out text-center">
            <div className="text-xl font-bold text-black">{totalCorrectAnswers}</div>
            <div className="text-gray-500">Total Correctly Solved</div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out text-center">
            <div className="text-xl font-bold text-black">
              {totalSolvedQuestions > 0
                ? ((totalCorrectAnswers / totalSolvedQuestions) * 100).toFixed(2) + "%"
                : "N/A"}
            </div>
            <div className="text-gray-500">Accuracy</div>
          </div>
        </div>

        <div className="mb-3 flex justify-center">
          <button
            onClick={handleClick}
            className="bg-purple-500 py-2 px-6 text-white rounded-lg shadow-lg hover:bg-purple-400 hover:shadow-2xl transition-all duration-300 ease-in-out">
            Know More About Your Scores
          </button>
        </div>

          {/* Other Profile Details */}
          <DailyGoal totalCorrectAnswers={totalCorrectAnswers} />
         

          <div className="bg-white p-4 rounded-lg border-2 border-gray-300 shadow-sm ">
            <h1 className="text-2xl font-semibold text-black">Your Details</h1>
            <div className="text-md pl-2 font-medium text-black">
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Phone Number: {user.phoneNumber || "Not Provided"}</p>
            </div>
          </div>

          <Link to="/screen-time">
            <div className="border-2 flex h-14 items-center justify-between px-2 rounded-lg border-gray-300 cursor-pointer hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <FaMobileScreen className="text-2xl" />
                <h1>Screen time</h1>
              </div>
              <HiDotsVertical className="text-xl" />
            </div>
          </Link>

          <Link to="/DisplayPdf" className="w-full">
            <div className="border-2 flex h-14 items-center justify-between p-2 rounded-lg border-gray-300 cursor-pointer">
              <div className="flex items-center gap-3">
                <MdOutlineFileUpload className="text-2xl" />
                <h1>Uploaded Notes</h1>
              </div>
              <HiDotsVertical className="text-xl" />
            </div>
          </Link>

         
          <LogoutButton />
          
        </div>
      </div>
      <div className="h-24"></div>
    </div>
  );
};

export default Profile;