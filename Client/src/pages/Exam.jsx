import React, { useState, useEffect } from 'react';
import MCQ from './../components/Questions/MCQ';
import SubmitNotice from './../components/TestSubmit';

const Exam = () => {
  const questions = [
    { Marks: 4, answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
    { Marks: 4, answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
    { Marks: 4, answer: "Blue", type: "MCQ", no: "3", question: "What is the color of the sky?", options: ["Blue", "Green", "Red", "Yellow"] },
    { Marks: 4, answer: "Mars", type: "MCQ", no: "4", question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"] },
    { Marks: 4, answer: "Elephant", type: "MCQ", no: "5", question: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"] },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [examFinished, setExamFinished] = useState(false);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showSubmitNotice, setShowSubmitNotice] = useState(false);
  const [score, setScore] = useState(0);

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

  const saveAnswerAndNext = () => {
    if (selectedOption !== null) {
      const updatedAnswers = [...answers];
      updatedAnswers[currentQuestion] = { question: questions[currentQuestion].question, selectedOption };
      setAnswers(updatedAnswers);
      setSelectedOption(null);
    }

    if (currentQuestion === questions.length - 1) {
      setShowSubmitNotice(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(answers[currentQuestion + 1]?.selectedOption || null);
      setTimeLeft(60);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(answers[currentQuestion + 1]?.selectedOption || null);
      setTimeLeft(60);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setTimeLeft(60);
      setSelectedOption(answers[currentQuestion - 1]?.selectedOption || null);
    }
  };

  const unansweredCount = answers.filter(answer => answer === null).length;

  const Check = () => {
    let totalScore = 0;
    answers.forEach((answer, index) => {
      if (answer?.selectedOption === questions[index].answer) {
        totalScore += Number(questions[index].Marks); // Ensure Marks is treated as a number
        console.log(`Question ${index + 1} is correct. Added ${questions[index].Marks} marks.`);
      }
    });
    return totalScore;
  };

  const handleConfirmSubmit = () => {
    const finalScore = Check();
    setScore(finalScore); // Update score state with final score
    setShowSubmitNotice(false);
    setExamFinished(true);
    console.log("Exam Summary:", answers);
    console.log("Total Score:", finalScore);
  };

  const handleCancelSubmit = () => {
    setShowSubmitNotice(false);
  };

  // Calculate total possible marks for display
  const totalMarks = questions.reduce((sum, q) => sum + Number(q.Marks), 0);

  if (examFinished) {
    return (
      <div className="min-h-screen mt-20 flex flex-col items-center bg-gray-50 p-4">
        <h1 className="text-3xl font-bold mb-4">Exam Finished</h1>
        <p className="text-xl">Thank you for taking the exam. Your responses have been submitted.</p>
        <p className="text-xl font-bold">Your Score: {score}/{totalMarks}</p> {/* Updated score display */}
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-32 flex flex-col items-center bg-gray-50 p-4">
      <div className='flex items-center justify-between w-full px-4'>
        <h1 className="text-3xl font-bold mb-6">Exam</h1>
        <div className="text-2xl font-semibold text-red-500 mb-6">Time Left: {timeLeft}s</div>
      </div>

      <div className="bg-white shadow-md rounded-lg w-full md:w-2/3 lg:w-1/2 p-6">
        <MCQ
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          no={questions[currentQuestion].no}
          selectedOption={selectedOption}
          onOptionSelect={handleOptionSelect}
        />

        <div className='flex justify-between'>
          <div className='flex gap-3'>
            <button
              onClick={nextQuestion}
              className="mt-6 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Next
            </button>
            <button
              onClick={saveAnswerAndNext}
              disabled={!selectedOption}
              className="mt-6 px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            >
              {currentQuestion === questions.length - 1 ? "Submit Test" : "Submit"}
            </button>
          </div>
          <div>
            <button
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              className="mt-6 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Previous
            </button>
          </div>
        </div>
      </div>

      {showSubmitNotice && (
        <SubmitNotice
          unansweredCount={unansweredCount}
          onConfirmSubmit={handleConfirmSubmit}
          onCancel={handleCancelSubmit}
        />
      )}
    </div>
  );
};

export default Exam;