import React, { Component } from "react";
import BetterScroll from "better-scroll";

export default class App extends Component {
  state = {
    list: [
      "111",
      "222",
      "333",
      "444",
      "555",
      "666",
      "777",
      "888",
      "999",
      "000",
      "aaa",
      "bbb",
      "ccc",
      "ddd",
      "eee",
      "fff",
      "ggg",
    ],
  };
  //   在渲染前不会得到li标签
  UNSAFE_componentWillMount() {
    console.log(document.querySelectorAll(".lists"));
  }
  //   在渲染结束后，就可以找到li标签
  componentDidMount() {
    console.log(document.querySelectorAll(".lists"));
    // 在渲染结束后，使用才有效
    new BetterScroll(".lists");
  }
  render() {
    return (
      <div>
        <div
          className="lists"
          style={{ background: "aqua", height: "200px", overflow: "hidden" }}
        >
          <ul>
            {this.state.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
