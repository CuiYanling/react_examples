import React, { Component } from "react";

// 组件写里面了~ ：
class Field extends Component {
  state = {
    value: "",
  };
  //   取消按钮——清空数据
  clear() {
    this.setState({
      value: "",
    });
  }
  //   此处可以设置一些内部外部使用的方法
  render() {
    return (
      <div style={{ background: "aqua" }}>
        <label>{this.props.label}</label>
        <input
          type={this.props.type}
          onChange={(event) => {
            // console.log(event.target.value);
            this.setState({
              value: event.target.value,
            });
          }}
          //   value需要this.state.value，否则无法清空数据
          value={this.state.value}
        ></input>
      </div>
    );
  }
}

// 父组件：
export default class App extends Component {
  username = React.createRef();
  password = React.createRef();
  render() {
    return (
      <div>
        <Field label="姓名: " type="text" ref={this.username}></Field>
        <Field label="密码: " type="password" ref={this.password}></Field>
        <button
          onClick={() => {
            console.log(
              this.username.current.state.value,
              this.password.current.state.value
            );
          }}
        >
          登录
        </button>
        <button
          onClick={() => {
            this.username.current.clear();
            this.password.current.clear();
          }}
        >
          取消
        </button>
      </div>
    );
  }
}
