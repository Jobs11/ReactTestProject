import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NotiList from './ch6/NotiList';
import MenuitemList from './test6/MenuitemList';
import TestSample from './ch6-3insert_delete/TestSample';
import Practicech6 from './ch6-3insert_delete/Practicech6';
import MessageList from './ch6-3insert_delete/MessageList';
import Counter from './ch7/Counter';

ReactDOM.render(
  <React.StrictMode>
    {/* <MenuitemList /> */}
    {/* <MessageList /> */}
    <Counter />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
