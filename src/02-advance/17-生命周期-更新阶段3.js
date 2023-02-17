import React, { Component } from "react";

// 子组件
class Child extends Component {
  state = {
    title: "",
  };
  render() {
    return <div>Child</div>;
  }
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
    // 最先获得父组件传来的属性， 可以利用属性进行ajax或者逻辑处理。
    // 可以最先拿到最新属性，做些操作。例：把属性转化成孩子自己的状态。
    this.setState({
      title: nextProps.text + "cyl",
    });
  }
}

export default class App extends Component {
  state = {
    text: "11111111",
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              text: "22222222",
            });
          }}
        >
          按钮
        </button>
        <Child text={this.state.text}></Child>
      </div>
    );
  }
}
