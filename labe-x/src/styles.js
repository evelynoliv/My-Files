import styled from "styled-components";

export const CardContainer = styled.div`
margin-top: -20px;
flex-direction: grid;
display: flex;
justify-content: space-evenly;
`

export const HomeBox = styled.div`
 width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

button{
    display: grid;
    margin-bottom: 15px;
    height: 30px;
    width: 100%;
    padding: 7px 20px;
    border-radius: 20px;
    border: none;
    color: white;
    font-size: 14px;
    background-color: #28013c;

    
}

`


export const LoginBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;


}
form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
input {
    width: 300px;
    height: 35px;
    border-radius: 10px;
    border: 0.5px solid black;
    margin: 12px

}    

select {
    width: 500px;
    height: 40px;
    border-radius: 10px;
    margin: 10px;

}

`

export const CreateForm = styled.div`
display: flex;
flex-direction: column;
align-itens: center;

`
export const TripsCard = styled.div `

box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
padding: 10px 20px;
border-radius: 20px;
margin: 10px 0px;
width: 300px;
flex-direction: row;
float: inline-end;


* {
  box-sizing: border-box;
}


.column {
  float: left;
  width: 25%;
  padding: 0 10px;
}


`
export const ButtonList =styled.div`
display: flex;
flex-direction: grid;
justify-content: space-evenly;
align-items: center;




`