import React from "react";
import "./Refresh.css";
function Refresh(props) {
  //   console.log(props);
  return (
    <div className="refresh" style={{ display: props.show }}>
      <div className="imagediv">
        <img src={require("./shuaxin.png")} width="50" height="50"></img>
      </div>
    </div>
  );
}
export default Refresh;
