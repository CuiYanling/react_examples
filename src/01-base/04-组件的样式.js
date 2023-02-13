import React, { Component } from "react";
// 引入css,     webpack支持
import "./css/01-index.css"; 

export default class App extends Component {
  render() {
    var myname = "cyl";
    var obj = {
      //需要书写驼峰写法！！！
      background: "yellow",
      fontSize: "30px",
    };
    
    return (
      <div>
        04-组件的样式
        {// 放在大括号中，可以书写逻辑计算
        }
        {myname}
        {10 > 20 ? "10大于20" : "10小于20"}
        {/* react推荐行内样式 */}
        <div style={obj}>背景颜色1</div>
        <div style={{ background: "red" }}>背景颜色2</div>
        <div className="active">背景颜色3</div>
        <div id="myapp">背景颜色4</div>
        <label htmlFor="username">用户名：</label>
        <input type="text" id="username" />
      </div>
    );
  }
}
