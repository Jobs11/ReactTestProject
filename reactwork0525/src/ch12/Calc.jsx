import React, { useState } from 'react';
import TestInput from './TestInput';

const BoilingVerdict = (props) => {
  if (props.celsius >= 100) {
    return <p> 물이 끓습니다.</p>;
  }
  return <p> 물이 끊지 않습니다. </p>;
};

const toCel = (fah) => {
  return ((fah - 32) * 5) / 9;
};

const toFah = (cel) => {
  return (cel * 9) / 5 + 32;
};

const tryCon = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};
const Calc = (props) => {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('');

  const handelCelChange = (temperature) => {
    setTemperature(temperature);
    setScale('c');
  };
  const handelFahChange = (temperature) => {
    setTemperature(temperature);
    setScale('f');
  };
  const celsius = scale === 'f' ? tryCon(temperature, toCel) : temperature;
  const fahre = scale === 'c' ? tryCon(temperature, toFah) : temperature;

  return (
    <div>
      <TestInput
        scale="c"
        temperature={celsius}
        onTempChange={handelCelChange}
      />

      <TestInput scale="f" temperature={fahre} onTempChange={handelFahChange} />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
};

export default Calc;
