import React, { Component } from "react";

// 子组件
class Child extends Component {
  render() {
    return (
      <div>
        子组件
        {this.props.children}
        {this.props.children[1]}
        {this.props.children[0]}
        {this.props.children[2]}
      </div>
    );
  }
}

// 父组件
export default class App extends Component {
  render() {
    return (
      <div>
        <Child>
          {/* 此处的元素，可以使用父组件的状态，而且可以在子元素中显示！ */}
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Child>
      </div>
    );
  }
}

// 好处：
// 1、为了复用:
//例如swiper轮播图：第一个人想轮播文字，第二个字想轮播图片，第三个人想轮播文字+图片，等等...
//如果在swiper组件中去判断轮播出来什么，那就会出现无数种可能性；
// 索性直接留出插槽（位置），让使用的人去上传进去。 

// 2、一定程度减少父子通信的繁琐代码，例如11插槽抽屉~
