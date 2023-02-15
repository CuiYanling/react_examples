import React, { Component } from "react";

export default class Tabbar extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.list.map((item) => (
            <li
              key={item.id}
              className={this.props.current === item.id ? "active" : ""}
              onClick={() => {
                this.props.cylevent(item.id);
              }}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
