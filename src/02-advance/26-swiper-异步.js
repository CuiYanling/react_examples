import React, { Component } from "react";
import "../02-advance/css/05-swiper.css";
// swiper 引入的东西：
import Swiper, { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
Swiper.use([Navigation, Pagination]);

export default class App extends Component {
  state = {
    list: [],
  };
  componentDidMount() {
    // 异步操作，应该注意new的位置；
    // 应该在数据加载出来之后，再进行new操作，不然只会new空数组，不会对数据起到作用。
    // 此处有两个位置:
    // 1、在setTimeout后面
    // 2、在更新之后（生命周期中）
    setTimeout(() => {
      this.setState({
        list: ["aaa", "bbb", "ccc"],
      });

      //   1、在setTimeout后面
      //   new Swiper(".swiper", {
      //     loop: true, // 循环模式选项
      //     // 如果需要分页器
      //     pagination: {
      //       el: ".swiper-pagination",
      //     },
      //   });
    });
  }

  // 2、在更新之后（生命周期中）
  componentDidUpdate() {
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
        </div>
      </div>
    );
  }
}

// 这个样子引入swiper还是麻烦的，需要引入Swiper、css、
// 当使用分页器等其他按钮的时候，还需要单独引入
// 所以在27-中，我们封装一下swiper！！！
