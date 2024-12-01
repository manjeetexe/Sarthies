import React, { useState } from "react";
import { useAuth } from "./../Context/Authcontext"; // Adjust the path as necessary
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const { SignOut } = useAuth(); // Access SignOut from AuthContext
  const navigate = useNavigate();
  const [showNotice, setShowNotice] = useState(false); // State to control the modal

  const handleLogout = () => {
    SignOut(); // Clear user data and token
    navigate("/login"); // Redirect to login page
  };

  return (
    <div>
      <button
        onClick={() => setShowNotice(true)}
        style={{
            width: '100%',
            padding: "10px 20px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "7px",
            cursor: "pointer",
          }}
      >
        Logout
      </button>

      {/* Logout Notice */}
      {showNotice && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              width: "300px",
            }}
          >
            <p style={{ marginBottom: "20px" }}>
              Are you sure you want to logout?
            </p>
            <button
              onClick={handleLogout}
              style={{
                padding: "10px 20px",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Yes, Logout
            </button>
            <button
              onClick={() => setShowNotice(false)}
              style={{
                padding: "10px 20px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LogoutButton;