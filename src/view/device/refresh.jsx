import React, { useState } from "react";
import ReactDOM from "react-dom";
import Falling from "../../component/Tools/Falling";
import MyRefresh from "../../component/Tools/Refresh";
function Refresh() {
  const [show, setShow] = useState("none");
  const tijiao = () => {
    setShow("block");
    let timer = setTimeout(function () {
      setShow("none");
      clearTimeout(timer);
    }, 5000);
  };
  return (
    <div>
      <Falling></Falling>
      <MyRefresh show={show}></MyRefresh>
      <input
        type="button"
        value="提交"
        style={{ margin: "0 0 0 200px" }}
        onClick={tijiao}
      ></input>
    </div>
  );
}
ReactDOM.render(<Refresh />, document.getElementById("root"));
