import React, { Component } from "react";

export default class App extends Component {
  // 防止重名，写成了变量，变量不允许重名
  mytext2 = React.createRef();
  // 初始数据：
  state = {
    list: [
      {
        id: 1,
        mytext2: "aaa",
      },
      {
        id: 2,
        mytext2: "bbb",
      },
      {
        id: 3,
        mytext2: "ccc",
      },
    ],
  };
  render() {
    return (
      <div>
        <input ref={this.mytext2}></input>
        <button
          onClick={() => {
            console.log("数据", this.mytext2.current.value);
            // 此函数中的this指向与外部render中的this指向相同
            // 点击按钮，增加数据，修改list数组(直接修改状态了)
            // 不要直接修改状态！！！
            // this.state.list.push(this.mytext2.current.value);
            // 新建一个变量
            let newlist = [...this.state.list];
            newlist.push({
              // 生成不同id的函数
              id: Math.random() * 1000,
              mytext2: this.mytext2.current.value,
            });
            // 修改视图
            this.setState({
              list: newlist,
            });
          }}
        >
          add
        </button>
        <ul>
          {this.state.list.map((item) => (
            <li key={item.id}>{item.mytext2}</li>
          ))}
        </ul>
      </div>
    );
  }
}
// 为了列表的复用和重排。设置key值，提高性能
// 理想key值是：item.id
// 如果不涉及到删除、增加、重排功能的话，也可以使用索引作为key值
