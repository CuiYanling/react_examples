import React from "react";

// 函数式组件
// 形参！！！props可以写其他的名字
export default function Sidebar(props) {
  console.log(props);
  let { bg, position } = props;
  //   靠左边
  var obj1 = {
    left: 0,
  };
  //   靠右边
  var obj2 = {
    right: 0,
  };
  //   其他属性
  var obj = {
    background: bg,
    width: "100px",
    position: "fixed",
  };
  //   总属性
  var style = position === "left" ? { ...obj, ...obj1 } : { ...obj, ...obj2 };
  return (
    <div style={style}>
      <ul>
        <li>侧边栏</li>
        <li>侧边栏</li>
        <li>侧边栏</li>
        <li>侧边栏</li>
        <li>侧边栏</li>
        <li>侧边栏</li>
      </ul>
    </div>
  );
}

// 属性验证：不可以像类组件那样写在里面,只能在这下面写，例：
// Sidebar.propTypes = {};
