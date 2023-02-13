import React, { Component } from "react";
import axios from "axios";
// 引入css外部样式
import "./css/02-maizuo.css";
import BetterScroll from "@better-scroll/core";

export default class Cinema extends Component {
  state = {
    cinemaList: [],
    copyCinemaList: [],
  };

  // 暂且在构造函数中请求数据，之后需要在生命周期中请求数据~
  constructor() {
    super();
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6309937",
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16759931145895830456238081","bc":"110100"}',
        "X-Host": "mall.film-ticket.cinema.list",
      },
    }).then((res) => {
      console.log(res.data.data.cinemas);
      // 修改影院列表
      this.setState(
        {
          cinemaList: res.data.data.cinemas,
          copyCinemaList: res.data.data.cinemas,
        },
        () => {
          new BetterScroll(".wrapper");
        }
      );
    });
  }

  render() {
    return (
      <div className="all-page">
        <input onInput={this.handleInput}></input>
        <div
          className="wrapper"
          style={{ height: "300px", overflow: "hidden" }}
        >
          <div>
            {this.state.cinemaList.map((item) => (
              <dl key={item.cinemaId}>
                <dd>{item.name}</dd>
                <dt>{item.address}</dt>
              </dl>
            ))}
          </div>
        </div>
      </div>
    );
  }
  handleInput = (event) => {
    console.log("input", event.target.value);
    let newList = this.state.copyCinemaList.filter(
      (item) =>
        item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
        item.address.toUpperCase().includes(event.target.value.toUpperCase())
    );
    // console.log(newList);

    this.setState({
      cinemaList: newList,
    });
  };
}

// 问题1：
// 每次搜索之后，再搜索会在上次搜索的结果中进行，导致每次数据的不完整
// 解决方法：
// 两份数据，一份用于修改并显示与视图上-CinemaList；一份用于仅用于搜索-copyCinemaList（此数据一直是总数据）

// 2、这个地方的betterScroll的使用就不需要放在setstate的回调函数中，因为axios本身就是一个异步
