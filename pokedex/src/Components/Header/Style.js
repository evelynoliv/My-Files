import styled from "styled-components";

export const DivHeader = styled.div`
  width: 100%;
  height: 110px;
  background-color: #CC0000;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h1 {
    padding-right: 50px;
  }
`;

export const LogoImg = styled.img`
height: 6.6rem;
padding-left: 5.5rem; 
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 6.6rem;
  p {
    padding: 50px;
    font-size: 25px;
  }
`;

export const ButtonHeader = styled.button`
  
  width: 7rem;
  height: 28px;
  font-size: 14px;
  font-family: "Verdana";
  margin-left: 20px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background: #E4E6CC;
  :hover {
   background-color: #FFDE00;
  }
`;

