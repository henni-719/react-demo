import React from "react";
class myEventEmitter {

    constructor() {
  
      // eventMap 用来存储事件和监听函数之间的关系
  
      this.eventMap = {};
  
    }
  
    // type 这里就代表事件的名称
  
    on(type, handler) {
  
      // hanlder 必须是一个函数，如果不是直接报错
  
      if (!(handler instanceof Function)) {
  
        throw new Error("哥 你错了 请传一个函数");
  
      }
  
      // 判断 type 事件对应的队列是否存在
  
      if (!this.eventMap[type]) {
  
        // 若不存在，新建该队列
  
        this.eventMap[type] = [];
  
      }
  
      // 若存在，直接往队列里推入 handler
  
      this.eventMap[type].push(handler);
  
    }
  
    // 别忘了我们前面说过触发时是可以携带数据的，params 就是数据的载体
  
    emit(type, params) {
  
      // 假设该事件是有订阅的（对应的事件队列存在）
  
      if (this.eventMap[type]) {
  
        // 将事件队列里的 handler 依次执行出队
  
        this.eventMap[type].forEach((handler, index) => {
  
          // 注意别忘了读取 params
  
          handler(params);
  
        });
  
      }
  
    }
  
    off(type, handler) {
  
      if (this.eventMap[type]) {
  
        this.eventMap[type].splice(this.eventMap[type].indexOf(handler) >>> 0, 1);
  
      }
  
    }
  
  }
  
  // 注意这个 myEvent 是提前实例化并挂载到全局的，此处不再重复示范实例化过程
const myEvent = new myEventEmitter();

const globalEvent = window.myEvent

class B extends React.Component {

  // 这里省略掉其他业务逻辑

  state = {

    newParams: ""

  };

  handler = (params) => {

    this.setState({

      newParams: params

    });

  };

  bindHandler = () => {

    globalEvent.on("someEvent", this.handler);

  };

  render() {

    return (

      <div>

        <button onClick={this.bindHandler}>点我监听A的动作</button>

        <div>A传入的内容是[{this.state.newParams}]</div>

      </div>

    );

  }

}

class A extends React.Component {

    // 这里省略掉其他业务逻辑
  
    state = {
  
      infoToB: "哈哈哈哈我来自A"
  
    };
  
    reportToB = () => {
  
      // 这里的 infoToB 表示 A 自身状态中需要让 B 感知的那部分数据
  
      globalEvent.emit("someEvent", this.state.infoToB);
  
    };
  
    render() {
  
      return <button onClick={this.reportToB}>点我把state传递给B</button>;
  
    }
  
  }

  export default function App() {

    return (
  
      <div className="App">
  
        <B />
  
        <A />
  
      </div>
  
    );
  
  }
  
