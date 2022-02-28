import ReactDOM from 'react-dom';
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
let data = null//123;
// let data2 = { name: "thomas"} //[123,234]
let node = <p>123</p>
let div = <div className="box" id="box">
{/* 基本类型 */}
<span>{data}</span>
{/* 复合类型 */}
{/* <span>{data2}</span> */}
<div>{node}</div>
</div>

ReactDOM.render(
  div,
  document.getElementById('root')
);

