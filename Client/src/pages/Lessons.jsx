import React, { useState } from 'react';
import Instructions from './../components/Instruction';
import { useLocation } from 'react-router-dom'; 

const Lessons = () => {
  const location = useLocation();
  const { subject, subjectData } = location.state;

  const lessons = Object.keys(subjectData.lessons);

  const [selectedLesson, setSelectedLesson] = useState(null);
  const [lessonData, setLessonData] = useState(null); // State to hold the selected lesson's data

  // Function to handle lesson selection
  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
    setLessonData(subjectData.lessons[lesson]); // Set the specific lesson's data
    console.log(`Proceeding with the test for: ${lesson}`);
  };

  // Function to go back to lesson selection
  const goBack = () => {
    setSelectedLesson(null);
    setLessonData(null); // Clear the lesson data when going back
  };

  return (
    <>
      {!selectedLesson ? (
        <>
          <h1 className='px-7 my-4 mt-24 font-semibold text-2xl md:text-3xl lg:text-4xl'>
            Select a Lesson for Test
          </h1>
          <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-6 md:mx-12 lg:mx-20'>
            {lessons.map((lesson) => (
              <div 
                key={lesson} 
                className="h-28 w-full  rounded-xl shadow-md border border-gray-300 hover:bg-[#e0cdff] transition-colors p-5 text-xl" 
                onClick={() => handleLessonSelect(lesson)}
              >
                <h1>{lesson}</h1>
              </div>
            ))}
          </section>
        </>
      ) : (
        // Pass the selected lesson name and data to Instructions
        <Instructions selectedLesson={selectedLesson} lessonData={lessonData} goBack={goBack} />
      )}
      <div className='h-20'></div>
    </>
  );
}

export default Lessons;