import React, { useState, useEffect } from "react";
import axios from "axios";

const FileDisplay = () => {
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the user ID from localStorage (assuming the user is logged in)
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUserPdfs = async () => {
      try {
        setLoading(true);
        // Fetch uploaded PDFs for the specific user
        const response = await axios.get(`http://localhost:8000/user-pdfs/${userId}`);
        
        // Set the pdfs state with the fetched data
        setPdfs(response.data.pdfs);
      } catch (error) {
        setError("Error fetching uploaded PDFs. Please try again.");
        console.error("Error fetching PDFs:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserPdfs();
    } else {
      setError("User not logged in.");
      setLoading(false);
    }
  }, [userId]);

  // Show loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show error state if something goes wrong
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Your Uploaded PDFs</h1>
      <div>
        {pdfs.length > 0 ? (
          <ul>
            {pdfs.map((pdf) => (
              <li key={pdf.fileUrl}>
                <h3>{pdf.title}</h3>
                <p>{pdf.description}</p>
                <p>Subject: {pdf.subject}</p>
                <p>Length: {pdf.length}</p>
                {/* Link to download the PDF */}
                <a href={pdf.fileUrl} download={pdf.title}>Download {pdf.title}</a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No PDFs uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default FileDisplay;