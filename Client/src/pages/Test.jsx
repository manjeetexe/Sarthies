import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getData from "./../components/Data.jsx";
import { IoIosPaper } from "react-icons/io";
import { useAuth } from '../Context/Authcontext.jsx';

const Test = () => {
  const navigate = useNavigate();
  const { user } = useAuth(); // Get the user from the Auth context

  // Fetch data based on the user's class
  const data = getData(user);
  console.log(data);

  // Extract subjects
  const subjects = Object.keys(data);

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
      <h1 className="px-7 my-2 mt-24 font-bold text-xl flex items-center gap-3 text-purple-600">
        <IoIosPaper className="text-3xl" />
        Select a Subject for the Test
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8 py-4">
        {subjects.map((sub) => (
          <div
            key={sub}
            className="h-28 w-full rounded-xl shadow-lg border border-gray-300 hover:bg-gradient-to-r from-purple-400 to-indigo-400 transition-all p-5 text-xl text-gray-800 font-medium cursor-pointer flex items-center justify-center"
            onClick={() => handleSubjectSelect(sub)}
          >
            <h1 className="text-center">{sub}</h1>
          </div>
        ))}
      </section>

      {selectedSubject && (
        <h2 className="text-center mt-4 text-lg md:text-xl lg:text-2xl">
          You are taking the test for: <strong>{selectedSubject}</strong>
        </h2>
      )}

      <div className="h-20"></div>
    </>
  );
};

export default Test;