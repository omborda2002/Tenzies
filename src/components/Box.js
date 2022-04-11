import React from "react";
import "../css/Box.css";

export default function Box(props) {
  return (
    <div className="main__box">
      <div
        className={`box ${props.isHeld ? "yellow" : ""}`}
        onClick={() => props.handleBox(props.id)}
      >
        {props.value}
      </div>
    </div>
  );
}

