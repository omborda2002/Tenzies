import React from "react";
import "../css/Button.css";
export default function Button(props) {
  return <div className="main__button">
      <button onClick={props.boxRoll}  >Roll it!</button>
  </div>;
}
