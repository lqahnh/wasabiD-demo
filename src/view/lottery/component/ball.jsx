import React, { Component } from "react";
import "./Sass/ball.css";
class Ball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelect: this.props.isSelect,
    };
  }
  selectBall = () => {
    if (this.state.isSelect) {
      this.setState({
        isSelect: false,
      });
    } else {
      this.setState({
        isSelect: true,
      });
    }
  };
  componentDidMount() {
    this.props.onRef(this);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.isSelect !== this.state.isSelect) {
      this.props.setSelectBall(this.props.dataId, this.state.isSelect);
      if (this.state.isSelect) {
        let backgroundColor = "#FF8A00";
        if (this.props.source === "back") {
          backgroundColor = "#6857CA";
        }
        this.refs.ballDiv.style.background = backgroundColor;
        this.refs.ballNumDiv.style.color = "#ffffff";
      } else {
        this.refs.ballDiv.style.background = "#ffffff";
        this.refs.ballNumDiv.style.color = "#555555";
      }
    }
  }
  render() {
    return (
      <div
        ref="ballDiv"
        className="ball"
        onClick={this.selectBall}
        style={this.props.style}
      >
        <div ref="ballNumDiv">{this.props.children}</div>
      </div>
    );
  }
}

export default Ball;
