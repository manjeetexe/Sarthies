import React, { useState, useEffect } from 'react';
import SubmitNotice from './../TestSubmit';


const WrittenExam = () => {
  const questions = [
    { no: 1, question: "Explain photosynthesis.", Marks: 5 },
    { no: 2, question: "Describe the water cycle.", Marks: 5 },
    { no: 3, question: "What is the importance of biodiversity?", Marks: 5 }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [typedAnswer, setTypedAnswer] = useState("");
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
      saveAnswerAndNext();
    }
  }, [timeLeft]);

  useEffect(() => {
    const savedAnswer = answers[currentQuestion];
    setTypedAnswer(savedAnswer ? savedAnswer.typedAnswer : "");
  }, [currentQuestion]);

  const handleInputChange = (e) => {
    setTypedAnswer(e.target.value);
  };

  const saveAnswer = () => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = {
      question: questions[currentQuestion].question,
      typedAnswer,
      Marks: questions[currentQuestion].Marks,
    };
    setAnswers(updatedAnswers);
  };

  const handleCopy = (e) => {
    e.preventDefault();
  };

  const handlePaste = (e) => {
    e.preventDefault();
  };

  const handleCut = (e) => {
    e.preventDefault();
  };

  const saveAnswerAndNext = () => {
    saveAnswer();
    if (currentQuestion === questions.length - 1) {
      setShowSubmitNotice(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(60);
    }
  };

  const saveAnswerAndPrevious = () => {
    saveAnswer();
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setTimeLeft(60);
    }
  };

  const handleConfirmSubmit = () => {
    setShowSubmitNotice(false);
    setExamFinished(true);

    const summary = questions.map((question, index) => ({
      questionNumber: index + 1,
      question: question.question,
      typedAnswer: answers[index] ? answers[index].typedAnswer : "unattempted",
      Marks: question.Marks,
    }));

    console.log("Exam Summary:", summary);
  };

  const handleCancelSubmit = () => {
    setShowSubmitNotice(false);
  };

  const handleKeyDown = (e) => {
    if (e.ctrlKey && (e.key === "v" || e.key === "c")) {
      e.preventDefault();
    }
  };

  if (examFinished) {
    return (
      <div className="min-h-screen mt-20 flex flex-col items-center bg-gray-50 p-4">
        <h1 className="text-3xl font-bold mb-4">Exam Finished</h1>
        <p className="text-xl">Thank you for taking the exam. Your responses have been submitted.</p>
        <p className="text-xl font-bold">Your Score: {score}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-32 flex flex-col items-center bg-gray-50 p-4">
      <div className='flex items-center justify-between w-full px-4'>
        <h1 className="text-3xl font-bold mb-6">Written Exam</h1>
        <div className="text-2xl font-semibold text-red-500 mb-6">Time Left: {timeLeft}s</div>
      </div>

      <div className="bg-white shadow-md rounded-lg w-full md:w-2/3 lg:w-1/2 p-6">
        <h2 className="text-xl font-semibold mb-3">Q{questions[currentQuestion].no}: {questions[currentQuestion].question}</h2>

        <textarea type='text'
          onCopy={handleCopy}
          onPaste={handlePaste}
          onCut={handleCut}
          value={typedAnswer}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type your answer here..."
          className=" w-full p-4 border rounded-lg mb-4"
          rows="5"
        />

        <div className='flex justify-between'>
          <button
            onClick={saveAnswerAndPrevious}
            disabled={currentQuestion === 0}
            className={`mt-6 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition ${currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Previous Question
          </button>

          <button
            onClick={saveAnswerAndNext}
            className="mt-6 px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            {currentQuestion === questions.length - 1 ? "Submit Test" : "Next Question"}
          </button>
        </div>
      </div>

      {showSubmitNotice && (
        <SubmitNotice
          unansweredCount={answers.filter(answer => answer === null).length}
          onConfirmSubmit={handleConfirmSubmit}
          onCancel={handleCancelSubmit}
        />
      )}
    </div>
  );
};

export default WrittenExam;