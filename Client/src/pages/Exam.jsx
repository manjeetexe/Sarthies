import React, { useState, useEffect } from 'react';
import MCQ from './../components/Questions/MCQ'
import Text from './../components/Questions/Text'

const Exam = () => {
  const questions = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
    { question: "What is the color of the sky?", options: ["Blue", "Green", "Red", "Yellow"] },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [examFinished, setExamFinished] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      nextQuestion();
    }
  }, [timeLeft]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const nextQuestion = () => {
    if (selectedOption) {
      setAnswers((prevAnswers) => [
        ...prevAnswers,
        { question: questions[currentQuestion].question, selectedOption },
      ]);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setTimeLeft(60);
    } else {
      setExamFinished(true);
    }
  };

  const handleAnswerChange = (newAnswer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = newAnswer;
    setAnswers(updatedAnswers);
  };

  // Log answers only once when exam is finished
  useEffect(() => {
    if (examFinished) {
      console.log("Exam Summary:", answers);
    }
  }, [examFinished, answers]);

  if (examFinished) {
    return (
      <div className="min-h-screen mt-20 flex flex-col items-center bg-gray-50 p-4">
        <h1 className="text-3xl font-bold mb-4">Exam Finished</h1>
        <p className="text-xl">Thank you for taking the exam. Your responses have been submitted.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-4">Exam</h1>
      <div className="text-2xl font-semibold text-red-500 mb-6">Time Left: {timeLeft}s</div>


      <div className="bg-white shadow-md rounded-lg w-full md:w-2/3 lg:w-1/2 p-6">
      {/* <MCQ
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        selectedOption={selectedOption}
        onOptionSelect={handleOptionSelect}
      /> */}
      <Text 
          question="What is the name of the world's largest lake?" 
          onAnswerChange={(answer) => console.log(answer)} 
        />
        <button
          onClick={nextQuestion}
          disabled={!selectedOption}
          className="mt-6 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Exam;