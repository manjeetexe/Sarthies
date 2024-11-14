import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from "./../components/Data.jsx";

const Test = () => {
  const navigate = useNavigate();
  const subject = Object.keys(data); 
  

  const subjects = subject;
  subjects.forEach(subject => {
    const subjectData = data[subject]; 
  });


  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleSubjectSelect = (subject) => {
    const subjectData = data[subject]; // Get the data for the selected subject
    setSelectedSubject(subject);
    console.log(`Proceeding with the test for: ${subject}`);
    
    // Pass both the subject and its lessons data to the next page
    navigate('/lessons', { state: { subject, subjectData } });
  };

  return (
    <>
      <h1 className='px-7 my-4 mt-24 font-semibold text-2xl md:text-3xl lg:text-4xl'>Select a Subject for Test</h1>

      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-6 md:mx-12 lg:mx-20'>
        {subjects.map((sub) => (
          <div 
            key={sub} 
            className={`bg-white border-2 border-purple-300 p-5 rounded-2xl cursor-pointer 
              flex items-center text-lg md:text-xl lg:text-2xl h-24 md:h-32 lg:h-40`}
            onClick={() => handleSubjectSelect(sub)}
          >
            <h1>{sub}</h1>
          </div>
        ))}
      </section>

      {selectedSubject && (
        <h2 className='text-center mt-4 text-lg md:text-xl lg:text-2xl'>
          You are taking the test for: <strong>{selectedSubject}</strong>
        </h2>
      )}

      <div className='h-20'></div>
    </>
  );
}

export default Test;