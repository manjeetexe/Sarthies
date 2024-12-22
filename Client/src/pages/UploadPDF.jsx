import axios from "axios";
import React, { useState } from "react";

const UploadPDF = () => {
  const [formData, setFormData] = useState({
    title: "",
    lesson: "",
    subject: "",
    description: "",
    file: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== "application/pdf") {
        alert("Please upload a valid PDF file.");
        e.target.value = null; // Reset the file input
        return;
      }

      if (file.size > 50 * 1024 * 1024) { // 50 MB size limit
        alert("File size should not exceed 50 MB.");
        e.target.value = null; // Reset the file input
        return;
      }

      setFormData({ ...formData, file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.file) {
      alert("Please upload a valid PDF file.");
      return;
    }

    setIsLoading(true);

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("lesson", formData.lesson);
      data.append("subject", formData.subject);
      data.append("description", formData.description);
      data.append("file", formData.file);

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/upload-pdf`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response from server:", response.data);
      alert("PDF uploaded successfully!");

      // Reset form fields after submit
      setFormData({
        title: "",
        lesson: "",
        subject: "",
        description: "",
        file: null,
      });
    } catch (error) {
      console.error("Error uploading PDF:", error);
      alert("There was an error uploading the PDF. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex my-16 justify-center items-center min-h-screen bg-gradient-to-r from-indigo-100 to-blue-100">
      <form
        
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-lg transition-transform transform hover:scale-105"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-600">
          Upload Your PDF
        </h2>

        {/* Title */}
        <div className="mb-3">
          <label htmlFor="title" className="block font-medium text-gray-700 mb-2">
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
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Lesson */}
        <div className="mb-3">
          <label htmlFor="lesson" className="block font-medium text-gray-700 mb-2">
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
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Subject */}
        <div className="mb-3">
          <label htmlFor="subject" className="block font-medium text-gray-700 mb-2">
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
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label htmlFor="description" className="block font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter a short description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
          />
        </div>

        {/* File Input */}
        <div className="mb-4">
          <label htmlFor="file" className="block font-medium text-gray-700 mb-2">
            Upload PDF
          </label>
          <input
            type="file"
            id="file"
            name="file"
            accept=".pdf"
            onChange={handleFileChange}
            required
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          />
          <p className="text-sm text-gray-500 mt-2">Only PDF files are allowed. Max size: 50 MB.</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold py-3 rounded-lg hover:from-indigo-600 hover:to-blue-600 transition-transform transform hover:scale-105 shadow-md"
          disabled={isLoading}
        >
          {isLoading ? "Uploading..." : "Upload PDF"}
        </button>
      </form>
    </div>
  );
};

export default UploadPDF;