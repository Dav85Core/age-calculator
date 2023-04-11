import React from "react";
import "./Body.css";

function body(props) {
  const { year, day, month } = props;
  return (
    <div className="results">
      <div className="result">
        <em className="result-number">{year}</em>
        <p className="result-date">years</p>
      </div>
      <div className="result">
        <em className="result-number">{month}</em>
        <p className="result-date">months</p>
      </div>
      <div className="result">
        <em className="result-number">{day}</em>
        <p className="result-date">days</p>
      </div>
    </div>
  );
}

export default body;
