import React from "react";
import FormulaCards from "../components/FormulaCards";
import { FcQuestions } from "react-icons/fc";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  const papers = [
    {
      year: "2024 Papers",
      subjects: ["Science", "Math", "History", "Geography", "English", "Physics"],
    },
    {
      year: "2023 Papers",
      subjects: ["Science", "Math", "History", "Geography", "English", "Physics"],
    },
    {
      year: "2022 Papers",
      subjects: ["Science", "Math", "History", "Geography", "English", "Physics"],
    },
  ];

  return (
    <>
      <section className="flex flex-col gap-3 items-center mt-24 px-5 overflow-hidden">
      <div className='flex justify-between w-full  items-center'>
                <h1 className='text-2xl font-semibold flex justify-center items-center'><FcQuestions className="text-3xl"/>Question Banks</h1>
                <a className='text-blue-600 text-lg font-semibold' href="#">View all</a>
            </div>

        {/* Cards Section */}
        <div className="flex flex-col  gap-5 overflow-hidden overflow-x-auto justify-center  w-full   rounded-xl">
          {papers.map((paper, rowIndex) => (
            <div key={rowIndex}>
              
              <div className="flex  space-x-4 w-max">
                {paper.subjects.map((subject, index) => (
                  <div
                    key={index}
                    className="h-24 overflow-hidden relative w-36 border-[1px] border-black rounded-xl"
                  >
                    <h1 className="m-2">{subject}</h1>
                    <div className="absolute h-5 w-full bottom-0 flex justify-center items-center bg-red-500">
                      <h1 className="text-sm text-white">{paper.year}</h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full  flex flex-col gap-4 mt-5" >
          <div className="w-full flex  justify-between items-center rounded-xl border-[2.5px] py-2 px-3 border-orange-500  ">
            <div>
              <div className="flex items-center gap-2 ">
                <h1 className="font-semibold text-xl">Mixed Question </h1>
                <h1 className="px-2 rounded-3xl text-sm text-white bg-red-500">New</h1>
              </div>
              <h1 className="text-gray-500">Boost your Marks in any subject 🔥 </h1>
            </div>


            <IoIosArrowForward className="text-2xl"/>

          </div>
          


          <div className="w-full flex  justify-between items-center rounded-xl border-[2.5px] py-2 px-3 border-emerald-500  ">
            <div>
              <div className="flex items-center gap-2 ">
                <h1 className="font-semibold text-xl">IMP Concepts </h1>
                <h1 className="px-2 rounded-3xl text-sm text-white bg-red-500">New</h1>
              </div>
              <h1 className="text-gray-500">Learn the most important question 🔥 </h1>
            </div>


            <IoIosArrowForward className="text-2xl"/>

          </div>
        </div>

        {/* Formula Cards */}
        <FormulaCards />

        {/* Social Support */}
        <div className="border-t-2 border-gray-300 w-full mt-5 pt-3">
          <h1 className="text-xl font-medium text-gray-800">Social Support</h1>
          <p className="text-gray-600 mt-1">
            Need help? Connect with others for support and collaboration.
          </p>
        </div>

        <div className="h-20"></div>
      </section>
    </>
  );
};

export default Home;