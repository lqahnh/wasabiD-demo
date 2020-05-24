import React, { Component } from "react";
import ReactDOM from "react-dom";
import MyResize from "./ui/MyResize";
class New extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MyResize></MyResize>
      </div>
    );
  }
}

ReactDOM.render(<New />, document.getElementById("root"));
