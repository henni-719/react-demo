import React from "react";

import ReactDOM from "react-dom";

function Child(props) {

    return (
  
      <div className="child">
  
        <p>{`子组件所接收到的来自父组件的文本内容是：[${props.fatherText}]`}</p>
  
      </div>
  
    );
  
  }
class Father extends React.Component {

    // 初始化父组件的 state
  
    state = {
  
      text: "初始化的父组件的文本"
  
    };
  
    // 按钮的监听函数，用于更新 text 值
  
    changeText = () => {
  
      this.setState({
  
        text: "改变后的父组件文本"
  
      });
  
    };
  
    // 渲染父组件
  
    render() {
  
      return (
  
        <div className="father">
  
          <button onClick={this.changeText}>
  
            点击修改父组件传入子组件的文本
  
          </button>
  
          {/* 引入子组件，并通过 props 下发具体的状态值实现父-子通信 */}
  
          <Child fatherText={this.state.text} />
  
        </div>
  
      );
  
    }
  
  }

export default Father;
