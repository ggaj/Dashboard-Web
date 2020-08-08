import React, { useState } from "react";

import LeftHeader from "./LeftHeader";
import LeftMenu from "./LeftMenu";
import LeftSettings from "./LeftSettings";

import { Container, List } from "./styles";

const LeftContainer: React.FC = () => {
  const [toogleOpen, setToogleOpen] = useState(true)

  return (
    <Container toogleOpen={toogleOpen}>
      <div>
        <LeftHeader toogleOpen={toogleOpen} />
        <List>
          <LeftMenu toogleOpen={toogleOpen} />
        </List>
      </div>
      <LeftSettings setToogleOpen={setToogleOpen} />
    </Container>
  );
}

export default LeftContainer;