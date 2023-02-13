import React, { Component } from "react";

export default class App extends Component {
  state = {
    username: "cyl",
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          //   默认的值：
          value={this.state.username}
        ></input>
        <button onClick={this.handleEnter}>登录</button>
        <button onClick={this.handleClear}>重置</button>

        {/* 当有其他组件的时候，受控组件~也更容易传值，例： */}
        {/* <Child myname={this.state.username}></Child> */}
      </div>
    );
  }
  //   检测到input发生变化，修改input的值：
  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      username: event.target.value,
    });
  };
  //   登录
  handleEnter = () => {
    console.log(this.state.username);
  };
  //   重置
  handleClear = () => {
    this.setState({
      username: "",
    });
  };
}

// 此非受控表单设置默认值的时候，只能使用defaultValue，不可以使用Value
// 如果使用Value则变为只读“组件”
