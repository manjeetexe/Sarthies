import React from 'react';
import { ImBooks } from "react-icons/im";

const Notes = () => {
  return (
    <>
      <section className="flex  flex-col gap-6 items-center bg-gray-50 min-h-screen py-10">
        <div className="mt-14 px-5 w-full max-w-3xl">
          <div className='flex gap-2 px-2 mb-1'>
          <ImBooks className='text-5xl text-[#875ccc]'/>
          <h1 className="text-4xl  font-semibold ">Notebooks</h1>
          </div>
          

          {/* Add Your Own Notes Section */}
          <div className="flex flex-col gap-2 justify-center items-center h-44 border-dashed border-2 border-[#6c28d9a7] w-full rounded-2xl bg-[#d9c8f8a7]">
            <div className="h-20 w-20 bg-[#52259ba7] rounded-lg border-dashed border-2 border-[#6c28d9a7] "></div>
            <h1 className="text-gray-700 font-medium">Add your own notes</h1>
          </div>
        </div>

        {/* Note Placeholder Boxes */}
        <div className="w-full max-w-3xl flex flex-col gap-4 px-5">
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className="h-28 w-full  rounded-xl shadow-md border border-gray-300 hover:bg-[#e0cdff] transition-colors"
            ></div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Notes;