import React from "react";
import FormulaCards from "../components/FormulaCards";

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
                <h1 className='text-2xl font-semibold'>Question Banks</h1>
                <a className='text-blue-600 text-lg font-semibold' href="#">View all</a>
            </div>

        {/* Cards Section */}
        <div className="flex flex-col gap-5 p-3 overflow-hidden overflow-x-auto justify-center  w-full border border-black border-dashed rounded-xl">
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

        <div className="w-full  flex flex-col gap-4 my-5" >
          <div className="w-full h-24 rounded-xl border-2 border-red-500 "></div>
          <div className="w-full h-24 rounded-xl border-2 border-yellow-500 "></div>
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