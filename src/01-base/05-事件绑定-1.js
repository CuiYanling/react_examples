import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <input></input>
        <button
          onClick={() => {
            console.log("第一种");
          }}
        >
          add1
        </button>
        <button onClick={this.handleClick2}>add2</button>
        <button onClick={this.handleClick3}>add3</button>
        <button
          onClick={() => {
            // 执行匿名函数，调用外部方法
            this.handleClick4();
          }}
        >
          add4
        </button>
      </div>
    );
  }
  // 在外部定义函数
  handleClick2() {
    console.log("第二种");
  }

  handleClick3 = () => {
    console.log("第三种");
  };

  handleClick4 = () => {
    console.log("第四种");
  };
}
