import React, { Component } from "react";
import "../02-advance/css/05-swiper.css";
// swiper 引入的东西：
import Swiper, { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
Swiper.use([Navigation, Pagination]);

export default class App extends Component {
  state = {
    list: ["111", "222", "333"],
  };
  componentDidMount() {
    new Swiper(".swiper", {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }
  render() {
    return (
      <div>
        <div className="swiper">
          <div className="swiper-wrapper">
            {this.state.list.map((item) => (
              <div className="swiper-slide" key={item}>
                {item}
              </div>
            ))}
          </div>
          {/* <!-- 如果需要分页器 --> */}
          <div className="swiper-pagination"></div>

          {/* <!-- 如果需要导航按钮 --> */}
          {/* <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div> */}

          {/* <!-- 如果需要滚动条 --> */}
          {/* <div class="swiper-scrollbar"></div> */}
        </div>
      </div>
    );
  }
}
