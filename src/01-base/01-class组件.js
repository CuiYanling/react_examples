// class Test{
//     constructor(){
//         this.a=1;
//     }
//     testa(){
//         console.log("testa")
//     }
// }

// // 继承 extends ：
// class childTest extends Test{
//     testb(){
//         console.log("testb")
//     }
// }

// var obj = new Test()
// var obj2 = new childTest()
// obj.testa()
// obj2.testb()
// console.log(obj.a)


import React from "react";
class App extends React.Component{
    render(){
        // 最外层只能存在一个大的闭合标签（可以是div，也可以是其他）
        return <div>hello~类组件</div>
    }
}
// 导出：
export default App