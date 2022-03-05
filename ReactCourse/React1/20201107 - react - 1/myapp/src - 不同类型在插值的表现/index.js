import React from "react";
import ReactDOM from "react-dom";
/*
  在结构中插入数据
    在内容中插入：
      基本类型：
        - 字符串、数字：原样输出
        - 布尔值、空、未定义 会被忽略
      符合类型：
        数组：去掉,号，直接输出
        对象：不支持对象的直接输出, (ReactNode)
        function: 不支持function的直接输出
*/
let data = true;//123;//"hello 各位"
//let data2 = {inner:"输出不了"};//["123","234"]
let node = <p>123</p>
function fn(params) {
    return "abc";
} 
fn.data = 123
let div = <div className="box" id="box">
      {/* 基本类型 */}
      <span>{data}</span>
      <span>span2</span>
      {/* 复合类型 */}
      <div>
          {/* {data2} */}
          {/* {fn()} */}
          {node}
      </div>
  </div>;
ReactDOM.render(
  div,
  document.querySelector("#root")
)
