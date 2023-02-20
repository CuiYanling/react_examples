import React, { Component } from "react";

export default class CswiperItem extends Component {
  render() {
    return <div className="swiper-slide">{this.props.children}</div>;
  }
}
