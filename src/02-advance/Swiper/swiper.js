import React, { Component } from "react";
import "../css/05-swiper.css";

// swiper 引入的东西：
import Swiper, { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
Swiper.use([Navigation, Pagination]);

export default class CSwiper extends Component {
  componentDidMount() {
    new Swiper(".swiper", {
      loop: this.props.loop, // 循环模式选项
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
            {/* 此处不设置为死数据，留下插槽，让父级自定义插入即可~ */}
            {this.props.children}
            {/* <div className="swiper-slide">qqq</div>
            <div className="swiper-slide">ddd</div>
            <div className="swiper-slide">ggg</div> */}
          </div>
          {/* <!-- 如果需要分页器 --> */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    );
  }
}
