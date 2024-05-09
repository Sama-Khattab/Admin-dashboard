import React from "react";
import "../style/error.css" // Import CSS file for styling

const NotFound = () => {
  return (
    <div className="error-page-container">
      <div className="error-message">
        <h1>404</h1>
        <p>Oops! Page not found.</p>
      </div>
    </div>
  );
};

export default NotFound;
