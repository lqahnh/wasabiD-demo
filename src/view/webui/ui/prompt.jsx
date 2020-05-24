import React, { useState, useMemo, useEffect } from "react";
import "./css/prompt.css";

function Prompt(props) {
  const [contentStyle, setContentStyle] = useState();
  const [titleStyle, setTitleStyle] = useState();
  const [inputValue, setInputValue] = useState("");
  const [buttonConfirmStyle, setButtonConfirmStyle] = useState();
  const [isDown, setIsDown] = useState(false);
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
    if (!isDown) {
      let style = JSON.parse(JSON.stringify(contentStyle));

      if (e.nativeEvent.offsetX <= 3 && e.nativeEvent.offsetX > 0) {
        Object.assign(style, {
          cursor: "ew-resize",
        });
        setContentStyle(style);
      } else if (e.nativeEvent.offsetX <= 320 && e.nativeEvent.offsetX > 317) {
        Object.assign(style, {
          cursor: "ew-resize",
        });
        setContentStyle(style);
      } else {
        if (e.nativeEvent.offsetY <= 60 && e.nativeEvent.offsetY > 56) {
          Object.assign(style, {
            cursor: "ns-resize",
          });
          setContentStyle(style);
        } else if (e.nativeEvent.offsetY <= 5 && e.nativeEvent.offsetY > -5) {
          Object.assign(style, {
            cursor: "ns-resize",
          });
          setContentStyle(style);
        } else {
          Object.assign(style, {
            cursor: "default",
          });
          setContentStyle(style);
        }
      }
    }
  };

  const myFunction = (e) => {
    let style = JSON.parse(JSON.stringify(contentStyle));
    Object.assign(style, {
      left: e.screenX + "px",
      top: e.screenY + "px",
    });
    setContentStyle(style);
    setTitleStyle({ cursor: "move" });
    // console.log(isDown);
  };
  const titleMouseDown = (e) => {
    setIsDown(true);
  };
  const titleMouseUp = () => {
    setIsDown(false);
    // setTitleStyle({ cursor: "default" });
  };
  const titleMouseMove = () => {
    setTitleStyle({ cursor: "move" });
  };

  useMemo(() => {
    setContentStyle(props.displaystyle);
  }, [props.displaystyle]);
  useEffect(() => {
    if (isDown) {
      document.body.addEventListener("mousemove", myFunction);
      return () => {
        document.body.removeEventListener("mousemove", myFunction);
        setIsDown(false);
      };
    }
  }, [isDown]);
  return (
    <div
      className="content"
      style={contentStyle}
      onMouseMove={contentMouseMove}
    >
      <div
        className="title"
        style={titleStyle}
        onMouseDown={titleMouseDown}
        onMouseUp={titleMouseUp}
        onMouseMove={titleMouseMove}
      >
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
          onMouseOver={moveButtonConfirm}
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
