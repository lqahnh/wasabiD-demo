import React, { Component } from "react";
import "./Sass/back.css";
import Ball from "./ball";
import { random, formatBallNum } from "../../../component/libs/tool";
class Back extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectBalls: [],
      backBallsObject: [],
    };
  }
  setSelectBall = (id, isSelect) => {
    let oldSelectBalls = this.state.selectBalls;
    oldSelectBalls[id] = isSelect;
    this.setState({ selectBalls: oldSelectBalls });
    this.props.getBackBalls(this.state.selectBalls);
  };
  createBalls = (num) => {
    let res = [];
    for (let i = 1; i <= num; i++) {
      res.push(
        <Ball
          key={"back" + i}
          isSelect={false}
          style={{ borderColor: "#DEE5EB" }}
          setSelectBall={this.setSelectBall}
          dataId={i}
          source={"back"}
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
    let OldBackBallsObject = this.state.backBallsObject;
    OldBackBallsObject[ref.props.dataId] = ref;
    this.setState({
      backBallsObject: OldBackBallsObject,
    });
  };
  createSelect = (num) => {
    let res = [];
    for (let i = 2; i <= num; i++) {
      res.push(<option key={"select" + i}>{i}</option>);
    }
    return <select ref="backSelect">{res}</select>;
  };
  deletebtn = () => {
    this.state.selectBalls.map((value, index) => {
      if (value) {
        //判断如果是选中，执行改球的点击方法
        this.state.backBallsObject[index].selectBall();
      }
    });
  };
  backRandSelect = () => {
    //现将原有的清空
    this.deletebtn();
    //再随机选
    let randoms = random(
      1,
      this.props.num,
      parseInt(this.refs.backSelect.value)
    );
    // console.log(this.state.backBallsObject);

    randoms.map((value) => {
      value = parseInt(value);
      setTimeout(() => {
        this.state.backBallsObject[value].selectBall();
      }, 10);
    });
  };
  render() {
    return (
      <div className="wsb-back-contain">
        <div className="wsb-back-title">
          —<span className="wsb-back-title-span">后区</span>— 至少选
          <span className="wsb-back-title-span" style={{ fontSize: "14px" }}>
            2
          </span>
          个
        </div>
        <div className="wsb-back-balls">{this.createBalls(this.props.num)}</div>
        <div className="wsb-front-select-div">
          {this.createSelect(this.props.num)}
          <span className="btn" onClick={this.backRandSelect}>
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

export default Back;
