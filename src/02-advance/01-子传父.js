import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div style={{ background: "orange", height: "30px" }}>
        <button
          onClick={() => {
            console.log(this.props);
            // 使父组件中的事件  执行！！！
            this.props.cylevent();
          }}
        >
          抽屉
        </button>
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
        <Navbar isShow={this.state.isShow} cylevent={this.handleShow}></Navbar>
        {this.state.isShow && <Sidebar></Sidebar>}
      </div>
    );
  }
  handleShow = () => {
    console.log("父组件动了~");
    this.setState({
      isShow: !this.state.isShow,
    });
  };
}
