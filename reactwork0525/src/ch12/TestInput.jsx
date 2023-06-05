import React, { useState } from 'react';

const sName = {
  c: '섭씨',
  f: '화씨',
};

const TestInput = (props) => {
  //   const [temperature, setTemperature] = useState('');

  const handleChange = (event) => {
    // setTemperature(event.target.value);
    props.onTempChange(event.target.value);
  };
  return (
    <div>
      <fieldset>
        <legend>온도를 입력하세요 (단위: {sName[props.scale]}): </legend>
        {/* <input value={temperature} onChange={handleChange} /> */}
        <input value={props.temperature} onChange={handleChange} />
      </fieldset>
    </div>
  );
};

export default TestInput;
