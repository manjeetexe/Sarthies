import React, { useState } from "react";

const UploadPDF = () => {
  const [formData, setFormData] = useState({
    title: "",
    lesson: "",
    subject: "",
    description: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setFormData({ ...formData, file });
    } else {
      alert("Please upload a valid PDF file.");
      e.target.value = null; // Reset the file input
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your API call logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-5 text-center">Upload PDF</h2>

        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block font-semibold mb-1">
            PDF Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter PDF Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Lesson */}
        <div className="mb-4">
          <label htmlFor="lesson" className="block font-semibold mb-1">
            Lesson/Chapter
          </label>
          <input
            type="text"
            id="lesson"
            name="lesson"
            placeholder="Enter Lesson/Chapter Name"
            value={formData.lesson}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label htmlFor="subject" className="block font-semibold mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block font-semibold mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter a short description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
          />
        </div>

        {/* File Input */}
        <div className="mb-4">
          <label htmlFor="file" className="block font-semibold mb-1">
            Upload PDF
          </label>
          <input
            type="file"
            id="file"
            name="file"
            accept=".pdf"
            onChange={handleFileChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit PDF
        </button>
      </form>
    </div>
  );
};

export default UploadPDF;