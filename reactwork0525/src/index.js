import React, { Profiler } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Member from './Practice11/Member';
import Profile from './Practice11/Profile';
import Calc from './ch12/Calc';
import WelcomeDialog from './ch13/WelcomeDialog';
import ProfileCard from './Practice13/ProfileCard';
import MainContext from './ch14/MainContext';

ReactDOM.render(
  <React.StrictMode>
    {/* <MenuitemList /> */}
    {/* <MessageList /> */}
    {/* <NameForm /> */}
    <MainContext />
  </React.StrictMode>,
  document.getElementById('root'),
);

// setTimeout(function () {
//   ReactDOM.render(<input value={null} />, document.getElementById('root'));
// }, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
