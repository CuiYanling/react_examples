import React, { Component } from "react";
import "./css/10-条件渲染.css";

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
            //   添加进去新元素后，清空input框
            this.mytext2.current.value = "";
          }}
        >
          add
        </button>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={item.id}>
              {item.mytext2}
              {/* 事件绑定 */}
              {/* <button onClick={this.handleDelete.bind(this, index)}>del</button> */}
              <button
                onClick={() => {
                  this.handleDelete(index);
                }}
              >
                del
              </button>
            </li>
          ))}
        </ul>
        {/* 条件渲染   方案1： */}
        {/* {this.state.list.length === 0 ? <div>空空如也</div> : null} */}

        {/* 条件渲染   方案2： */}
        {/* {this.state.list.length === 0 && <div>空空如也</div>} */}

        {/* 条件渲染是创建删除？还是显示隐藏？——————动态~创建删除 */}

        {/* 如果想要是显示+隐藏，就要使用className,例如：（一开始就存在改节点 */}
        <div className={this.state.list.length === 0 ? "" : "hidden"}>空空如也</div>
      </div>
    );
  }

  //   删除按钮：
  handleDelete(index) {
    console.log("oh", index);
    // 删除数组，不要直接改变原状态!!!
    let newlist = this.state.list.concat();
    newlist.splice(index, 1);
    this.setState({
      list: newlist,
    });
  }
}
// 为了列表的复用和重排。设置key值，提高性能
// 理想key值是：item.id
// 如果不涉及到删除、增加、重排功能的话，也可以使用索引作为key值
