import { React } from "react";
import { DivHeader, LogoImg, Menu, ButtonHeader } from "./Style";
import logo from "../../Img/logo.png"
import { goToPokedex, goToHome } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  return (
    <>
     
        <DivHeader>
          <LogoImg onClick={() => goToHome(navigate)} src={logo} />
          <Menu>
            <ButtonHeader onClick={() => goToHome(navigate)}>Home</ButtonHeader>
            <ButtonHeader onClick={() => goToPokedex(navigate)}>
              Pokedex
            </ButtonHeader>
          </Menu>
        </DivHeader>
   
    </>
  );
};

export default Header;