import styled from 'styled-components';

export const Container = styled.div`
  margin: 80px 0;
  max-width: 500px;
  width: 100%;
  text-align: center;
  overflow-wrap: break-word;
`;

export const Group = styled.div`
  display: flex;

  label {
    & + label {
      margin-left: 8px;
    }
  }
`;
