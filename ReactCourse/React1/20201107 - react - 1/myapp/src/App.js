import { Component } from "react"
import "./index.css";
import Li from "./li";
import data from "./data";
// 组件
/*
  类组件：
    1. 创建类组件必须要继承自 React.Component
    2. 在 组件中必须要有 render 方法,在render方法的return中定义该组件要输出的视图
  组件关系：
    在 A 组件中，调用了 B 组件，则 B组件称之为 A 的子组件，A 为 B 的父组件  
  props：
    当父组件调用 子组件可以将 要传递给 子组件的信息添加在子组件的属性中，在子组件中可通过 props 属性来接收父组件传递过来的信息。

*/
class App extends Component {
  render() {
    return <ul id="menu">
        {data.map((item,index)=>{
            return <Li 
              key={index} 
              data={item}
            />
        })}
    </ul>
  }
}


export default App;