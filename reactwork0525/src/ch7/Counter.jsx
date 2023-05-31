import React, { useState } from 'react';

const Counter = (props) => {
  const [count, setcount] = useState(0);

  return (
    <div>
      <p> 총 클릭횟수: {count} </p>
      <button onClick={() => setcount(count + 1)}>클릭</button>
    </div>
  );
};

export default Counter;
