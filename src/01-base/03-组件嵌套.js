import React, { Component } from 'react'

// Navbar的孩子组件
class Child extends Component{
    render(){
        return <div>child</div>
    }
}

class Navbar extends Component{
    render(){
        return <div>navbar
            <Child></Child>
        </div>
    }
}

function Swiper(){
    return <div>swiper</div>
}

// 箭头函数：
const Tabbar = ()=><div>tabbar</div>

export default class App extends Component {
  render() {
    return (
      <div>03-组件嵌套
        
                <Navbar></Navbar>
                <Swiper></Swiper>
                <Tabbar></Tabbar>
      </div>
    )
  }
}
