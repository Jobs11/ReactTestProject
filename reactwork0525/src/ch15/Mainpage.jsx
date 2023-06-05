import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1em;
  background: grey;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: white;
  text-align: center;
`;

const Mainpage = () => {
  return (
    <Wrapper>
      <Title>안녕, React</Title>
    </Wrapper>
  );
};

export default Mainpage;
