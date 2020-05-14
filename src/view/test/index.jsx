import React, { Component } from "react";
import Item from "./item";
import Item2 from "./item2";
import Box from "./box";
import ReactDOM from "react-dom";
import "./index.css";
class Flex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-div">
        <div className="column">
          <div className="container">
            <Box>
              <div className="column" style={{ justifyContent: "center" }}>
                <Item></Item>
              </div>
            </Box>
          </div>
          <div className="container">
            <Box>
              <div className="column" style={{ justifyContent: "flex-end" }}>
                <Item></Item>
              </div>
              <div
                className="column"
                style={{ justifyContent: "center" }}
              ></div>
              <div className="column">
                <Item></Item>
              </div>
            </Box>
          </div>
          <div className="container">
            <Box>
              <div className="column" style={{ justifyContent: "flex-end" }}>
                <Item></Item>
              </div>
              <div className="column" style={{ justifyContent: "center" }}>
                <Item></Item>
              </div>
              <div className="column">
                <Item></Item>
              </div>
            </Box>
          </div>
        </div>

        <div className="column">
          <div className="container">
            <Box>
              <div className="column">
                <Item></Item>
                <Item></Item>
              </div>
              <div
                className="column"
                style={{ justifyContent: "center" }}
              ></div>
              <div className="column">
                <Item></Item>
                <Item></Item>
              </div>
            </Box>
          </div>
          <div className="container">
            <Box>
              <div className="column">
                <Item></Item>
                <Item></Item>
              </div>
              <div className="column" style={{ justifyContent: "center" }}>
                <Item></Item>
              </div>
              <div className="column">
                <Item></Item>
                <Item></Item>
              </div>
            </Box>
          </div>
          <div className="container">
            <Box>
              <div className="column">
                <Item></Item>
                <Item></Item>
              </div>
              <div className="column" style={{ justifyContent: "center" }}>
                <Item></Item>
              </div>
              <div className="column">
                <Item></Item>
                <Item></Item>
              </div>
            </Box>
          </div>
        </div>

        <div className="column">
          <div className="container">
            <Box>
              <div className="column">
                <Item></Item>
                <Item></Item>
              </div>
              <div className="column" style={{ justifyContent: "center" }}>
                <Item></Item>
              </div>
              <div className="column">
                <Item></Item>
                <Item></Item>
              </div>
            </Box>
          </div>
          <div className="container">
            <Box>
              <div className="column">
                <Item></Item>
                <Item></Item>
              </div>
              <div className="column" style={{ justifyContent: "center" }}>
                <Item></Item>
              </div>
              <div className="column">
                <Item></Item>
                <Item></Item>
              </div>
            </Box>
          </div>
          <div className="container">
            <Box>
              <div className="column">
                <Item></Item>
                <Item></Item>
              </div>
              <div className="column" style={{ justifyContent: "center" }}>
                <Item></Item>
              </div>
              <div className="column">
                <Item></Item>
                <Item></Item>
              </div>
            </Box>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Flex />, document.getElementById("root"));
