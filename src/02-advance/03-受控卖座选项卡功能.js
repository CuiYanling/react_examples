import React, { Component } from "react";
// 引入css外部样式
import "./css/02-maizuo.css";
// 引入组件
import Film from "./maizuocomponent2/Film";
import Center from "./maizuocomponent2/Center";
import Cinema from "./maizuocomponent2/Cinema";
import Tabbar from "./maizuocomponent2/Tabbar";
import Navbar from "./maizuocomponent2/Navbar";

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
        <Navbar
          myevent={() => {
            this.setState({
              current: 3,
            });
          }}
        ></Navbar>

        {/* 组件显示 方法1——————条件渲染 */}
        {/* {this.state.current === 1 && <Film></Film>}
        {this.state.current === 2 && <Cinema></Cinema>}
        {this.state.current === 3 && <Center></Center>} */}

        {/* 组件显示 方法2——————函数表达式 */}
        {this.which()}
        <Tabbar
          cylevent={this.handlechange}
          list={this.state.list}
          current={this.state.current}
        ></Tabbar>
      </div>
    );
  }
  handlechange = (id) => {
    console.log(id);
    this.setState({
      current: id,
    });
  };
}
