import React, { useEffect, useState } from 'react';
import useCounter from './useCounter';

const MAX_CAPACITY = 10;

const Accommodate = (props) => {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  const cLog = () => {
    console.log('=========================');
    console.log('useEffect() is called');
    console.log(`isFull: ${isFull}`);
  };

  const setData = (count) => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value: ${count}`);
  };

  useEffect(cLog);
  useEffect(() => {
    setData(count);
  }, [count]);
  //   useEffect(() => {
  //     setIsFull(count >= MAX_CAPACITY);
  //     console.log(`Current count value: ${count}`);
  //   }, [count]);
  return (
    <div style={{ padding: 16 }}>
      <p>{`총  ${count}명 수용`}</p>
      <button onClick={increaseCount} disabled={isFull}>
        입장
      </button>
      <button onClick={decreaseCount}>퇴장</button>
      {isFull && <p style={{ color: 'red' }}> 정원이 가득찼습니다.</p>}
    </div>
  );
};

export default Accommodate;
