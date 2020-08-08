import styled from 'styled-components'

export const Container = styled.div`
  /* flex: 1; */
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px 20px 50px;
  height: 70px;
  background: #0d47a1;
  color: #fff;
  border-bottom: 1px solid #d2d2d2;
  border-left: 1px solid #d2d2d2;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;
  list-style: none;

  

  li {
    position: relative;

    &:hover { background: rgba(255, 255, 255, 0.2); border-radius: 4px; };
    &:hover .dropdown-right-nav {display: block; border-radius: 2px;}

    a {
      color: #fff;
      padding: 10px 30px;
      text-decoration: none;
      display: flex;
      align-items: center;

      span {
        margin-left: 10px;
      } 
    }

    div {
      display: none;
      position: absolute;
      top: 40px;
      right: 0px;
      background-color: #fff;
      min-width: 200px;
      border-radius: 2px;
      box-shadow: 1px 0px 4px 0px rgba(0,0,0,0.2);
      z-index: 1;

      > a {
        display: flex;
        color: #0d47a1;
        padding: 12px 16px;

        &:hover {background: #f5f5f5;border-radius: 2px;} 
      } 
    }
  }
`;