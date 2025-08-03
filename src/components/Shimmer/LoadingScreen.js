import React from "react";
import "./LoadingScreen.css";
/**
 * LoadingScreen Component
 * 
 * This functional React component renders a loading screen with a spinner
 * and a loading message. It is styled using the associated CSS file.
 * 
 * @component
 * @returns {JSX.Element} A JSX element representing the loading screen.
 * 
 */
function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loader"></div>
      <p className="loading-text">Loading the galaxy...</p>
    </div>
  );
}

export default LoadingScreen;
