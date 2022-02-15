import axios from "axios";
import {useState, useEffect} from "react";
import styled from 'styled-components';
import logo from "./img/logo.png"



const Container = styled.div `
border: 1px solid black;
border-radius: 6px;
width: 400px;
height: 670px;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
position: absolute;
background-color: #E5E5E5;


button{
  text-align: center;
  cursor: pointer;
  width: 50px;
 height: 50px;

}


`

const Header = styled.div`
display: flex;
justify-content: space-between;
margin-top: 2%;
margin-bottom: 2%;

button{
  text-align: center;
  border-radius: 40px;
  width: 60px;
 height: 60px;
 background-color: pink;
}



`

const ButtonH = styled.button`
border: 1px solid green;
border-radius: 50%;
width: 70px;
height: 70px;
color: green;


`

const ButtonX = styled.button`
border: 1px solid red;
border-radius: 50%;
width: 70px;
height: 70px;
color: red;

`


function HomePage (props) {
  const [profile, setProfile] = useState ({})
  const [photo, setPhoto] = useState ({})
  const [name, setName] = useState ({})
  const [age, setAge] = useState ({})
  const [bio, setBio] = useState ({})
  const [aut, setAut] = useState ({})




  const getProfile = () => {
      axios.get ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/evelyn-oliveira/person")
      .then((res) => {
        console.log(res)
          const newProfile = res.data.profile
          setProfile(newProfile)
          setPhoto(res.data.profile.photo)
          setName(res.data.profile.name)
          setAge(res.data.profile.age)
          setBio(res.data.profile.bio)

      })
      .catch((erro) => {
        alert(`Ocorreu um erro! Tente novamente mais tarde!${erro.response.data.message}`)
      })
  }

  useEffect(() => {
    getProfile()
  }, [])

  
  const heartButton = () => {
    console.log("funciona")
  }
  
  const xButton = () => {
    console.log("não deu")

  }


  return (
    <Container>
    <Header>
      <img src={logo}/> 
      <button onClick={props.goToMatch}> Matches</button>
    </Header>
    
   
    <img src={photo} width="400" height="360"/>
    { profile.id ? <p>{profile.name}</p> : <p>Perfil não encontrado!</p> }
    <h3>{profile.name}</h3>
    <p>{age}</p>
    <div>{bio}</div>
     
    

    <div>
      <ButtonH onClick={heartButton}>❤</ButtonH>
      <ButtonX onClick={xButton}>✖</ButtonX>
    </div>
  </Container>


  )






}

export default HomePage;