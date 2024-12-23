import React, { useState, useEffect } from "react";

const FileDisplay = () => {
  const [pdfs, setPdfs] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserPdfs = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }

        const payload = token.split(".")[1];
        const decodedPayload = JSON.parse(atob(payload));
        const userId = decodedPayload.id;

        if (!userId) {
          throw new Error("No user ID found in token");
        }

        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/user-pdfs/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch PDFs");
        }

        const data = await response.json();
        setPdfs(data.pdfs);
      } catch (error) {
        setError("Error fetching the data");
        console.error("Error fetching PDFs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserPdfs();
  }, []);

  const openPdfInNewTab = (url) => {
    window.open(url, "_blank");
  };

  if (loading) {
    return (
      <div className="mt-20 text-center text-lg font-medium text-blue-600">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-20 text-center text-lg font-medium text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="mt-24 mb-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Uploaded PDFs</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* PDF List */}
        <div>
          <ul className="space-y-4">
            {pdfs.map((pdf) => (
              <li
                key={pdf.fileUrl}
                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow hover:shadow-lg border hover:border-blue-500 cursor-pointer transition-all"
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    openPdfInNewTab(pdf.fileUrl);
                  } else {
                    setSelectedPdf(pdf.fileUrl);
                  }
                }}
              >
                <div className="text-5xl flex-shrink-0 w-12 h-12 flex  justify-center">
                  📄
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{pdf.title}</h3>
                  <p className="text-sm text-gray-500">Description: {pdf.description}</p>
                  <p className="text-sm text-gray-600">Subject: {pdf.subject}</p>
                  <p className="text-sm text-gray-600">Lesson: {pdf.lesson}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* PDF Viewer */}
        <div className="hidden lg:block border rounded-lg shadow-md bg-white p-6">
          {selectedPdf ? (
            <iframe
              src={`${selectedPdf}#toolbar=0`}
              className="w-full min-h-[600px] rounded-lg border"
              title="PDF Viewer"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-[600px] text-center">
              <div className="text-gray-400 text-5xl mb-4">📄</div>
              <p className="text-gray-500 text-lg">
                Select a PDF from the list to view here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileDisplay;