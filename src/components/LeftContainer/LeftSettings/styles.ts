import styled, { css } from "styled-components";
import { shade } from "polished";

interface IToogleOpenPropos {
  toogleOpen?: boolean;
}

export const Container = styled.div<IToogleOpenPropos>`
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