import React, { Component } from "react";
class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="box">{this.props.children}</div>;
  }
}
export default Box;
