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
import TestAfter from './ch7_usememo/TestAfter';
import TextInputTest from './ch7/TextInputTest';
import Accommodate from './practice7/Accommodate';
import Toggle from './ch8/Toggle';
import NameForm from './ch11/NameForm';
import FileImageTest from './ch11/FileImageTest';

ReactDOM.render(
  <React.StrictMode>
    {/* <MenuitemList /> */}
    {/* <MessageList /> */}
    <NameForm />
    <FileImageTest />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
