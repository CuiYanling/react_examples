import React, { Component } from "react";

export default class App extends Component {
  state = {
    myname: "cyl",
    myage: 100,
  };

  static getDerivedStateFromProps(nextProps, nextState) {
    // 代替 componentWillMount 初始化，但是后续更新时，还会运行
    // console.log(this) //static静态 没有this
    console.log("getDrivedStateFromProps", nextState);
    return {
      myname:
        nextState.myname.substring(0, 1).toUpperCase() +
        nextState.myname.substring(1),
    };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              myname: "xiaoming",
            });
          }}
        >
          click
        </button>
        app - {this.state.myname}-{this.state.myage}
      </div>
    );
  }
}
