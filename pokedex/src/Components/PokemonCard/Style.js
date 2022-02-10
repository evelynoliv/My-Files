import styled from 'styled-components';

export const Card = styled.section`
display:flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
border-radius: 13px;
width:12.4em;
height:17em;
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
width: 112px;
height: 112px;

`


export const TypesRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 10px;
  height: 10px;
`;

export const Id = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 9rem;
  margin-top: -12px;
  p {
    font-size: 0.8rem;
    color: #696969;
    font-weight: 500;
  }
`;