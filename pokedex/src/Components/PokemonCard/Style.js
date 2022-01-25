import styled from 'styled-components';

export const Card = styled.section`
display:flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
border-radius: 13px;
width:12.4em;
height:15.8em;
margin:0px 25px 40px;
box-shadow: 0px 0px 0px 2px #B2B39F;


p{

    text-align: center;
    font-size: 14px;
    font-weight: bold;
}

button {
    border: none;
    width: 80%;
    border-radius: 12px;
    padding: 7px;
    cursor: pointer;
    :hover {
   background-color: #FFDE00;
   
}
}

`

export const CardImg = styled.img`
width: 110px;
height: 110px;

`


