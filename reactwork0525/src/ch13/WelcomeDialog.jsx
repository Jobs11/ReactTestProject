import React from 'react';
import FancyBoder from './FancyBoder';

const WelcomeDialog = (props) => {
  return (
    <div>
      <FancyBoder color="red">
        <h1 className="Dialog-title">어서오세요</h1>
        <p className="Dialog-message">우리 사이트 방문 해주셔서 감사합니다.</p>
      </FancyBoder>
    </div>
  );
};

export default WelcomeDialog;
