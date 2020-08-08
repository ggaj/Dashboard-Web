import styled, { css } from "styled-components";

interface IToogleOpenPropos {
  toogleOpen?: boolean;
}

export const MenuItem = styled.div<IToogleOpenPropos>`

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${props => props.toogleOpen && css`padding-left: 10px;`}

  &:hover { background: rgba(0,0,0,0.1) };

  &:hover .dropdown-content {display: block;}

  a {
    width: 100%;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin-left: 10px;
      flex: 1;
    }
  }

  div {
    display: none;
    position: absolute;
    top: 0;
    left: 81px;
    background-color: #fff;
    min-width: 80px;
    border-radius: 2px;
    box-shadow: 1px 0px 4px 0px rgba(0,0,0,0.2);
    z-index: 1;

    ${props => props.toogleOpen && css`left: 301px;`}

    a {
      padding: 12px 16px;
      display: flex;

      &:hover {background: #f5f5f5;} 
    } 
  }
`;
