import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div
        style={{ background: "aqua", textAlign: "center", overflow: "hidden" }}
      >
        <button style={{ float: "left" }}>返回</button>
        <span>Navbar-卖座电影</span>
        <button style={{ float: "right" }} onClick={() => this.props.myevent()}>
          我的
        </button>
      </div>
    );
  }
}
