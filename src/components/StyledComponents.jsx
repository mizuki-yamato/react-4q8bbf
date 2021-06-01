import React from 'react';
import styled from 'styled-components';

export const StyledComponents = () => {
  return (
    <Container>
      <STitle>-Styled JSX-</STitle>
      <button>test</button>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const STitle = styled.p`
  margin: 0px;
  color: #3d84a8;
`;