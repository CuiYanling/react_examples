import React, { Component } from "react";

export default class App extends Component {
  // 方法一：
  //   state = {
  //     mytext: "收藏",
  //     myshow: true,
  //   };

  //   方法二：
  constructor() {
    super();
    this.state = {
      mytext: "收藏",
      myshow: true,
    };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            // react修改状态————this.setState（重新赋值）
            // 修改的是一个对象，可以一次修改多个值
            this.setState({
              myshow: !this.state.myshow,
            });
          }}
        >
          {this.state.myshow ? "收藏" : "取消收藏"}
        </button>
      </div>
    );
  }
}
