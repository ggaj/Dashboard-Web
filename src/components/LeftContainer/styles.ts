import styled, { css } from "styled-components";
import { shade } from "polished";

interface IToogleOpenPropos {
  toogleOpen?: boolean;
}

export const Container = styled.div<IToogleOpenPropos>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background: #eaeaea;
  border-right: #d2d2d2;
  box-shadow: 1px 0 3px rgba(0, 0, 0, 0.2);
  min-width: 80px;
  padding-top: 20px;
  transition: width 0.3s ease-in;

  ${props => props.toogleOpen && css`min-width:300px`};

  div {
    width: 100%;
  }

  svg {
    height: 30px;
    width: 30px;
    padding: 5px;
  }
`

export const Header = styled.header<IToogleOpenPropos>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #d2d2d2;
  padding: 0 0 20px 0;
  ${props => props.toogleOpen && css`padding: 0 0 20px 10px;`}

  strong {
    margin-left: 10px;
    font-size: 18px;
    flex: 1;
  }
`;

export const List = styled.div`
  padding: 10px 0;
`;

export const ListItem = styled.div<IToogleOpenPropos>`

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

export const Configuration = styled.div<IToogleOpenPropos>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: 1px solid #d2d2d2;
  padding-bottom: 10px;
  
  ${props => props.toogleOpen && 
  css`
    flex-direction: row;
    padding: 10px;
  `}

  a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 9px 0;

    span {
      margin-left: 10px;
      flex: 1;
    }
  }

  a:hover {
    color: ${shade(0.4, '#0d47a1')};
  }

  > svg {
    border-radius: 50%;
    :hover {
      background: rgba(0,0,0,0.1);
    }
  }
`