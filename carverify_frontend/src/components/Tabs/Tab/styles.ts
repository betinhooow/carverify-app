import styled, { css } from 'styled-components';

interface TabProps {
  active: boolean;
}

export const Container = styled.li<TabProps>`
  float: left;
  margin-bottom: -1px;
  position: relative;
  display: block;
  text-align: -webkit-match-parent;

  span {
    margin-right: 2px;
    line-height: 1.42857143;
    border: 1px solid transparent;
    border-radius: 4px 4px 0 0;
    position: relative;
    display: block;
    padding: 10px 15px;
    color: #337ab7;
    cursor: pointer;
    background-color: #dcdcdc;

    ${props =>
      props.active &&
      css`
        color: #555;
        cursor: default;
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-color: transparent;
      `}
  }
`;
