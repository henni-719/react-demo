import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import LifeCircleContainer from './components/Demo02_01';
//import LifeCircleContainer from './components/Demo02_02';
import LifeCircleContainer from './components/Demo03';
import * as serviceWorker from './serviceWorker';

/*ReactDOM.render(
   <React.StrictMode>
    <LifeCircleContainer />
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);
*/

ReactDOM.render(
  <React.StrictMode>
    <LifeCircleContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

