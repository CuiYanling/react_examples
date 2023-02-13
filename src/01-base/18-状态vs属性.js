import React, { Component } from "react";

// 孩子组件
class Child extends Component {
  render() {
    console.log(this.props);
    let { text } = this.props;
    return (
      <div>
        <button onClick={this.handleClick2}>子组件按钮</button>
        <div> {text}</div>
      </div>
    );
  }
  handleClick2 = () => {
    this.setState({
      text: "子组件修改值出现错误，因为子组件不可以修改父组件传来的属性，可以通过告知父组件，让父组件来修改~~~",
    });
  };
}

// 父组件
export default class App extends Component {
  state = {
    text: "父组件传来的~状态，父组件可以修改~~~子组件不可以修改~",
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>父组件按钮</button>
        <Child text={this.state.text}></Child>
      </div>
    );
  }
  //   父组件可以修改text的值
  handleClick1 = () => {
    this.setState({
      text: "父组件修改了~text的值",
    });
  };
}

// 注意：
// 状态：
// 1、父组件、子组件可以在自己的内部修改
// 2、状态不可以在父组件中获取
// 属性：
// 1、属性可以从父组件获取
// 2、属性由父组件修改，子组件没有权利修改
// 3、属性可以设置子组件的初始值
