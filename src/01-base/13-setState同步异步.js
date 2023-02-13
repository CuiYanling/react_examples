import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 1,
  };
  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.handleAdd}>同步逻辑-增加</button>
        <button onClick={this.handleAdd2}>异步逻辑-增加</button>
      </div>
    );
  }

  handleAdd = () => {
    console.log(this.state.count);

    this.setState(
      {
        count: this.state.count + 1,
      },
      // 支持第二个参数，可以获取到更新的数据
      () => {
        console.log(this.state.count);
      }
    );

    // console.log(this.state.count);

    this.setState({
      count: this.state.count + 1,
    });

    console.log(this.state.count);

    this.setState({
      count: this.state.count + 1,
    });

    console.log(this.state.count);
  };

  handleAdd2 = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      });

      console.log(this.state.count);

      this.setState({
        count: this.state.count + 1,
      });

      console.log(this.state.count);

      this.setState({
        count: this.state.count + 1,
      });

      console.log(this.state.count);
    }, 1000);
  };
}

// setState处于 同步逻辑中，异步更新 状态 和 DOM
// setState支持第二个参数（回调函数），可以获取到更新的数据

// setState处于 异步逻辑中，同步更新 状态 和 DOM
