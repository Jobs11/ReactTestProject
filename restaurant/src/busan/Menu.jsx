import React from 'react';

function Menu(props) {
  return (
    <div>
      <h1> {`음식의 이름은 ${props.name}입니다.`} </h1>
      <h2> {`음식의 대표지역은 ${props.area}입니다.`} </h2>
    </div>
  );
}

export default Menu;
