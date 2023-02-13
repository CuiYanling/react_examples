import React, { Component } from "react";

export default class App extends Component {
  state = {
    list: [
      { id: 1, name: "111" },
      { id: 2, name: "222" },
      { id: 3, name: "333" },
    ],
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
