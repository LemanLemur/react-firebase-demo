import React from "react";
import "../css/button.css";

export default function Button(props) {
  return (
    <span className={props.className}>
      <button onClick={props.onClick} className="Button">
        {props.children}
      </button>
    </span>
  );
}
