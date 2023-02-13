import React, { Component } from "react";

export default class App extends Component {
    // 防止重名，写成了变量，变量不允许重名
  mytext2 = React.createRef();
  render() {
    return (
      <div>
        <input ref="mytext1"></input>
        <input ref={this.mytext2}></input>
        <button
          onClick={() => {
            console.log("第一个", this.refs.mytext1.value); //快废弃了
            console.log("第二个", this.mytext2.current.value);
            // 此函数中的this指向与外部render中的this指向相同
          }}
        >
          add1
        </button>
      </div>
    );
  }
}
// 为了列表的复用和重排。设置key值，提高性能
// 理想key值是：item.id
// 如果不涉及到删除、增加、重排功能的话，也可以使用索引作为key值