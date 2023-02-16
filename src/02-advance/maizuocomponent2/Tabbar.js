import React, { Component } from "react";

// 类~形式的组件
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

// 函数式~组件
// const Tabbar = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <ul>
//         {props.list.map((item) => (
//           <li
//             key={item.id}
//             className={props.current === item.id ? "active" : ""}
//             onClick={() => {
//               props.cylevent(item.id);
//             }}
//           >
//             {item.text}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default Tabbar;
