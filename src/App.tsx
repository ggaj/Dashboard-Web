import React from 'react';
import { BrowserRouter } from "react-router-dom";

import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';
import Routes from "./routes";
import { Container, Content, Main } from './styles';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <LeftContainer />
        <Content>
          <RightContainer />
          <Main>
            <Routes />
          </Main>  
        </Content>  
      </BrowserRouter>
    </ Container>
  );
}

export default App;
