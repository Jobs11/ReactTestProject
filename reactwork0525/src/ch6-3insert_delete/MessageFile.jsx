import React, { Component } from 'react';
import MessageRe from './MessageRe';
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

class MessageFile extends Component {
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
        <ul>
          <li
            key={this.props.id}
            onDoubleClick={() => MessageRe.onRemove(this.props.id)}
          >
            {this.props.name}, {this.props.message}
          </li>
        </ul>
      </div>
    );
  }
}

export default MessageFile;
