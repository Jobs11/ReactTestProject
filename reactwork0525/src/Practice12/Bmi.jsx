import React, { useState } from 'react';

const ResultBMI = (props) => {
  if (props.bmi < 18.5) {
    return <p> 저체중 입니다. </p>;
  } else if (18.5 <= props.bmi && props.bmi < 23) {
    return <p> 정상체중 입니다. </p>;
  } else if (23 <= props.bmi && props.bmi < 25) {
    return <p> 과체중 입니다. </p>;
  } else if (25 <= props.bmi && props.bmi < 30) {
    return <p> 경도 비만 입니다. </p>;
  } else if (30 <= props.bmi && props.bmi < 35) {
    return <p> 중증도 비만 입니다. </p>;
  } else if (35 <= props.bmi) {
    return <p> 고도 비만 입니다. </p>;
  }
};

const toM = (cm) => {
  return cm / 100;
};

const Bmi = (props) => {
  const [pheight, setPheight] = useState('');
  const [pweight, setPweight] = useState('');
  const [scale, setScale] = useState('');

  return <div></div>;
};

export default Bmi;
