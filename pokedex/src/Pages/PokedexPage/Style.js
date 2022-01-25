import styled from "styled-components";


 export const MainContainer=styled.section` 
 body{
   margin: 0;
   padding: 0;
 }
   width: 100vw;
   height: 100vh;
   
   background-color: #FBE0A1;
  
 `
 export const HeaderHome=styled.section`
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   width: 100%;
   height: 10%;
   color: #01408F;
   background-color: #FDEECB;
   button{
   padding: 0.6em 2em;
   border: none;
   outline: none;
   color: #01408F;
   background: #FDEECB;
   cursor: pointer;
   position: relative;
   z-index: 0;
   border-radius: 10px;
   ::before{
      content: "";
  background: linear-gradient(
    45deg,
    #F8FBFF,
    #EEF7FF,
    #DCEEFF,
    #B3DAFF,
    #83C3FE,
    #4BA7FE,
    #0284FE,
    #026DD6,
    #01408F
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowingbn5 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
   }
   @keyframes glowingbn5 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
:active{
   color: #000;
}
:active::after{
   background: transparent;
}
:hover::before{
   opacity: 1;
}
   ::after{
   z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background:  #FDEECB;
  left: 0;
  top: 0;
  border-radius: 10px;
   }
}
 `
  export const AreaCard=styled.div` 
  padding-bottom: 12vh;
    margin-top: 1%;
    width: 100%;
    min-height: 74vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    justify-content: space-evenly;
 `
 export const Card=styled.section`
     height: 35vh;
    width: 90%;
    display: grid;
    grid-template-rows: 80% 20%;
  background-color: #FBC050;
  border-radius: 20px 20px 20px 20px;
  img{
     height: 60% ;
  }
`
export const CardImage=styled.div`
background:#FBC050;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    
    border-radius: 50px 50px 0 0;
`
export const CardButtons=styled.div` 
display: grid;
    grid-template-columns: 1fr 1fr;
`

export const StyledButton1=styled.button` 
   color: #01408F;
   background-color: #FBC050;
   height: 3.5vh;
   border: none;
   text-align: center;
 
   opacity: 1;
   transition: 0.3s;
   border-radius: 0 0 20px 20px;
  /* display: inline-block; */
  text-decoration: none;
  cursor: pointer;
    
    :hover{
       /* opacity: 0.6; */
       border-radius: 0 0 20px 0;
       color: #333333;
    }
    :active{
       opacity: 1;
       color: #01408F;
    }
`
export const StyledButton2=styled.button` 
   color: #01408F;
   background-color: #FBC050;
   border: none;
   text-align: center;
   height: 3.5vh;
  opacity: 1;
  transition: 0.3s;
  border-radius: 0 0 20px 20px;
  text-decoration: none;
  cursor: pointer;
    
    :hover{
       opacity: 0.6;
       border-radius: 0 0 0 20px;
       color: #e1306c;
       
    }
    :active{
       opacity: 1;
       
       color:#01408F;
    }
`