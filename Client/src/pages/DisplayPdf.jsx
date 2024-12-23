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

        const payload = token.split('.')[1];
        const decodedPayload = JSON.parse(atob(payload));
        const userId = decodedPayload.id;

        if (!userId) {
          throw new Error("No user ID found in token");
        }

        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user-pdfs/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch PDFs');
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
    window.open(url, '_blank');
  };

  if (loading) {
    return <div className="mt-20 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="mt-20 text-center text-red-600">{error}</div>;
  }

  return (
    <div className="mt-20 mb-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold mb-6">Your Uploaded PDFs</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* List of PDFs */}
        <div>
          <ul className="space-y-6">
            {pdfs.map((pdf) => (
              <li
                key={pdf.fileUrl}
                className="bg-white p-4 rounded-lg shadow-md border cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    openPdfInNewTab(pdf.fileUrl);
                  } else {
                    setSelectedPdf(pdf.fileUrl);
                  }
                }}
              >
                <h3 className="text-lg font-bold">{pdf.title}</h3>
                <p className="text-sm text-gray-500">Description: {pdf.description}</p>
                <p className="text-sm text-gray-600">Subject: {pdf.subject}</p>
                <p className="text-sm text-gray-600">Lesson: {pdf.lesson}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* PDF Viewer (only shown on desktop) */}
        <div className="hidden lg:block border p-4 rounded-lg shadow-md bg-white">
          {selectedPdf ? (
            <iframe
              src={`${selectedPdf}#toolbar=0`}
              className="w-full min-h-[600px]"
              title="PDF Viewer"
            />
          ) : (
            <div className="flex items-center justify-center h-[600px] text-gray-500">
              Select a PDF to view
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileDisplay;