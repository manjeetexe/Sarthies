import React from "react";

const PaperCards = () => {
  const papers = [
    {
      year: "2024 Papers",
      subjects: [
        { name: "Science", file: "/pdfs/science-2024.pdf" },
        { name: "Math", file: "/pdfs/math-2024.pdf" },
        { name: "History", file: "/pdfs/history-2024.pdf" },
        { name: "Geography", file: "/pdfs/geography-2024.pdf" },
        { name: "English", file: "/pdfs/english-2024.pdf" },
        { name: "Physics", file: "/pdfs/physics-2024.pdf" },
      ],
    },
    {
      year: "2023 Papers",
      subjects: [
        { name: "Science", file: "/pdfs/science-2023.pdf" },
        { name: "Math", file: "/pdfs/math-2023.pdf" },
        { name: "History", file: "/pdfs/history-2023.pdf" },
        { name: "Geography", file: "/pdfs/geography-2023.pdf" },
        { name: "English", file: "/pdfs/english-2023.pdf" },
        { name: "Physics", file: "/pdfs/physics-2023.pdf" },
      ],
    },
  ];

  const handleCardClick = (file) => {
    if (!file) {
      alert("File path is missing!"); // Notify the user if file path is missing
      return;
    }
    // Open the PDF file in a new tab
    window.open(file, "_blank");
  };

  return (
    <div className="flex flex-col gap-5 overflow-x-auto justify-center w-full rounded-xl">
      {papers.map((paper, rowIndex) => (
        <div key={rowIndex} className="mb-4">
          <div className="flex space-x-4 w-max">
            {paper.subjects.map((subject, index) => (
              <div
                key={index}
                className="h-24 overflow-hidden relative w-32 border-[1px] border-black rounded-xl cursor-pointer hover:bg-gray-100"
                onClick={() => handleCardClick(subject.file)}
              >
                <h1 className="m-2">{subject.name}</h1>
                <div className="absolute h-5 w-full bottom-0 flex justify-center items-center bg-red-500">
                  <h1 className="text-sm text-white">{paper.year}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaperCards;