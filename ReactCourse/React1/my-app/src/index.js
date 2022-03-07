import ReactDOM from "react-dom";
import App from './App';
// import { Fragment } from "react";
/*
在结构中插入数据
  在内容中插入
    基本类型：
     字符串、数字：原样输出
     布尔值，空，未定义 会被忽略
    复合类型：
      数组: 去掉逗号，直接输出
      对象：不支持直接输出，除了ReactNode
      函数：不支持直接输出
*/
// let data = null//123;
// // let data2 = { name: "thomas"} //[123,234]
// let node = <p>123</p>
// let div = <div className="box" id="box">
// {/* 基本类型 */}
// <span>{data}</span>
// {/* 复合类型 */}
// {/* <span>{data2}</span> */}
// <div>{node}</div>
// </div>
/*
 插值表达式
    JS表达式： 产生值得一组代码的集合
    表达式：
      变量，运算符，函数调用
    条件渲染：
    ||:条件不成立返回内容
    &&:条件成立后返回内容
    "?:条件？成立时返回内容：不成立是返回内容
 */
// function getData(is) {
//   if (is < 5) {
//     return <h1>小于5</h1>;
//   } else if (is < 10) {
//     return <h1>小于10</h1>;
//   }
//   return <h1>大于10</h1>;
// }
// let div = <div>{getData(11)}</div>;
//列表渲染 批量渲染一组元素

// let data = [ "数据1","数据2","数据3"];
// let li = data.map((item)=>{
//   return <li>{item}</li>
// })
// let data = {
//   a:{
//     inner:"数据-a"
//   },
//   b:{
//     inner:"数据-b"
//   },
//   c:{
//     inner:"数据-c"
//   }
// }
// //做列表渲染时，一般设置key
// let li = Object.keys(data).map((item,index)=>{
//   return <li key={index}>{data[item].inner}</li>
// })
// let ul = <ul>{li}</ul>

/*
 JSX中的特殊属性
  class --> className 
  style的接收值是一个对象
*/
/*
 JSX使用时的注意事项
   -可以作为值使用
   -不是字符串
   -可以配合Javascript表达式一起使用
   -必须有，且只有一个顶层的包含元素，React.fragment
    -Fragment 文档碎片，作为包含容器存在不会渲染到真实DOM中
   -JSX不是HTML,很多属性编写不一样
    --className
    --style
   -列表渲染时，必须有key值
   -在JSX所有标签必须闭合
   -组件的首字母一定大写，标签一定小写
 */
// let div = (
//   <Fragment>
//   <div
//     className={false ? "div" : "box"}
//     style={{ width: "100px", height: "100px", background: "red" }}
//   >
//     div
//   </div>
//   </Fragment>
// );

ReactDOM.render(<App/>, document.getElementById("root"));
