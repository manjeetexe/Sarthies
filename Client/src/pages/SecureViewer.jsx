import React from "react";
import { useLocation } from "react-router-dom";

const SecureViewer = () => {
  const location = useLocation();
  const { file } = location.state || {}; // Retrieve the file from state

  if (!file) {
    return <div>No file specified!</div>;
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <iframe
        src={file}
        title="PDF Viewer"
        className="w-full h-full"
        
      />
    </div>
  );
};

export default SecureViewer;