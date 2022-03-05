import React from "react";
import ReactDOM from "react-dom";
/*
  JSX中特殊属性:
    class --> className
    style的值接收的是一个对象

*/
// let style = {
//   width: "100px",
//   height: "100px",
//   background:"red"
// }
// let div = <div 
//   className={false?"div":"box"}
//   style={style}
// >div</div>
let div = <div 
  className={false?"div":"box"}
  style={{
  width: "100px",
  height: "100px",
  background:"red"
}}
>div</div>
ReactDOM.render(
  div,
  document.querySelector("#root")
)
