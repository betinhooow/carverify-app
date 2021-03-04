import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  min-width: 320px;

  button {
    width: 80px;
    height: 30px;
    background-color: ${props => props.theme.blue};
    margin-left: 20px;
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  text-align: center;
  width: 100%;

  animation: ${appearFromLeft} 1s;
`;
