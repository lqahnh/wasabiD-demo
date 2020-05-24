import React, { Component } from "react";
import PropTypes from "prop-types";
import "./css/myresize.css";
import events from "../../../component/Unit/events";
class MyResize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 8, //最小尺度
    };
    this.mouseDownHandler = this.mouseDownHandler.bind(this);
  }
  componentDidMount() {
    if (this.props.resize) {
      events.on(document, "mousedown", this.mouseDownHandler);
    }
  }
  getDirection(targetElement, event) {
    let xPos, yPos, offset;
    xPos = event.clientX;
    yPos = event.clientY;
    offset = this.state.min;
    let position = targetElement.getBoundingClientRect(); //获取div的位置信息
    let cursor = "";
    if (
      yPos <= position.height + position.top + offset &&
      yPos >= position.height + position.top - offset
    ) {
      cursor += "ns";
    }

    if (
      xPos <= position.width + position.left + offset &&
      xPos >= position.width + position.left - offset
    ) {
      cursor += "ew";
    }
    cursor = cursor == "nsew" ? "nwse" : cursor;

    targetElement.style.cursor = cursor ? cursor + "-resize" : "default"; //设置鼠标样式
    console.log(xPos, "+", position.width, "+", position.left);
    return cursor;
  }
  mouseDownHandler(event) {
    let dir = this.getDirection(this.refs.resizediv, event);
    console.log(dir);
    this.oldClientX = event.clientX;
    this.oldClientY = event.clientY;
    console.log(this.oldClientX + "+++++" + this.oldClientY);
  }
  render() {
    let style = this.props.style ? this.props.style : {};
    return (
      <div
        className={"resize  " + this.props.className}
        style={style}
        ref="resizediv"
      >
        {this.props.children}
      </div>
    );
  }
}
MyResize.propTypes = {
  style: PropTypes.object.isRequired, //样式
  className: PropTypes.string, //样式

  resize: PropTypes.bool, //是否允许调整大小
};
MyResize.defaultProps = {
  style: {},
  className: "",

  resize: true, //默认是可以改变大小的
};
export default MyResize;
