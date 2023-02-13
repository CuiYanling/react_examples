import React, { Component } from "react";
// 引入css外部样式
import "./css/02-maizuo.css";
// 引入组件
import Film from "./maizuocomponent/Film";
import Center from "./maizuocomponent/Center";
import Cinema from "./maizuocomponent/Cinema";

export default class App extends Component {
  state = {
    list: [
      { id: 1, text: "电影" },
      { id: 2, text: "影院" },
      { id: 3, text: "我的" },
    ],
    current: 1,
  };
  // 组件渲染—————函数表达式
  which() {
    switch (this.state.current) {
      case 1:
        return <Film></Film>;
      case 2:
        return <Cinema></Cinema>;
      case 3:
        return <Center></Center>;
      default:
        return null;
    }
  }
  render() {
    return (
      <div>
        {/* 组件显示 方法1——————条件渲染 */}
        {/* {this.state.current === 1 && <Film></Film>}
        {this.state.current === 2 && <Cinema></Cinema>}
        {this.state.current === 3 && <Center></Center>} */}

        {/* 组件显示 方法2——————函数表达式 */}
        {this.which()}

        <ul>
          {this.state.list.map((item) => (
            <li
              key={item.id}
              className={this.state.current === item.id ? "active" : ""}
              onClick={() => {
                this.handleClick(item.id);
              }}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  // 点击事件
  handleClick(id) {
    console.log(id);
    // 修改current的状态,重新渲染后，视图更改
    this.setState({
      current: id,
    });
  }
}
