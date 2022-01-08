import react from "react";
import styled from "styled-components"

const FooterBox = styled.footer`
  position: fixed;
  padding: 3px;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #28013c;
  color: white;
  text-align: center;
`


const Footer = () => {
    return (
        
            <FooterBox>bananinha group - todos os direitos reservados</FooterBox>
        
    )
}

export default Footer;