import React from 'react';
import { ImBooks } from "react-icons/im";
import { FaPlus } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";

const Notes = () => {


  const subjects = [
    { name: "Physics", lessons: 6, color: "bg-red-100 text-red-700 hover:bg-red-200" },
    { name: "Chemistry", lessons: 8, color: "bg-blue-100 text-blue-700 hover:bg-blue-200" },
    { name: "Maths", lessons: 10, color: "bg-green-100 text-green-700 hover:bg-green-200" },
    { name: "Biology", lessons: 5, color: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200" },
  ];


  return (
    <>
      <section className="flex  flex-col gap-6 items-center bg-gray-50 min-h-screen py-10">
        <div className="mt-14 px-5 w-full max-w-3xl">
          <div className='flex gap-2 px-2 mb-1'>
            <ImBooks className='text-5xl text-[#875ccc]' />
            <h1 className="text-4xl  font-semibold ">Notebooks</h1>
          </div>

          {/* Add Your Own Notes Section */}
          <Link to="/uploadpdf"> {/* Redirect to /uploadpdf */}
            <div className="flex flex-col gap-2 justify-center items-center h-44 border-dashed border-2 border-[#6c28d9a7] w-full rounded-2xl bg-[#d9c8f8a7] cursor-pointer">
              <div className="h-20 w-20 bg-[#52259ba7] rounded-lg border-dashed border-2 flex justify-center items-center border-[#6c28d9a7] ">
                <FaPlus className='text-4xl text-[#4d2195] ' />
              </div>
              <h1 className="text-gray-700 font-medium">Add your own notes</h1>
            </div>
          </Link>
        </div>

        {/* Note Placeholder Boxes */}
        <div className="w-full max-w-3xl flex flex-col gap-4 px-5">
      {subjects.map((subject, index) => (
        <div
          key={index}
          className={`h-20 w-full flex justify-between items-center px-3 rounded-xl shadow-md border border-gray-300 transition-colors ${subject.color}`}
        >
          <div className="flex items-center gap-3">
            <FaBook className="text-4xl" />
            <div>
              <h1 className="text-lg font-semibold">{subject.name}</h1>
              <p>{subject.lessons} Lessons</p>
            </div>
          </div>
          <HiDotsVertical className="text-3xl" />
        </div>
      ))}
    </div>
    <div className='h-12'></div>
      </section>
    </>
  );
};

export default Notes;