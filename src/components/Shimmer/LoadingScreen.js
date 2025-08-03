// src/components/LoadingScreen.jsx
import React from "react";
import "./LoadingScreen.css";

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loader"></div>
      <p className="loading-text">Loading the galaxy...</p>
    </div>
  );
}

export default LoadingScreen;
