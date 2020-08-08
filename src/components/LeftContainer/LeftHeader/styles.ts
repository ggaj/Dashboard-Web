import styled, { css } from "styled-components";

interface IToogleOpenPropos {
  toogleOpen?: boolean;
}

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