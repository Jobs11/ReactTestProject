// rcc 자동 클래스형
import React, { Component } from 'react';
import Noti from './Noti';

const reserveNoti = [
  {
    id: 1,
    message: '메세지1',
  },
  {
    id: 2,
    message: '메세지2',
  },
  {
    id: 3,
    message: '메세지3',
  },
];

var timer;

class NotiList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noti: [],
    };
  }

  componentDidMount() {
    const { noti } = this.state;
    timer = setInterval(() => {
      if (noti.length < reserveNoti.length) {
        const index = noti.length;
        noti.push(reserveNoti[index]);
        this.setState({
          noti: noti,
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.noti.map((noti) => {
          return <Noti key={noti.id} id={noti.id} message={noti.message} />;
        })}
      </div>
    );
  }
}

export default NotiList;
