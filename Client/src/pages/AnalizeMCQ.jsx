import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend,} from "chart.js";
import { useAuth } from './../Context/Authcontext';

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

const Analysis = () => {

  const { user, isSignedIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const { summary, score, totalMarks, subject, lesson } = location.state || {};
  const totalQuestions = summary?.length || 0;
  const correctAnswers = summary?.filter((item) => item.isCorrect).length || 0;
  const incorrectAnswers = totalQuestions - correctAnswers;

  const [openQuestion, setOpenQuestion] = useState(null);

  // Calculate percentages for pie chart
  const correctPercentage = ((correctAnswers / totalQuestions) * 100).toFixed(1);
  const incorrectPercentage = ((incorrectAnswers / totalQuestions) * 100).toFixed(1);

  // Bar chart data showing correct vs incorrect side by side
  const barChartData = {
    labels: ['Performance Analysis'],
    datasets: [
      {
        label: 'Correct Answers',
        data: [correctAnswers],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Incorrect Answers',
        data: [incorrectAnswers],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      }
    ]
  };

  const barChartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Questions'
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || '';
            const value = context.parsed.y;
            const percentage = (value / totalQuestions * 100).toFixed(1);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      }
    },
  };

  // Pie chart data with percentage labels
  const pieChartData = {
    labels: [`Correct (${correctPercentage}%)`, `Incorrect (${incorrectPercentage}%)`],
    datasets: [
      {
        data: [correctAnswers, incorrectAnswers],
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 99, 132, 0.6)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw;
            const percentage = (value / totalQuestions * 100).toFixed(1);
            return `${value} questions (${percentage}%)`;
          }
        }
      }
    }
  };



  
  const handleSendMail = async () => {
    try {
      // Capture full page screenshot method
      const captureFullPageScreenshot = async () => {
        // Use html2canvas library for comprehensive rendering
        const { default: html2canvas } = await import('html2canvas');
        
        // Select the entire page content
        const element = document.querySelector('.min-h-screen');
        
        // Capture screenshot with controlled resolution
        const canvas = await html2canvas(element, {
          useCORS: true,
          scale: 1, // Reduced scale to minimize payload
          logging: false,
          allowTaint: true,
          scrollX: 0,
          scrollY: -window.scrollY
        });
  
        // Convert canvas to base64 image
        return canvas.toDataURL('image/jpeg', 0.7); // Use JPEG with reduced quality
      };
  
      // Simplified data capture
      const analysisDetails = {
        subject,
        lesson,
        totalQuestions,
        correctAnswers,
        incorrectAnswers,
        score,
        totalMarks,
        correctPercentage: ((correctAnswers / totalQuestions) * 100).toFixed(1),
        incorrectPercentage: ((incorrectAnswers / totalQuestions) * 100).toFixed(1)
      };
  
      // Include question number in summary
      const limitedSummary = summary?.map((item, index) => ({
        questionNumber: index + 1, // Add question number
        question: item.question.slice(0, 100), // Truncate long questions
        isCorrect: item.isCorrect,
        answer: item.answer,
        selectedOption: item.selectedOption,
        Marks: item.Marks
      })).slice(0, 10); // Limit to first 10 questions
  
      // Create FormData to handle large payload
      const formData = new FormData();
      formData.append('emails', JSON.stringify([user.email, 'saarathitutorials@gmail.com']));
      formData.append('analysisDetails', JSON.stringify(analysisDetails));
      formData.append('summaryQuestions', JSON.stringify(limitedSummary));
  
      // Append screenshot as a file
      const screenshotBlob = await (await fetch(await captureFullPageScreenshot())).blob();
      formData.append('screenshotImage', screenshotBlob, 'screenshot.jpg');
  
      // Send data
      const response = await fetch('/send-analyze-email', {
        method: 'POST',
        body: formData, // Use FormData instead of JSON
      });
  
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        const error = await response.text(); // Use text() instead of json()
        alert(error);
      }
    } catch (err) {
      console.error('Error:', err);
      alert('An error occurred while sending the email.');
    }
  };


  const handleRedirectHome = () => {
    navigate("/");
  };


  

  return (
    <div className="min-h-screen mt-20 flex flex-col items-center bg-gray-50 p-8">
      <h1 className="text-4xl font-semibold text-gray-800 mb-4">Exam Analysis</h1>
      <h1>{user.email}</h1>
      <p className="text-lg font-medium text-gray-600 mb-8">
        <span className="text-indigo-600">Subject:</span> {subject} | <span className="text-indigo-600">Lesson:</span> {lesson}
      </p>

      {/* Performance Charts */}
      <div className="w-full md:w-3/4 lg:w-2/3 bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Performance Overview</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Pie Chart */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-700 mb-4 text-center">Score Distribution</h3>
            <Pie data={pieChartData} options={pieChartOptions} />
          </div>

          {/* Bar Chart */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-700 mb-4 text-center">Answer Analysis</h3>
            <Bar data={barChartData} options={barChartOptions} />
          </div>
        </div>

        <div className="text-lg font-semibold text-center mt-6 p-4 bg-indigo-50 rounded-lg">
          <p>
            Total Score: <span className="text-indigo-600">{score} / {totalMarks}</span>
            <span className="text-gray-600 text-base ml-2">
              ({((score / totalMarks) * 100).toFixed(1)}%)
            </span>
          </p>
        </div>
      </div>

      {/* Detailed Question Analysis */}
      <div className="w-full md:w-3/4 lg:w-2/3 bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Detailed Question Analysis</h2>
        <div className="space-y-6">
          {summary?.map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border ${
                item.isCorrect 
                  ? "border-green-200 bg-green-50" 
                  : "border-red-200 bg-red-50"
              } shadow-md transition-all duration-300 ease-in-out hover:shadow-lg`}
            >
              <div
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                className="cursor-pointer flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-gray-700">
                  Q{index + 1}: {item.question.slice(0, 50)}...
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.isCorrect 
                      ? "bg-green-200 text-green-800" 
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {item.isCorrect ? "Correct" : "Incorrect"}
                </span>
              </div>
              {openQuestion === index && (
                <div className="mt-4 pl-4 border-l-4 border-gray-200">
                  <p className="text-gray-600 mb-2">
                    <span className="font-medium">Your Answer:</span> {item.selectedOption}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Marks:</span> {item.Marks}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-8">
        
        <button
          onClick={handleRedirectHome}
          className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition shadow-md hover:shadow-lg"
        >
          Back to Home
        </button>
        <button
          onClick={handleSendMail}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-md hover:shadow-lg"
        >
          Send to Email
        </button>
      </div>
      <div className="h-20"></div>
    </div>
  );
};

export default Analysis;