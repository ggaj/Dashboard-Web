import React from "react";
import { FaAddressBook } from "react-icons/fa";
import { Header } from "./styles";

interface ILeftHeaderProps {
  toogleOpen: boolean;
}

const LeftHeader: React.FC<ILeftHeaderProps> = ({ toogleOpen }) => (
  <Header toogleOpen={toogleOpen}>
    <FaAddressBook />
    { toogleOpen && ( <strong>Bemol Api</strong> )}
  </Header>
)
export default LeftHeader;