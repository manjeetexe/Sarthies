import React from "react";

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
        <div className="flex flex-col gap-5 overflow-hidden overflow-x-auto justify-center p-3 w-full border border-black border-dashed rounded-xl">
          {papers.map((paper, rowIndex) => (
            <div key={rowIndex}>
              
              <div className="flex space-x-4 w-max">
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

        {/* Formula Cards */}
        <div className="w-full mt-5">
          <div className="flex justify-between w-full px-2">
            <h1 className="text-2xl font-semibold">Formula Cards</h1>
            <h1 className="text-xl text-blue-500 font-semibold">View all</h1>
          </div>
          <div className="px-2 mt-3">
            <div className="flex space-x-6 text-xl font-medium">
              <h1 className="border-b-2 border-red-400">Physics</h1>
              <h1>Chemistry</h1>
              <h1>Maths</h1>
            </div>
            <div className="overflow-x-auto py-2 mt-2 px-1">
              <div className="flex space-x-4 w-max">
                {Array(6) // Replace 6 with the number of cards
                  .fill()
                  .map((_, index) => (
                    <div
                      key={index}
                      className="h-40 w-28 border-[1px] border-black rounded-xl"
                    ></div>
                  ))}
              </div>
            </div>
          </div>
        </div>

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