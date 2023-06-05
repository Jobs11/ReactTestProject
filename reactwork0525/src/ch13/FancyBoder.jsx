import React from 'react';

const FancyBoder = (props) => {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
};

export default FancyBoder;
