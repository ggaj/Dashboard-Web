import React from "react";
import { Link } from 'react-router-dom'
import { RiMoneyDollarCircleLine, RiDownloadLine } from "react-icons/ri";
import { BsCheckCircle } from "react-icons/bs";

import { MenuItem } from "./styles";

interface ILeftMenuProps {
  toogleOpen: boolean
}

const LeftMenu: React.FC<ILeftMenuProps> = ({ toogleOpen }) => (
  <MenuItem toogleOpen={toogleOpen}>
    <a href="/"><RiMoneyDollarCircleLine /> { toogleOpen && (<span>Parcelas</span>) }</a>
    <div className="dropdown-content">
      <Link to="/pendings"><RiDownloadLine /> { toogleOpen && (<span>Pagamentos Pendêntes</span>)}</Link>
      <Link to="/teste"><BsCheckCircle /> { toogleOpen && (<span>Pagamentos Baixados</span>)}</Link>
    </div>
  </MenuItem>
)

export default LeftMenu;