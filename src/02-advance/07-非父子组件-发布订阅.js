import React, { Component } from "react";

export default class App extends Component {
  render() {
    return <div>app</div>;
  }
}

var bus = {
  list: [],
  // 订阅
  subscribe(callback) {
    // console.log(callback);
    // 存在list当中
    this.list.push(callback);
  },
  // 发布
  publish(text) {
    // 遍历列表，执行回调函数
    // console.log(this.list);
    this.list.forEach((callback) => {
      callback && callback(text);
    });
  },
};

// 订阅者：
bus.subscribe((value) => {
  console.log("cyr", value);
});
bus.subscribe((value) => {
  console.log("cyl", value);
});

// 发布者！！！需要在订阅者之后
// 同步发布：
// bus.publish();
// &&
// 异步发布
setTimeout(() => {
  bus.publish("你好，请努力！");
}, 1000);

setTimeout(() => {
  bus.publish("你好，请加油！");
}, 3000);
