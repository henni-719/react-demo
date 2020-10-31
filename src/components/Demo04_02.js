import React from "react";

import ReactDOM from "react-dom";

class Child extends React.Component {

  // 初始化子组件的 state

  state = {

    text: '子组件的文本'

  }

  // 子组件的按钮监听函数

  changeText = () => {

    // changeText 中，调用了父组件传入的 changeFatherText 方法

    this.props.changeFatherText(this.state.text)

  }

  render() {

    return (

      <div className="child">

        {/* 注意这里把修改父组件文本的动作放在了 Child 里 */}

        <button onClick={this.changeText}>

          点击更新父组件的文本

        </button>

      </div>

    );

  }

}

class Father extends React.Component {

  // 初始化父组件的 state

  state = {

    text: "初始化的父组件的文本"

  };

  // 这个方法会作为 props 传给子组件，用于更新父组件 text 值。newText 正是开放给子组件的数据通信入口

  changeText = (newText) => {

    this.setState({

      text: newText

    });

  };

  // 渲染父组件

  render() {

    return (

      <div className="father">

        <p>{`父组件的文本内容是：[${this.state.text}]`}</p>

        {/* 引入子组件，并通过 props 中下发可传参的函数 实现子-父通信 */}

        <Child

          changeFatherText={this.changeText}

        />

      </div>

    );

  }
}
  
export default Father;
