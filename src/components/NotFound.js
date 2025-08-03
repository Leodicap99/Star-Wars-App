// src/components/NotFound.jsx
import { useNavigate } from "react-router";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <img
        src="/assets/logo.svg"
        alt="Star Wars Logo"
        className="not-found-logo"
      />
      <h1 className="not-found-title">404 - Page Not Found</h1>
      <p className="not-found-text">This is not the page you are looking for...</p>
      <button className="not-found-button" onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
}

export default NotFound;
