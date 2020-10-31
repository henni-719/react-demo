import React from "react";

import ReactDOM from "react-dom";

function Child(props) {

  return (

    <div className="child">

      <p>{`Child组件所接收到的来外界的文本内容是：[${props.fatherText}]`}</p>

    </div>

  );

}

class NewChild extends React.Component {

  state = {

    text: "来自 newChild 的文本"

  };

  // NewChild 组件的按钮监听函数

  changeText = () => {

    // changeText 中，调用了父组件传入的 changeFatherText 方法

    this.props.changeFatherText(this.state.text);

  };

  render() {

    return (

      <div className="child">

        {/* 注意这里把修改父组件文本（同时也是 Child 组件的文本）的动作放在了 NewChild 里 */}

        <button onClick={this.changeText}>点击更新 Child 组件的文本</button>

      </div>

    );

  }

}

class Father extends React.Component {

  // 初始化父组件的 state

  state = {

    text: "初始化的父组件的文本"

  };

  // 传给 NewChild 组件按钮的监听函数，用于更新父组件 text 值（这个 text 值同时也是 Child 的 props）

  changeText = (newText) => {

    this.setState({

      text: newText

    });

  };

  // 渲染父组件

  render() {

    return (

      <div className="father">

        {/* 引入 Child 组件，并通过 props 中下发具体的状态值 实现父-子通信 */}

        <Child fatherText={this.state.text} />

        {/* 引入 NewChild 组件，并通过 props 中下发可传参的函数 实现子-父通信 */}

        <NewChild changeFatherText={this.changeText} />

      </div>

    );

  }

}

  
export default Father;
