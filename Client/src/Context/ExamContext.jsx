import React, { createContext, useState } from "react";

// Create the context
export const ExamContext = createContext();

// Context Provider Component
export const ExamProvider = ({ children }) => {
  const [examResults, setExamResults] = useState({
    correctAnswers: 0,
    solvedQuestions: 0,
    totalScore: 0,
    ExamSummary: [], // Default to an empty array for easier list operations
  });

  const [totalSolvedQuestions, setTotalSolvedQuestions] = useState(0);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  // Function to update exam results and cumulative statistics
  const updateExamResults = (newExamResults) => {
    if (!newExamResults) {
      console.error("Invalid exam results passed to updateExamResults.");
      return;
    }

    const {
      correctAnswers = 0,
      solvedQuestions = 0,
      totalScore = 0,
      ExamSummary = [],
    } = newExamResults;

    // Update the exam-specific results
    setExamResults({
      correctAnswers,
      solvedQuestions,
      totalScore,
      ExamSummary,
    });

    // Update the cumulative totals
    setTotalSolvedQuestions((prev) => prev + solvedQuestions);
    setTotalCorrectAnswers((prev) => prev + correctAnswers);
    setTotalScore((prev) => prev + totalScore);
  };

  return (
    <ExamContext.Provider
      value={{
        examResults,
        totalSolvedQuestions,
        totalCorrectAnswers,
        totalScore,
        updateExamResults,
      }}
    >
      {children || null}
    </ExamContext.Provider>
  );
};