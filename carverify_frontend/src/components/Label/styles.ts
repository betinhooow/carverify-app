import styled, { css } from 'styled-components';

interface LabelProps {
  type: string;
}
export const Container = styled.label<LabelProps>`
  padding: 16px;
  width: 100%;
  color: ${props => props.theme.darkBlue};
  display: flex;
  align-items: center;
  margin-top: 8px;

  ${props =>
    props.type === 'error' &&
    css`
      background: transparent;
      color: ${props.theme.red};
      border: none;
    `}
`;
