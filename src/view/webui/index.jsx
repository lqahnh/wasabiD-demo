import React, { useState } from "react";
import ReactDOM from "react-dom";
import Prompt from "./ui/prompt";

function Index() {
  const [displaystyle, setDisplaystyle] = useState({ display: "block" });
  const [buttonStyle, setButtonStyle] = useState({
    position: "fixed",
    margin: "auto",
    top: "50%",
    left: "50%",
  });
  const tanchukuang = () => {
    setDisplaystyle({ display: "block" });
    // setButtonStyle({ display: "none" });
  };
  return (
    <div>
      <Prompt title="请输入任何口令，并确认" displaystyle={displaystyle} />
      <button onClick={tanchukuang} style={buttonStyle}>
        点击弹出框
      </button>
    </div>
  );
}
ReactDOM.render(<Index />, document.getElementById("root"));
