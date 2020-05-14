import React from "react";
import ReactDOM from "react-dom";
import "./heart.css";
function Heart() {
  return (
    <div>
      <div className="lefth"></div>
      <div className="leftr"></div>
    </div>
  );
}
ReactDOM.render(<Heart />, document.getElementById("root"));
