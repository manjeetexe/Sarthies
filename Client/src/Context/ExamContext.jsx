import React, { createContext, useState } from "react";

export const ExamContext = createContext();

export const ExamProvider = ({ children }) => {
  const [examResults, setExamResults] = useState({
    correctAnswers: 0,
    solvedQuestions: 0,
    totalScore: 0,
    ExamSummary: null,
  });

  return (
    <ExamContext.Provider value={{ examResults, setExamResults }}>
      {children}
    </ExamContext.Provider>
  );
};