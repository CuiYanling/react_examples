import React, { Component } from "react";
import axios from "axios";
import "./css/03-filmList.css";

// 父组件：
export default class App extends Component {
  state = {
    filmList: [],
    detailVlaue: "",
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
          <FilmItem
            key={item.filmId}
            {...item}
            cylevent={(value) => {
              console.log(value);
              this.setState({
                detailVlaue: value,
              });
            }}
          ></FilmItem>
        ))}
        <FilmDetail detailVlaue={this.state.detailVlaue}></FilmDetail>
      </div>
    );
  }
}

// 受控组件：
class FilmItem extends Component {
  render() {
    console.log(this.props);
    let { name, poster, nation, grade, synopsis } = this.props;

    return (
      <div className="films">
        <img
          src={poster}
          onClick={() => {
            // console.log(synopsis);
            this.props.cylevent(synopsis);
          }}
        ></img>
        <h4>{name}</h4>
        <div>地区：{nation}</div>
        <div>观众评分：{grade}</div>
      </div>
    );
  }
}

// 影片细节组件
class FilmDetail extends Component {
  render() {
    // console.log(this.props);
    let { detailVlaue } = this.props;
    return (
      <div className="filmDetail">
        <h5>{detailVlaue}</h5>
      </div>
    );
  }
}
