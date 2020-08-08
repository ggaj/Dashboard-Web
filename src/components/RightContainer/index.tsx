import React from "react";
import { FiLogOut, FiUser } from "react-icons/fi";
import { FaUserEdit } from "react-icons/fa";
import { RiUserSettingsLine } from "react-icons/ri";

import { Container, Header, RightNav } from "./styles";

const RightContainer: React.FC = () => {
  return (
    <Container>
      <Header>
        <div>Dashboard</div>
        <RightNav>
          <li>
            <a href="/"><FiUser /> <span>User</span></a>
            <div className="dropdown-right-nav">
              <a href="/"><FaUserEdit /> <span>Minha conta</span></a>
              <a href="/"><RiUserSettingsLine /> <span>Configuração</span></a>
            </div>
          </li>
          <li>
            <a href="/"><FiLogOut /> <span>Sair</span></a>
          </li>
        </RightNav>
      </Header>
    </Container>
  )
}

export default RightContainer