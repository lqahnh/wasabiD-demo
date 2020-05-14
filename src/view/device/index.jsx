import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
function Device() {
  useEffect(() => {
    initPercent("myCanvas", 80);
    initPercent("myCanvas2", 50);
  });
  const initPercent = function (canvas_id, num) {
    let c = document.getElementById(canvas_id);
    let ctx = c.getContext("2d");
    ctx.beginPath();
    let p = (num * 2) / 100;
    ctx.arc(200, 70, 65, 0, Math.PI * p);
    ctx.strokeStyle = "#ff7f50";
    ctx.lineWidth = 8;
    // 设置水平对齐方式
    ctx.textAlign = "center";
    // 设置垂直对齐方式
    ctx.textBaseline = "alphabetic";
    ctx.font = "30px bold 黑体";
    ctx.fillText(num + "%", 200, 80);
    ctx.stroke();
  };
  return (
    <div>
      <div className="top">下次项目发布：20200511 19:00</div>
      <div className="list">
        <div className="list-row">
          <div className="list-left">月月赚：18343467</div>
          <div className="list-right">
            剩余可投：<span style={{ color: "#ff7f50" }}>888,000</span>元
          </div>
        </div>
        <div className="list-row">
          <div className="list-row-left">
            <div className="list-row-left-text">14.2%</div>
            <div className="list-row-left-text-2">往年年化收益率</div>
          </div>
          <div className="list-row-left">
            <div className="list-row-left-text-3">12个月</div>
            <div className="list-row-left-text-4">期限</div>
          </div>
          <div className="list-row-left">
            <canvas id="myCanvas" className="myCanvas"></canvas>
          </div>
        </div>
      </div>
      <div className="list">
        <div className="list-row">
          <div className="list-left">月月赚：18343467</div>
          <div className="list-right">
            剩余可投：<span style={{ color: "#ff7f50" }}>888,000</span>元
          </div>
        </div>
        <div className="list-row">
          <div className="list-row-left">
            <div className="list-row-left-text">14.2%</div>
            <div className="list-row-left-text-2">往年年化收益率</div>
          </div>
          <div className="list-row-left">
            <div className="list-row-left-text-3">12个月</div>
            <div className="list-row-left-text-4">期限</div>
          </div>
          <div className="list-row-left">
            <canvas id="myCanvas2" className="myCanvas"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<Device />, document.getElementById("root"));
