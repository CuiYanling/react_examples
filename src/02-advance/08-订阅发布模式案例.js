import React, { Component } from "react";
import axios from "axios";
import "./css/03-filmList.css";

// 调度中心
var bus = {
  list: [],
  // 订阅
  subscribe(callback) {
    // console.log(callback);
    // 存在list当中
    this.list.push(callback);
  },
  // 发布
  publish(text) {
    // 遍历列表，执行回调函数
    // console.log(this.list);
    this.list.forEach((callback) => {
      callback && callback(text);
    });
  },
};

// 父组件：
export default class App extends Component {
  state = {
    filmList: [],
  };
  constructor() {
    super();
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=649530",
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16759931145895830456238081","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      console.log(res.data.data.films);
      // 修改影院列表
      this.setState({
        filmList: res.data.data.films,
      });
    });
  }
  render() {
    return (
      <div>
        {this.state.filmList.map((item) => (
          <FilmItem key={item.filmId} {...item}></FilmItem>
        ))}
        <FilmDetail></FilmDetail>
      </div>
    );
  }
}

// 影片组件——受控组件：
class FilmItem extends Component {
  render() {
    console.log(this.props);
    let { name, poster, nation, grade, synopsis } = this.props;

    return (
      <div
        className="films"
        onClick={() => {
          //   console.log(synopsis);
          bus.publish(synopsis);
        }}
      >
        <img src={poster} alt=""></img>
        <h4>{name}</h4>
        <div>地区：{nation}</div>
        <div>观众评分：{grade}</div>
      </div>
    );
  }
}

// 影片细节组件
class FilmDetail extends Component {
  state = {
    info: "",
  };
  constructor() {
    super();
    bus.subscribe((info) => {
      //   console.log("细节组件", info);
      this.setState({
        info: info,
      });
    });
  }
  render() {
    return (
      <div className="filmDetail">
        <h5>{this.state.info}</h5>
      </div>
    );
  }
}
