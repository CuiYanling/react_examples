import React, { Component } from "react";

export default class Tabbar extends Component {
  state = {
    list: [
      { id: 1, text: "电影" },
      { id: 2, text: "影院" },
      { id: 3, text: "我的" },
    ],
    current: 1,
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((item) => (
            <li
              key={item.id}
              className={this.state.current === item.id ? "active" : ""}
              onClick={() => {
                this.handleClick(item.id);
                this.props.cylevent(item.id);
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
