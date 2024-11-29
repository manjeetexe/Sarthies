import React, { useState } from 'react';
import Instructions from './../components/Instruction';
import { useLocation } from 'react-router-dom';
import { MdPlayLesson } from "react-icons/md";

const Lessons = () => {
  const location = useLocation();
  const { subject, subjectData } = location.state;

  const lessons = Object.keys(subjectData.lessons);

  const [selectedLesson, setSelectedLesson] = useState(null);
  const [lessonData, setLessonData] = useState(null);

  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
    setLessonData(subjectData.lessons[lesson]);
    console.log(`Proceeding with the test for: ${lesson}`);
  };

  const goBack = () => {
    setSelectedLesson(null);
    setLessonData(null);
  };

  return (
    <>
      {!selectedLesson ? (
        <>
          <h1 className="px-8 my-1 mt-24 font-bold text-xl flex items-center gap-2 text-purple-600">
          <MdPlayLesson className='text-3xl' /> Select a Lesson for the Test
          </h1>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8 py-4">
            {lessons.map((lesson) => (
              <div
                key={lesson}
                className="h-28 w-full rounded-xl shadow-lg border border-gray-300 hover:bg-gradient-to-r from-purple-400 to-indigo-400 transition-all p-5 text-xl text-gray-800 font-medium cursor-pointer flex items-center justify-center"
                onClick={() => handleLessonSelect(lesson)}
              >
                <h1 className="text-center">{lesson}</h1>
              </div>
            ))}
          </section>
        </>
      ) : (
        <Instructions selectedLesson={selectedLesson} subject={subject} lessonData={lessonData} goBack={goBack} />
      )}

      {!selectedLesson && <div className="h-20"></div>}
    </>
  );
};

export default Lessons;