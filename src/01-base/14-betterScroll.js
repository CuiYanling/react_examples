import React, { Component } from "react";
// 引入
import BetterScroll from "@better-scroll/core";

export default class App extends Component {
  state = {
    list: [],
  };
  render() {
    return (
      <div>
        <button onClick={this.handleclick}>点击显示数据</button>
        <div
          className="wrapper"
          //   外边框 样式
          style={{ height: "200px", background: "aqua", overflow: "hidden" }}
        >
          {/* 渲染数据 */}
          <ul className="content">
            {this.state.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  handleclick = () => {
    var list = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
    ];
    this.setState(
      {
        list: list,
      },
    //   需要放在回调函数中，才能对数据起作用
      () => {
        new BetterScroll(".wrapper");
      }
    );
  };
}
