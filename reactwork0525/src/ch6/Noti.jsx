import React, { Component } from 'react';

//순서1 : CSS 구성
// styles 타입 -> 객체 -> 리터널 타입 객체 선언
// 변수 선언할 때, 타입은 기본은 const로 선언
// 만약에 변경되는 값이면 let 사용
const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid grey',
    borderRadius: 16,
  },
  messageText: {
    color: 'green',
    fontSize: 28,
  },
};

class Noti extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log('componentDidMount() 호출');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate() 호출');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount() 호출');
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <span style={styles.messageText}>{this.props.message}</span>
        <br />
      </div>
    );
  }
}

export default Noti;
