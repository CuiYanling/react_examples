import React, { Component } from "react";

export default class App extends Component {
  state = {
    myname: "cyr",
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              myname: "cyl",
            });
          }}
        >
          按钮
        </button>
        <div>{this.state.myname}</div>
      </div>
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    // return true; //应该更新
    //return false; //阻止更新
    // this.state  老的状态
    // nextState   新的状态
    // 写一些条件，来判断是否更新
    // if (this.state.myname !== nextState.myname) {
    if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
      return true;
    }
    return false;
  }
  UNSAFE_componentWillUpdate() {
    console.log("UNSAFE_componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
}
