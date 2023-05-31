import React, { Component } from 'react';

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
    color: 'red',
    fontSize: 40,
  },
};

class Menuitem extends Component {
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
        <p>
          <span style={styles.messageText}>
            메뉴이름은: {this.props.menuname}
          </span>
        </p>
        <br />
        <p>
          <span style={styles.messageText}>
            메뉴종류는: {this.props.menutype}
          </span>
        </p>
      </div>
    );
  }
}

export default Menuitem;
