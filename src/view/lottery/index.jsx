import React, { Component } from "react";
import ReactDOM from "react-dom";
import Front from "./component/front";
import Back from "./component/back";
import Center from "./component/center";
import Calculation from "./component/calculation";
import "./component/Sass/index.css";
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backBalls: [],
      frontBalls: [],
      frontNum: 0,
      backNum: 0,
    };
  }
  getBackBalls = (backBalls) => {
    this.setState({
      backBalls: backBalls,
    });
    let backBallArr = [];
    backBalls.map((value, index) => {
      if (value) {
        backBallArr.push(index);
      }
    });
    this.setState({
      backNum: backBallArr.length,
    });
  };
  getFrontBalls = (frontBalls) => {
    this.setState({
      frontBalls: frontBalls,
    });
    let frontBallArr = [];
    frontBalls.map((value, index) => {
      if (value) {
        frontBallArr.push(index);
      }
    });
    //combinationNum(frontBallArr, 5) *
    // console.log(this.state.backNum)
    this.setState({
      frontNum: frontBallArr.length,
    });
    // console.log(frontBallArr.length);
  };
  componentDidUpdate() {
    this.refs.combination.setTotleNum();
  }

  render() {
    return (
      <div className="wsb-main">
        <div>
          <Front getFrontBalls={this.getFrontBalls} num={35}></Front>
          <Back getBackBalls={this.getBackBalls} num={12}></Back>
        </div>
        <div>
          <Calculation
            frontNum={this.state.frontNum}
            backNum={this.state.backNum}
            ref="combination"
          ></Calculation>
        </div>
        <div>
          <Center
            frontBalls={this.state.frontBalls}
            backBalls={this.state.backBalls}
          ></Center>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
