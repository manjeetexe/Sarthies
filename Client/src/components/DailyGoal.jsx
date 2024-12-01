import React, { useState, useEffect } from "react";
import { GoGoal } from "react-icons/go";

function DailyGoal({ totalCorrectAnswers }) {
  const [editMode, setEditMode] = useState(false);
  const [dailyGoal, setDailyGoal] = useState(60); // Default is 60 questions
  const [tempGoal, setTempGoal] = useState(dailyGoal);
  const [isCustomMode, setIsCustomMode] = useState(false);
  const [streak, setStreak] = useState(0); // Streak count
  const [goalAchieved, setGoalAchieved] = useState(false);
  const [editDisabled, setEditDisabled] = useState(false); // Edit button state

  const completed = totalCorrectAnswers; // Use totalCorrectAnswers as the completed count
  const progressPercentage = ((completed / dailyGoal) * 100).toFixed(1); // Calculate progress %

  useEffect(() => {
    // Check if the day has passed and reset progress at midnight
    const checkMidnight = setInterval(() => {
      const currentHour = new Date().getHours();
      const currentMinute = new Date().getMinutes();
      const currentSecond = new Date().getSeconds();

      if (currentHour === 0 && currentMinute === 0 && currentSecond === 0) {
        resetDailyProgress();
      }
    }, 1000); // Check every second

    return () => clearInterval(checkMidnight); // Cleanup interval on unmount
  }, [completed, dailyGoal, streak]);

  useEffect(() => {
    // Check if the goal is achieved whenever the completed count changes
    if (completed >= dailyGoal) {
      setGoalAchieved(true);
      setEditDisabled(true);
    } else {
      setGoalAchieved(false);
      setEditDisabled(false);
    }
  }, [completed, dailyGoal]);

  const resetDailyProgress = () => {
    if (completed >= dailyGoal) {
      setStreak(streak + 1); // Increment streak if goal was completed
    } else {
      setStreak(0); // Reset streak if goal wasn't completed
    }

    setGoalAchieved(false); // Reset achievement status
    setEditDisabled(false); // Re-enable the Edit button for the new day
  };

  const saveGoal = () => {
    setDailyGoal(tempGoal);
    setEditMode(false);
    setIsCustomMode(false);
  };

  return (
    <div className="bg-white p-4 border-2 border-gray-300 rounded-lg shadow-sm ">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold flex items-center gap-3 text-black">
          <GoGoal /> My Daily Goals
        </h1>
        {!editMode && (
          <h1
            className={`text-blue-500 text-md border-b-2 border-blue-500 cursor-pointer ${
              editDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => !editDisabled && setEditMode(true)}
          >
            Edit
          </h1>
        )}
      </div>

      {editMode ? (
        <div>
          <h3 className="text-lg mt-3 mb-2">How many questions would you like to practice daily?</h3>
          <div className="flex gap-3 mb-2">
            {[10, 15, 20].map((num) => (
              <button
                key={num}
                onClick={() => {
                  setTempGoal(num);
                  setIsCustomMode(false);
                }}
                className={`px-4 py-2 rounded ${
                  tempGoal === num ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
                }`}
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => setIsCustomMode(true)}
              className={`px-4 py-2 rounded ${
                isCustomMode ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
              }`}
            >
              Custom
            </button>
          </div>
          {isCustomMode && (
            <input
              type="number"
              value={tempGoal || ""}
              onChange={(e) => setTempGoal(Number(e.target.value))}
              placeholder="Enter custom goal"
              className="px-4 py-2 border rounded mb-3 w-full"
            />
          )}
          <div className="flex gap-3">
            <button onClick={saveGoal} className="px-4 py-2 bg-blue-500 text-white rounded">
              Save Goal
            </button>
            <button onClick={() => setEditMode(false)} className="px-4 py-2 bg-gray-200 text-black rounded">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="mt-2">
            <h1 className="text-sm text-gray-500">Let's start with the first question for the day!</h1>
          </div>
          <div className="mt-3">
            <h2 className="text-lg">
              Goal: <strong>{dailyGoal} Questions</strong>
            </h2>
            <h2 className="text-lg">
              Completed: <strong>{completed} / {dailyGoal}</strong>
            </h2>
            <h2 className="text-lg text-green-600">
              Streak: <strong>{streak} Days</strong>
            </h2>
          </div>
          <div className="w-full bg-gray-200 h-3 rounded-full mt-3">
            <div
              className="bg-blue-500 h-3 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Progress: {completed}/{dailyGoal} questions ({progressPercentage}%)
          </p>
          {goalAchieved && (
            <div className="mt-3 text-center text-green-600 font-semibold">
              🎉 Congratulations! You've achieved your goal today! 🎉
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DailyGoal;