import React, { Component } from "react";

export default class App extends Component {
  username = React.createRef();
  render() {
    return (
      <div>
        <input ref={this.username} defaultValue="cyl"></input>
        <button onClick={this.handleEnter}>登录</button>
        <button onClick={this.handleClear}>重置</button>
      </div>
    );
  }
  //   登录
  handleEnter = () => {
    console.log(this.username.current.value);
  };
  //   重置
  handleClear = () => {
    this.username.current.value = "";
  };
}


// 此非受控表单设置默认值的时候，只能使用defaultValue，不可以使用Value
// 如果使用Value则变为只读“组件”