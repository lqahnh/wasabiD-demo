import React, { useState, useEffect } from "react";
import "./css/prompt.css";

function Prompt(props) {
  const [contentStyle, setContentStyle] = useState();
  const [titleStyle, setTitleStyle] = useState();
  const [inputValue, setInputValue] = useState("");
  const [buttonConfirmStyle, setButtonConfirmStyle] = useState();
  const cancelX = () => {
    setInputValue("");
    setContentStyle({ display: "none" });
  };
  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const clickButtonConfirm = () => {
    if (inputValue) {
      alert(inputValue);
    }
  };
  const moveButtonConfirm = () => {
    if (inputValue) {
      setButtonConfirmStyle({ cursor: "pointer" });
    } else {
      setButtonConfirmStyle({ cursor: "not-allowed" });
    }
  };
  const contentMouseMove = (e) => {
    if (e.nativeEvent.offsetX <= 3 && e.nativeEvent.offsetX > 0) {
      setContentStyle({ cursor: "ew-resize" });
    } else if (e.nativeEvent.offsetX <= 320 && e.nativeEvent.offsetX > 317) {
      setContentStyle({ cursor: "ew-resize" });
    } else {
      if (e.nativeEvent.offsetY <= 60 && e.nativeEvent.offsetY > 56) {
        setContentStyle({ cursor: "ns-resize" });
      } else if (e.nativeEvent.offsetY <= 5 && e.nativeEvent.offsetY > -5) {
        setContentStyle({ cursor: "ns-resize" });
      } else {
        setContentStyle({ cursor: "auto" });
      }
    }
    // console.log(e.nativeEvent.offsetX + "++++++" + e.nativeEvent.offsetY);
  };
  const titleMouseMove = (e) => {
    if (e.nativeEvent.offsetY > 5) {
      setTitleStyle({ cursor: "move" });
    } else {
      setTitleStyle({ cursor: "ns-resize" });
    }
    // console.log(e.nativeEvent.offsetX + "++++++" + e.nativeEvent.offsetY);
  };

  useEffect(() => {
    setContentStyle(props.displaystyle);
  }, [props.displaystyle]);
  return (
    <div
      className="content"
      style={contentStyle}
      onMouseMove={contentMouseMove}
    >
      <div className="title" onMouseMove={titleMouseMove} style={titleStyle}>
        <div className="zuoshangjiao"></div>
        <div>{props.title}</div>
        <div className="titlecancel" onClick={cancelX}>
          x
        </div>
        <div className="youshangjiao"></div>
      </div>
      <div className="inputDiv">
        <input onChange={changeInputValue} value={inputValue} />
      </div>
      <div className="buttonsDiv">
        <div className="zuoxiajiao"></div>
        <div
          className="buttonConfirm"
          onClick={clickButtonConfirm}
          onMouseMove={moveButtonConfirm}
          style={buttonConfirmStyle}
        >
          确认
        </div>
        <div className="buttonCancel" onClick={cancelX}>
          取消
        </div>
        <div className="youxiajiao"></div>
      </div>
    </div>
  );
}
export default Prompt;
