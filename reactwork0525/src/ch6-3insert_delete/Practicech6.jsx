import React, { useState } from 'react';

const Practicech6 = () => {
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

  return (
    <>
      <input
        value={inputName}
        onChange={onChangeName}
        placeholder="이름 입력칸"
      />
      <input
        value={inputMessage}
        onChange={onChangeMessage}
        placeholder="메세지 입력칸"
      />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default Practicech6;
