# react-demo
深入浅出搞定 React的学习demo示例
第一步、使用 create-react-app 脚手架来快速完成项目的初始化： https://zh-hans.reactjs.org/docs/create-a-new-react-app.html
```
npx create-react-app my-app
cd my-app
npm start
```
脚手架创建完毕。

第二步，在src目录创建components，把demo放入该文件中。在组件中代码中要注意代码：
```
export default xxxx;
```
xxxx代表组件名。
第三步，在src目录下的index.js导入模块，示例如下：
```
import LifeCircleContainer from './components/Demo03';
ReactDOM.render(
  <React.StrictMode>
    <LifeCircleContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
```
保存，在浏览器端查看如下图：
https://github.com/henni-719/react-demo/blob/main/images/Demo03.jpg

