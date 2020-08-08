import React, {useState, useCallback} from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";

import { Container } from "./styles";

interface ILeftSettingsProps {
  setToogleOpen(toogleOpen: boolean): any;
}

const LefSettings: React.FC<ILeftSettingsProps> = ({setToogleOpen}) => {
  const[toogle, setToogle] = useState(true)

  const handleToogleOpen = useCallback(() => {
    setToogleOpen(!toogle)
    setToogle(!toogle)
  },[setToogleOpen, toogle])

  return (
    <Container toogleOpen={toogle}>
      <Link to="/setting">
        <AiFillSetting size={40}/>
        { toogle && ( <span>Configurações</span>)}
      </Link>
      
      { toogle ? 
        <FaArrowLeft onClick={handleToogleOpen} color="#0d47a1"/> : 
        <FaArrowRight onClick={handleToogleOpen} color="#0d47a1"/>
      }
    </Container>
  )
}

export default LefSettings;