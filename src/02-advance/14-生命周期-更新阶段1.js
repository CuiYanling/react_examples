import React, { Component } from "react";

export default class App extends Component {
  state = {
    myname: "cyl",
  };
  render() {
    // render中不要写this.setState({})，会死循环！！！！！！
    return (
      <div>
        <button onClick={this.handleClick}>点击更改</button>
        <div>{this.state.myname}</div>
        {console.log("render")}
      </div>
    );
  }
  handleClick = () => {
    this.setState({
      myname: "cyr",
    });
  };
  //   生命周期：
  //   更新前：(拿到旧值)
  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  //   更新后：（拿到新值），再去操作DOM
  componentDidUpdate(prevProps, prevState) {
    // 提供了两个属性：一个老属性，一个老状态
    console.log("componentDidUpdate");
    // 此处也可以使用  new BetterScroll(".lists");
  }
}
