// jsx == js+xml
import React from "react";
// import ReactDOM  from "react-dom"
import { createRoot } from "react-dom/client";
// 引入 组件：
import App from "./02-advance/09-非父子组件通信-context";

// render:（17以及以前）
// ReactDOM.render('111',document.getElementById('root'))

// ReactDOM.render(<div><b>1111</b></div>,document.getElementById("root"))

// createRoot:（18之后）
createRoot(document.getElementById("root")).render(<App></App>);
