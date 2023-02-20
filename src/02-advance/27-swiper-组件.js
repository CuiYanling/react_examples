import React, { Component } from "react";
import axios from "axios";
import CSwiper from "./Swiper/swiper";
import CswiperItem from "./Swiper/swiperItem";

export default class App extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    // setTimeout(()=>{
    //     this.setState({
    //         list:["aaaa","bbbb","Cccccc","ddddd"]
    //     })
    // },1000)

    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=211533",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16759931145895830456238081"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      console.log(res.data.data);
      this.setState({
        list: res.data.data.films,
      });
    });
  }
  render() {
    return (
      <div>
        {/* <CSwiper> */}
        {/* 第一种：这样父级还需要记住class名： className="swiper-slide" */}
        {/* <div className="swiper-slide">qqq</div>
          <div className="swiper-slide">ddd</div>
          <div className="swiper-slide">ggg</div> */}
        {/* </CSwiper> */}

        {/* 第二种：将class名也进行封装 */}
        <CSwiper loop={true}>
          {this.state.list.map((item) => (
            <CswiperItem key={item.filmId}>
              <img src={item.poster} alt={item.name} style={{width:"100%"}}></img>
            </CswiperItem>
          ))}
        </CSwiper>
      </div>
    );
  }
}
