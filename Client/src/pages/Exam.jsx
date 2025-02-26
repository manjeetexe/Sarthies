import React, { useState, useEffect, useRef} from 'react';
import Autosubmit from '../components/Warning/Autosubmit';
import MCQ from './../components/Questions/MCQ';
import { useLocation } from 'react-router-dom';
import Text from './../components/Questions/Text';



const Exam = () => {
  
  const [showAutosubmit, setShowAutosubmit] = useState(false);
  const mcqRef = useRef(null);
  const location = useLocation();
  const {   subject ,selectedLesson ,questions } = location.state;
  console.log(subject ,selectedLesson ,questions)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        console.log("User attempted to leave the exam page.");
        setShowAutosubmit(true);
      }
    };

    // Listen to visibility change events
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const handleConfirmAutosubmit = () => {
    if (mcqRef.current) {
      mcqRef.current.handleConfirmSubmit(); // Call MCQ's submit logic
      console.log("Unanswered Questions:", mcqRef.current.unansweredCount);
    }
    setShowAutosubmit(false);
  };

  return (
    <div className="exam-page">
      <MCQ ref={mcqRef} subject={subject} lesson={selectedLesson} questions={questions} />

      {showAutosubmit && mcqRef.current && (
        <Autosubmit
          unansweredCount={mcqRef.current.unansweredCount} // Pass unansweredCount
          onConfirmSubmit={handleConfirmAutosubmit} // Pass submit handler
        />
      )}
    </div>
  );
};

export default Exam;