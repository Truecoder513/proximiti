import React from "react";

export const Circlepercertange = ({ percertange }) => {
  let progressBar = 472 - 472 * (percertange / 100);
  return (
    <div className="circle-percertange">
      <div className="outer">
        <div className="inner">
          <span className="number"> {percertange} %</span>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#FFCBA5" />
            <stop offset="100%" stopColor="#F68D7D" />
          </linearGradient>
        </defs>
        <circle
          cx="80"
          cy="80"
          r="70"
          strake-linecap="round"
          style={{ strokeDashoffset: progressBar }}
        />
      </svg>
    </div>
  );
};
