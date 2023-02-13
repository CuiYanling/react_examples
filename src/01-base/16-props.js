import React, { Component } from "react";
import Navbar from "./Navbar";

export default class App extends Component {
  render() {
    // 上面父组件传来一个对象
    var obj = {
      title: "标题",
      leftshow: true,
      rightshow: false,
    };
    return (
      <div>
        <div>
          <h2>首页</h2>
          <Navbar title="首页" leftshow={false} rightshow={false}></Navbar>
        </div>
        <div>
          <h2>列表</h2>
          {/* leftshow={true}  默认为true */}
          <Navbar title="列表" rightshow={false}></Navbar>
        </div>
        <div>
          <h2>购物车</h2>
          <Navbar title="购物车" leftshow={true} rightshow={true}></Navbar>
        </div>
        <div>
          <h2>我的</h2>
          <Navbar title="我的" leftshow={false} rightshow={true}></Navbar>
        </div>
        <div>
          <h2>测试</h2>
          <Navbar
            title={obj.title}
            leftshow={obj.leftshow}
            rightshow={obj.rightshow}
          ></Navbar>
          <h5>或者~直接利用ES中的：...obj ,也可以</h5>
          <Navbar {...obj}></Navbar>
        </div>
      </div>
    );
  }
}
