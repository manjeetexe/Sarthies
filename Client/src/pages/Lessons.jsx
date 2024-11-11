import React, { useState } from 'react';
import Instructions from './../components/Instruction'; // Import your Instructions component

const Lessons = () => {
  // List of lessons
  const subjects = [
    'lesson1', 'lesson2', 'lesson3',
    'lesson4', 'lesson5', 'lesson6',
    'lesson7', 'lesson8', 'lesson9'
  ];

  // State to keep track of the selected lesson
  const [selectedLesson, setSelectedLesson] = useState(null);

  // Function to handle lesson selection
  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
    console.log(`Proceeding with the test for: ${lesson}`);
  };

  // Function to go back to lesson selection
  const goBack = () => {
    setSelectedLesson(null);
  };

  return (
    <>
      {!selectedLesson ? (
        <>
          <h1 className='px-7 my-4 mt-24 font-semibold text-2xl md:text-3xl lg:text-4xl'>
            Select a Lesson for Test
          </h1>
          <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-6 md:mx-12 lg:mx-20'>
            {subjects.map((lesson) => (
              <div 
                key={lesson} 
                className={`border-2  border-gray-400 p-5 rounded-md cursor-pointer 
                  flex items-center text-lg md:text-xl lg:text-2xl h-24 md:h-32 lg:h-40`}
                onClick={() => handleLessonSelect(lesson)}
              >
                <h1>{lesson}</h1>
              </div>
            ))}
          </section>
        </>
      ) : (
        <Instructions selectedLesson={selectedLesson} goBack={goBack} />
      )}
      <div className='h-20'></div>
    </>
  );
}

export default Lessons;