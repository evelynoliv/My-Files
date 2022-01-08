import styled from "styled-components"
import { useHistory } from "react-router"
import logo from "../img/logo.png"

const HeaderBox = styled.header`





`


const Header = () => {


    return (
            
            <HeaderBox>
                <div>
                <img src={logo}/> 
                
                </div>

              
                
                
            </HeaderBox>
        
    )
}

export default Header;