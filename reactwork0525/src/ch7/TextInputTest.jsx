import React, { useRef } from 'react';

const TextInputTest = (props) => {
  const inputElem = useRef(null);

  const onButtonClick = () => {
    inputElem.current.focus();
  };

  return (
    <div>
      <input ref={inputElem} type="text" />
      <button onClick={onButtonClick}> 입력창에 포커스</button>
    </div>
  );
};

export default TextInputTest;
