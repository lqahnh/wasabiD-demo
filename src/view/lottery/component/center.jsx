import React, { Component } from "react";
import "./Sass/center.css";
import { randomArr, cmn, formatBallNum } from "../../../component/libs/tool";
class Center extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClick: false,
      selectedData: [],
    };
  }
  clearList = () => {
    this.setState({
      selectedData: [],
      isClick: false,
    });
  };
  randomSelect = (count) => {
    return () => {
      //传入多少注
      let orangeData = randomArr(1, 35, 5, count);
      let blueData = randomArr(1, 12, 2, count);
      let data = [];
      orangeData.map((value, index) => {
        data.push({
          orange: value,
          blue: blueData[index],
        });
      });
      //   console.log(data);
      this.setState({
        selectedData: [...this.state.selectedData, ...data],
      });
    };
  };
  createOnehan = () => {
    if (this.state.isClick) {
      return;
    }
    let backBalls = [];
    this.props.backBalls.map((value, index) => {
      if (value) {
        backBalls.push(formatBallNum(index));
      }
    });
    let frontBalls = [];
    this.props.frontBalls.map((value, index) => {
      if (value) {
        frontBalls.push(formatBallNum(index));
      }
    });
    if (backBalls.length >= 2 && frontBalls.length >= 5) {
      let rsfrontBalls = cmn(frontBalls, 5);
      let rsbackBalls = cmn(backBalls, 2);
      let rsBalls = [];
      let count = 0;
      for (let i = 0; i < rsfrontBalls.length; i++) {
        for (let j = 0; j < rsbackBalls.length; j++) {
          if (count === 100) {
            break;
          }
          rsBalls.push({
            orange: rsfrontBalls[i],
            blue: rsbackBalls[j],
          });
          count++;
        }
      }
      this.setState({
        selectedData: [...this.state.selectedData, ...rsBalls],
        isClick: true,
      });
    }
  };
  deleteItem = (index) => {
    return () => {
      let oldselectedData = this.state.selectedData;
      //   console.log(oldselectedData);
      oldselectedData.splice(index, 1);
      this.setState({
        selectedData: oldselectedData,
      });
    };
  };
  render() {
    return (
      <div className="wsb-center-contain">
        <div className="wsb-center">
          {this.state.selectedData.map((value, index) => {
            return (
              <div className="wsb-center-row" key={"list" + index}>
                <span
                  className="list-del"
                  title="删除"
                  onClick={this.deleteItem(index)}
                >
                  X
                </span>
                <span className="list-orange">{value.orange.join(",")}</span>
                <span className="list-blue">{value.blue.join(",")}</span>
                <span className="list-end">[ 单式机选 1注 2元 ]</span>
              </div>
            );
          })}
        </div>
        <div className="wsb-div-right">
          <button className="wsb-div-right-btn" onClick={this.randomSelect(1)}>
            机选1注
          </button>
          <button className="wsb-div-right-btn" onClick={this.randomSelect(5)}>
            机选5注
          </button>
          <button className="wsb-div-right-btn" onClick={this.createOnehan}>
            生成前100注
          </button>
          <button
            className="wsb-div-right-btn color-one"
            onClick={this.clearList}
          >
            清空列表
          </button>
        </div>
      </div>
    );
  }
}

export default Center;
