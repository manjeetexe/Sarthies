import React, { useState, useEffect } from 'react';
import SubmitNotice from './../TestSubmit';
import { useLocation } from 'react-router-dom';
import Autosubmit from '../Warning/Autosubmit';
import TimeWarning from '../Warning/TimeWarning';
import  { forwardRef, useImperativeHandle } from 'react';

const MCQ = (props, ref) => {
  const location = useLocation();
  const { lessonData } = location.state || {};
  const questions = lessonData?.Questions || [];
  

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [examFinished, setExamFinished] = useState(false);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showSubmitNotice, setShowSubmitNotice] = useState(false);
  const [AutoSubmit, setAutoSubmit] = useState(false);
  const [TimeNotice, setTimeNotice] = useState(false);

  const [score, setScore] = useState(0);

  useImperativeHandle(ref, () => ({
    handleConfirmSubmit,
    unansweredCount,
  }));



  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      if (currentQuestion === questions.length - 1) {
        setTimeNotice(true)
        
      } else {
        setTimeNotice(true)
        
      }
    }
  }, [timeLeft, currentQuestion]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const saveAnswerAndNext = () => {
    const updatedAnswers = [...answers];

    if (selectedOption !== null) {
      updatedAnswers[currentQuestion] = {
        question: questions[currentQuestion].question,
        options: questions[currentQuestion].options,
        selectedOption,
        isCorrect: selectedOption === questions[currentQuestion].answer,
        Marks: questions[currentQuestion].Marks,
      };
    } else if (!updatedAnswers[currentQuestion]) {
      updatedAnswers[currentQuestion] = {
        question: questions[currentQuestion].question,
        options: questions[currentQuestion].options,
        selectedOption: "unattempted",
        isCorrect: false,
        Marks: questions[currentQuestion].Marks,
      };
    }

    setAnswers(updatedAnswers);
    setSelectedOption(null);

    if (currentQuestion === questions.length - 1) {
      setShowSubmitNotice(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(answers[currentQuestion + 1]?.selectedOption || null);
      
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(answers[currentQuestion + 1]?.selectedOption || null);
      
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      
      setSelectedOption(answers[currentQuestion - 1]?.selectedOption || null);
    }
  };

  const unansweredCount = answers.filter(answer => answer === null).length;

  const Check = () => {
    let totalScore = 0;
    answers.forEach((answer, index) => {
      if (answer?.isCorrect) {
        totalScore += Number(answer.Marks);
      }
    });
    return totalScore;
  };

  const handleConfirmSubmit = () => {
    const finalScore = Check();
    setScore(finalScore);
    setTimeNotice(false);
    setShowSubmitNotice(false);
    setExamFinished(true);

    const summary = questions.map((question, index) => {
      const answer = answers[index];
      return {
        questionNumber: index + 1,
        question: question.question,
        options: question.options,
        selectedOption: answer ? answer.selectedOption : "unattempted",
        isCorrect: answer ? answer.isCorrect : false,
        Marks: question.Marks,
      };
    });

    console.log("Exam Summary:", summary);
    console.log("Total Score:", finalScore);
  };

  const handleCancelSubmit = () => {
    setShowSubmitNotice(false);
  };

  const totalMarks = questions.reduce((total, question) => total + Number(question.Marks), 0);
  if (examFinished) {
    return (
      <div className="min-h-screen mt-20 flex flex-col items-center bg-gray-50 p-4">
        <h1 className="text-3xl font-bold mb-4">Exam Finished</h1>
        <p className="text-xl">Thank you for taking the exam. Your responses have been submitted.</p>
        <p className="text-xl font-bold">Your Score: {score}/{totalMarks}</p>
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
        <h2 className="text-xl font-semibold mb-3">Q{questions[currentQuestion].no}: {questions[currentQuestion].question}</h2>
        <div className="flex flex-col gap-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={`p-3 border rounded-md text-lg ${
                selectedOption === option ? "bg-blue-500 text-white" : "bg-gray-200"
              } hover:bg-blue-400 hover:text-white transition`}
            >
              {option}
            </button>
          ))}
        </div>

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
      {AutoSubmit && (
        <Autosubmit
          unansweredCount={unansweredCount}
          onConfirmSubmit={handleConfirmSubmit}
          
        />
      )}
      {TimeNotice && (
        <TimeWarning
          unansweredCount={unansweredCount}
          onConfirmSubmit={handleConfirmSubmit}
          
        />
      )}
    </div>
  );
};

export default forwardRef(MCQ);