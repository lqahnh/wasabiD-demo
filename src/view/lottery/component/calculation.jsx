/**
 * 计算多少注
 */
import React, { Component } from "react";
import "./Sass/calculation.css";
import { combinationNum, formatMoney } from "../../../component/libs/tool";
class Calculation extends Component {
  constructor(props) {
    super(props);
    this.state = { totleNum: 0, totleMoney: 0 };
  }
  //   componentWillReceiveProps(nextProps) {
  //     // 父组件重传props时就会调用这个方法
  //     this.setState({ totleNum: 10 });
  //   }
  setTotleNum = () => {
    let frontNumCount = combinationNum(this.props.frontNum, 5);
    let backNumCount = combinationNum(this.props.backNum, 2);
    let thistotleNum = frontNumCount * backNumCount;
    // console.log(frontNumCount, backNumCount);

    this.setState({ totleNum: thistotleNum, totleMoney: thistotleNum * 2 });
  };
  render() {
    return (
      <div className="swb-num-info">
        您选择了 <span style={{ color: "#ff8a00" }}>{this.props.frontNum}</span>{" "}
        个前区号码，
        <span style={{ color: "#6857ca" }}>{this.props.backNum}</span>
        个后区号码，共{" "}
        <span style={{ color: "#f63f3f" }}>{this.state.totleNum}</span> 注，共
        <span style={{ color: "#f63f3f" }}>
          {formatMoney(this.state.totleMoney)}
        </span>
        元
      </div>
    );
  }
}

export default Calculation;
