import React, { useState, useEffect } from 'react';
import MCQ from './../components/Questions/MCQ';
import SubmitNotice from './../components/TestSubmit';

const Exam = () => {
  const questions = [
    { no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
    { no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
    { no: "3", question: "What is the color of the sky?", options: ["Blue", "Green", "Red", "Yellow"] },
    { no: "4", question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"] },
    { no: "5", question: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"] },
    { no: "6", question: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare", "J.K. Rowling", "Mark Twain", "Jane Austen"] },
    { no: "7", question: "What is the boiling point of water?", options: ["50°C", "100°C", "150°C", "200°C"] },
    { no: "8", question: "Which element has the chemical symbol 'O'?", options: ["Oxygen", "Gold", "Hydrogen", "Osmium"] },
    { no: "9", question: "In which year did World War II end?", options: ["1942", "1945", "1950", "1960"] },
    { no: "10", question: "What is the square root of 64?", options: ["6", "7", "8", "9"] },
    { no: "11", question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"] },
    { no: "12", question: "What is the primary language spoken in Brazil?", options: ["Spanish", "Portuguese", "French", "English"] },
    { no: "13", question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"] },
    { no: "14", question: "What is the longest river in the world?", options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"] },
    { no: "15", question: "How many continents are there?", options: ["5", "6", "7", "8"] },
];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [examFinished, setExamFinished] = useState(false);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showSubmitNotice, setShowSubmitNotice] = useState(false);

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
    // Save the answer if there’s a selected option
    if (selectedOption !== null) {
      const updatedAnswers = [...answers];
      updatedAnswers[currentQuestion] = { question: questions[currentQuestion].question, selectedOption };
      setAnswers(updatedAnswers);
      setSelectedOption(null); // Clear selected option for the next question
    }
  
    // Check if this is the last question
    if (currentQuestion === questions.length - 1) {
      setShowSubmitNotice(true); // Show submit notice on the last question
    } else {
      // Move to the next question
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(answers[currentQuestion + 1]?.selectedOption || null); // Restore any saved answer for the next question
      setTimeLeft(60); // Reset the timer for the next question if needed
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

  const handleConfirmSubmit = () => {
    setShowSubmitNotice(false);
    setExamFinished(true);
    console.log("Exam Summary:", answers);
  };

  const handleCancelSubmit = () => {
    setShowSubmitNotice(false);
  };

  if (examFinished) {
    return (
      <div className="min-h-screen mt-20 flex flex-col items-center bg-gray-50 p-4">
        <h1 className="text-3xl font-bold mb-4">Exam Finished</h1>
        <p className="text-xl">Thank you for taking the exam. Your responses have been submitted.</p>
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