import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div style={{ background: "orange", height: "30px" }}>
        {this.props.children}
        <span>顶部</span>
      </div>
    );
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div>
        <div style={{ background: "aqua", width: "150px" }}>
          <ul>
            <li>11111111</li>
            <li>11111111</li>
            <li>11111111</li>
            <li>11111111</li>
            <li>11111111</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default class App extends Component {
  state = {
    isShow: true,
  };
  render() {
    return (
      <div>
        <Navbar>
          {/* 在Navbar组件中，留出button的位置即可，但不可以多写，不然Navbar就是一个只有插槽的空壳了 */}
          <button
            onClick={() => {
              this.setState({
                isShow: !this.state.isShow,
              });
            }}
          >
            抽屉
          </button>
        </Navbar>
        {this.state.isShow && <Sidebar></Sidebar>}
      </div>
    );
  }
}
