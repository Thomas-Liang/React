import React from "react";
import ReactDOM from "react-dom";
/*
  插值表达式:
    JS表达式：产生值的一组代码的集合
    表达式：
      变量，运算符，函数调用
    条件渲染:
      ||: 条件不成立时返回某些内容
      &&：条件成立时返回某些内容
      ?:  条件？成立时返回内容:不成立时返回内容
      函数
    列表渲染：
      批量渲染一组元素
      在 React 中要做列表渲染，就想想办法将 内容组织成一个数组，借助数组来进行列表渲染.
      做列表渲染时，一定记得设置key，key暂时先用 数组的索引
*/
// let data = [
//   "数据-1",
//   "数据-2",
//   "数据-3"
// ];
// let li = data.map((item)=>{
//   return <li>{item}</li>
// });
let data = {
  a: {
    inner:"数据-a"
  },
  b: {
    inner:"数据-b"
  },
  c: {
    inner:"数据-c"
  }
};
let li = Object.keys(data).map((item,index)=>{
  return <li key={index}>{data[item].inner}</li>
});
console.log(li);
let ul=<ul>{li}</ul>
ReactDOM.render(
  ul,
  document.querySelector("#root")
)
