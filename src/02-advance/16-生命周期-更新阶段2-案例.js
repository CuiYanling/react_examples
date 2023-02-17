import React, { Component } from "react";

// 子组件
class Box extends Component {
  // 每次更改都会使整个数据进行diff对比，但有些不需要修改，通过scu进行阻止即可：
  shouldComponentUpdate(nextProps) {
    if (
      this.props.current === this.props.index ||
      nextProps.current === nextProps.index
    ) {
      return true;
    }
    return false;
  }
  render() {
    console.log("render");
    return (
      <div
        style={{
          background: "aqua",
          width: "100px",
          height: "100px",
          border:
            this.props.current === this.props.index
              ? "3px solid black"
              : "3px solid red",
          float: "left",
          margin: "10px",
        }}
      ></div>
    );
  }
}

export default class App extends Component {
  state = {
    list: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"],
    current: 4,
  };
  render() {
    return (
      <div>
        <input
          type="number"
          value={this.state.current}
          onChange={(event) => {
            this.setState({
              current: Number(event.target.value),
            });
          }}
        ></input>
        <div
          style={{
            overflow: "hidden",
          }}
        >
          {this.state.list.map((item, index) => (
            <Box key={item} current={this.state.current} index={index}></Box>
          ))}
        </div>
      </div>
    );
  }
}
