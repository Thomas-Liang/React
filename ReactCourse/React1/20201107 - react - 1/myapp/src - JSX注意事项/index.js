import React,{Fragment} from "react";
import ReactDOM from "react-dom";
/*
  JSX使用时的注意事项：
  - 它可以作为值使用
  - 它并不是字符串
  - 它可以配合JavaScript 表达式一起使用
  - 必须有,且只有一个顶层的包含元素 - React.Fragment
      - Fragment 文档碎片，作为包含容器存在，并不会渲染到真实DOM中
  - JSX 不是html，很多属性在编写时不一样
    - className
    - style 
  - 列表渲染时，必须有 key 值
  - 在 JSX 所有标签必须闭合
  - 组件的首字母一定大写，标签一定要小写
*/
let div = <Fragment>
  <div
    className={false ? "div" : "box"}
    style={{
      width: "100px",
      height: "100px",
      background: "red"
    }}
  >div</div>
  <input />
  <div>div2</div>
</Fragment>;
//console.log(div);
ReactDOM.render(
  div,
  document.querySelector("#root")
)
