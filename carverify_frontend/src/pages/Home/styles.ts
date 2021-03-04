import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 70vh;
  display: flex;
  align-items: stretch;
  min-width: 320px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
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

  form {
    margin: 50px 0;
    width: 80%;
    max-width: 400px;
  }

  .error {
    font-size: 18px;
    color: ${props => props.theme.red};
  }
`;
