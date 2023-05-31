import React, { useState } from 'react';
import MessageRe from './MessageRe';
import MessageFile from './MessageFile';

var timer;

class MessageList extends Comment {
  constructor(props) {
    super(props);

    this.state = {
      messageitem: [],
    };
  }

  componentDidMount() {
    const { messageitem } = this.state;
    timer = setInterval(() => {
      if (messageitem.length < MessageRe.names.length) {
        const index = messageitem.length;
        messageitem.push(MessageRe.names[index]);
        this.setState({
          messageitem: messageitem,
        });
      } else {
        this.setState({
          messageitem: [],
        });

        //clearInterval(timer);
      }
    }, 1000);
  }
  render() {
    return (
      <div>
        {this.state.menuitem.map((menuitem) => {
          return (
            <MessageFile
              key={menuitem.id}
              id={menuitem.id}
              menuname={menuitem.name}
              menutype={menuitem.message}
            />
          );
        })}
      </div>
    );
  }
}

export default MessageList;
