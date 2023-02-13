import React, { Component } from "react";
import cylPropType from "prop-types";

// console.log(cylPropType)

export default class Navbar extends Component {
  state = {};
  static propTypes = {
    title: cylPropType.string,
    leftshow: cylPropType.bool,
    rightshow: cylPropType.bool,
  };
  static defaultProps = {
    leftshow: true,
  };
  render() {
    /* 父组件传来的属性，this.props接收 */
    /* 可以利用ES解构出来 */
    let { title, leftshow, rightshow } = this.props;
    console.log(title, leftshow, rightshow);

    return (
      <div>
        {/* // && 与 三目运算符 的作用相似 */}
        {leftshow && <button>返回</button>}
        Navbar___{title}
        {rightshow ? <button>Home</button> : ""}
      </div>
    );
  }
}

// 类属性（属性验证~）————————挪到上面去了~~~
// Navbar.propTypes = {
//   title: cylPropType.string,
//   leftshow: cylPropType.bool,
//   rightshow: cylPropType.bool,
// };

// 对象属性 && 类属性

// 对象需要new之后，才可以访问
// class Test {
//   a = 1;
// }
// let obj = new Test();
// console.log(obj.a);

// 类属性 不需要new初始化，就可以直接访问到属性
// Test.a = 100;
// console.log(Test.a);

// 类属性在这样会显得代码不规范，解决办法：将类属性放入对象中：
// 使用static区别，static就可以不需要new就可以访问到
class Test {
  a = 1;
  static a = 100;
}
let obj = new Test();
console.log(obj.a, Test.a);

// 可以应用于属性验证了~~~
