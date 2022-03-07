import { Component } from "react";

/**
 React中的事件添加
   1.React添加事件类似于js的行间事件
   2.事件名从第二个单词首字母大写
   3.事件处理函数的this指向undefined
     1.使用箭头函数
     2.使用bind
 */
// class Li extends Component {
//   render() {
//     const { data } = this.props;
//     const { title, children } = data;
//     return (
//       <li className="subList-show">
//         <a
//           href=" "
//           onClick={() => {
//             alert("1");
//           }}
//         >
//           {title}
//         </a>
//         <ul className="subList">
//           {children.map((item, index) => {
//             return <li key={index}>{item}</li>;
//           })}
//         </ul>
//       </li>
//     );
//   }
// }
//使用箭头函数
// class Li extends Component {
//   handlerClick=()=>{
//     console.log(this);
//   }
//   render() {
//     const { data } = this.props;
//     const { title, children } = data;
//     return (
//       <li className="subList-show">
//         <a onClick={this.handlerClick}>
//           {title}
//         </a>
//         <ul className="subList">
//           {children.map((item, index) => {
//             return <li key={index}>{item}</li>;
//           })}
//         </ul>
//       </li>
//     );
//   }
// }
//使用bind
// class Li extends Component {
//   constructor(props) {
//     super(props);
//     this.handlerClick = this.handlerClick.bind(this);
//   }

//   handlerClick() {
//     console.log(this);
//   }
//   render() {
//     const { data } = this.props;
//     const { title, children } = data;
//     return (
//       <li className="subList-show">
//         <a onClick={this.handlerClick}>
//           {title}
//         </a>
//         <ul className="subList">
//           {children.map((item, index) => {
//             return <li key={index}>{item}</li>;
//           })}
//         </ul>
//       </li>
//     );
//   }
// }

class Li extends Component {
  state = {
    isShow: false,
  };
  handlerClick = () => {
    const { isShow } = this.state;
    this.setState({
      isShow: !isShow,
    });
  };
  render() {
    const { isShow } = this.state;
    const { data } = this.props;
    const { title, children } = data;
    return (
      <li className={isShow ? "subList-show" : ""}>
        <a onClick={this.handlerClick}>{title}</a>
        <ul className="subList">
          {children.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </li>
    );
  }
}
export default Li;
