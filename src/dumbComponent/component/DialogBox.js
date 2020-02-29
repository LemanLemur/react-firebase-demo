import React from "react";
import "../css/dialog.css";

export default function Dialog(props) {
  return (
    <div>
      {props.open ? (
        <div className="DialogBack">
          <div className="Dialog">{props.children}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
