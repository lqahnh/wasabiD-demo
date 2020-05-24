import React, { Component } from "react";
import "./Sass/front.css";
import Ball from "./ball";
import { random, formatBallNum } from "../../../component/libs/tool";
class Front extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectBalls: [],
      frontBallsObject: [],
    };
  }
  setSelectBall = (id, isSelect) => {
    let oldSelectBalls = this.state.selectBalls;
    oldSelectBalls[id] = isSelect;
    this.setState({ selectBalls: oldSelectBalls });
    this.props.getFrontBalls(this.state.selectBalls);
  };
  createBalls = (num) => {
    let res = [];
    for (let i = 1; i <= num; i++) {
      res.push(
        <Ball
          key={"ball" + i}
          isSelect={false}
          style={{ background: "#ffffff" }}
          setSelectBall={this.setSelectBall}
          dataId={i}
          source={"front"}
          onRef={this.getRefs}
        >
          {formatBallNum(i)}
        </Ball>
      );
    }
    return res;
  };
  getRefs = (ref) => {
    //将所有球的对象存入状态值
    let OldFrontBallsObject = this.state.frontBallsObject;
    OldFrontBallsObject[ref.props.dataId] = ref;
    this.setState({
      frontBallsObject: OldFrontBallsObject,
    });

    // console.log(this.state.frontBallsObject);
  };
  createSelect = (num) => {
    let res = [];
    for (let i = 5; i <= num; i++) {
      res.push(<option key={"select" + i}>{i}</option>);
    }
    return <select ref="frontSelect">{res}</select>;
  };
  deletebtn = () => {
    // this.frontChild.selectBall();
    this.state.selectBalls.map((value, index) => {
      if (value) {
        //判断如果是选中，执行改球的点击方法

        this.state.frontBallsObject[index].selectBall();
      }
    });
  };
  frontRandSelect = () => {
    // console.log(this.refs.frontSelect.value);
    //现将原有的清空
    this.deletebtn();
    //再随机选
    let randoms = random(
      1,
      this.props.num,
      parseInt(this.refs.frontSelect.value)
    );
    // console.log(randoms);
    randoms.map((value) => {
      value = parseInt(value);
      setTimeout(() => {
        this.state.frontBallsObject[value].selectBall();
      }, 10);
    });
  };
  render() {
    return (
      <div className="wsb-front-contain">
        <div className="wsb-front-title">
          —<span className="wsb-front-title-span">前区</span>— 至少选
          <span className="wsb-front-title-span" style={{ fontSize: "14px" }}>
            5
          </span>
          个
        </div>
        <div className="wsb-front-balls">
          {this.createBalls(this.props.num)}
        </div>
        <div className="wsb-front-select-div">
          {this.createSelect(this.props.num)}
          <span className="btn" onClick={this.frontRandSelect}>
            机选前区
          </span>
          <span className="delete" onClick={this.deletebtn}>
            清
          </span>
        </div>
      </div>
    );
  }
}

export default Front;
