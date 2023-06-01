import React, { useEffect, useState } from 'react';

const Counter = (props) => {
  const [count, setcount] = useState(0);

  const exFunc = () => {
    document.title = `총 ${count}번 클릭`;
  };
  // useEffect(exFunc);
  //빈 배열
  // useEffect(exFunc, []);

  //변수
  // useEffect(exFunc, count);

  return (
    <div>
      <p> 총 클릭횟수: {count} </p>
      <button onClick={() => setcount(count + 1)}>클릭</button>
    </div>
  );
};

export default Counter;
