import { Component } from "react";
import "./App.css";
import Li from "./Li";
import data from "./data";
//组件
/**
 类组件
 1.创建类组件必须要继承自React.Component
 2.在组件中必须要有render方法.在render方法的return中定义该组件要输出的视图

 组件关系：
    在A组件中，调用了B组件，B为A的子组件，A为B的父组件

 props
    当父组件调用子组件可以将要传递给子组件的信息添加在子组件的属性中
    在子组件中可以通过props来接收来自父组件的信息
 */
class App extends Component {
  render() {
    return (
      <ul id="menu">
        {data.map((item,index)=> {
          return <Li key={index} data={item}/>
        })}
      </ul>
    );
  }
}


/**
    state 状态，组件会随着状态的改变进行视图更新
    当状态需要修改时，可以调用setState的方法修改组件的状态
*/
// class App extends Component {
//   state = {
//     count:1
//   }
//   render() {
//     let {count} = this.state;
//     return (
//       <div>
//         <p>{count}</p>
//         <button onClick={()=>{
//           this.setState({
//             count:count+1
//           })
//         }}>递增</button>
//       </div>
//     );
//   }
// }

export default App;


