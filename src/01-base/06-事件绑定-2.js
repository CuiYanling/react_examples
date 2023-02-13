import React, { Component } from "react";

export default class App extends Component {
  a = "这里是a";
  render() {
    return (
      <div>
        <input></input>
        <button
          onClick={() => {
            console.log("第一种", this.a);

            // 此函数中的this指向与外部render中的this指向相同
          }}
        >
          add1
        </button>
        {/* 解决add2的this指向问题，加上.bind(this) */}
        <button onClick={this.handleClick2.bind(this)}>add2</button>
        <button onClick={this.handleClick3}>add3</button>
        <button
          onClick={() =>
            // 方便传参，推荐爱add4方法！！！
            // 执行匿名函数，调用外部方法
            this.handleClick4()
          }
        >
          add4
        </button>
      </div>
    );
  }
  // 在外部定义函数
  handleClick2() {
    console.log("第二种", this.a);
  }

  handleClick3 = () => {
    console.log("第三种", this.a);
  };

  handleClick4 = () => {
    console.log("第四种", this.a);
  };
}

/*
  call, 改变this， 自动执行函数
  apply,改变this， 自动执行函数
  bind, 改变this， 不会自动执行函数，手动加括号执行函数
*/
var obj1 = {
  name: "obj1",
  getName() {
    console.log(this.name);
  },
};

var obj2 = {
  name: "obj2",
  getName() {
    console.log(this.name);
  },
};
obj1.getName.call(obj2);
obj1.getName.apply(obj2);
obj1.getName.bind(obj2)();
obj2.getName();
