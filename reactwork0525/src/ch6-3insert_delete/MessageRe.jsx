import React, { useState } from 'react';

const MessageRe = () => {
  const [names, setNames] = useState([
    { id: 1, name: '잡1', message: '출격' },
    { id: 2, name: '잡2', message: '돌진' },
    { id: 3, name: '잡3', message: '승격' },
  ]);

  const [inputName, setInputName] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const [nextId, setNaxtId] = useState(4);

  const onChangeName = (e) => {
    setInputName(e.target.value);
  };

  const onChangeMessage = (e) => {
    setInputMessage(e.target.value);
  };

  console.log('변경된 이름값: ' + inputName);
  console.log('변경된 메세지값: ' + inputMessage);

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      name: inputName,
      message: inputMessage,
    });
    setNaxtId(nextId + 1);
    setNames(nextNames);
    setInputName('');
    setInputMessage('');
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.name},{name.message}
    </li>
  ));
};

export default MessageRe;
