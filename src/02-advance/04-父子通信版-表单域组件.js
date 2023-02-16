import React, { Component } from "react";

// 组件写里面了~ ：
class Field extends Component {
  render() {
    return (
      <div style={{ background: "aqua" }}>
        <label>{this.props.label}</label>
        <input
          type={this.props.type}
          onChange={(event) => {
            this.props.cylChange(event.target.value);
          }}
          value={this.props.value}
        ></input>
      </div>
    );
  }
}

//// 此处添加一个功能———需要在localStorage获取默认值，如果有默认值则显示出。
//// 此处可能出现一个小错误：input框的value值不能为空，如果从localStorage中获取默认值；
// 但是localStorage中没有默认值，此时input框会报错：input框的value不允许为null。

// 父组件：
export default class App extends Component {
  state = {
    // 在localStorage获取默认值:
    username: localStorage.getItem("username"),
    password: localStorage.getItem("password"),
  };
  render() {
    return (
      <div>
        <Field
          label="姓名: "
          type="text"
          cylChange={(usernamevalue) => {
            // console.log("传过来的值：", usernamevalue);
            // 根据子组件传过来的值，更新父组件的值
            this.setState({
              username: usernamevalue,
            });
          }}
          value={this.state.username}
        ></Field>
        <Field
          label="密码: "
          type="password"
          cylChange={(passwordvalue) => {
            // console.log("传过来的值：", passwordvalue);
            // 根据子组件传过来的值，更新父组件的值
            this.setState({
              password: passwordvalue,
            });
          }}
          value={this.state.password}
        ></Field>
        <button
          onClick={() => {
            console.log(this.state.username, this.state.password);
          }}
        >
          登录
        </button>
        <button
          onClick={() => {
            this.setState({
              username: "",
              password: "",
            });
          }}
        >
          取消
        </button>
      </div>
    );
  }
}
