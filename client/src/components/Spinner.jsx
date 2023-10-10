import React from "react";
import "../styling/spinner.scss";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <span className="loader"></span>
    </div>
  );
}