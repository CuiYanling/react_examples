import React, { Component } from "react";

export default class App extends Component {
  state = {
    isCreated: true,
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              isCreated: !this.state.isCreated,
            });
          }}
        >
          click
        </button>
        {/* {this.state.isCreated?<Child/>:""} */}
        {this.state.isCreated && <Child />}
      </div>
    );
  }
}

class Child extends Component {
  render() {
    return <div>child</div>;
  }

  componentDidMount() {
    window.onresize = () => {
      console.log("resize");
    };

    this.timer = setInterval(() => {
      console.log("111");
    }, 1000);
  }

  //在销毁的函数中，可以清除一些定义的方法、函数等
  componentWillUnmount() {
    console.log("componentWillUnmount");

    window.onresize = null;

    clearInterval(this.timer);
  }
}
