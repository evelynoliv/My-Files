import {useHistory} from "react-router-dom";
import {useState, useEffect} from "react";
import {TripsCard} from "../styles";
import {CardContainer} from "../styles";
import {ButtonList} from "../styles";
import axios from "axios";
import styled from "styled-components";
import Header from "../components/Header";




const ListTripsPage = () => {

    const [trips, setTrips] = useState ([])
    const [cards, setCards] = useState([])

    const getTrips = () => {
        axios
        .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/evelyn-oliveira-carver/trips')
        .then(res => {
            setTrips(res.data.trips)
            console.log(res.data.trips)
            
            
        })
        .catch(err => {
            console.log(err, "erro lista")
        }, [])
    }

    

    const showList = trips.map((item) => {
        return (
            <TripsCard>
            <h2>{item.name}</h2>
            <p> <b>Planeta: </b>{item.planet}</p>
            <p> <b>Descrição: </b>{item.description}</p>
            <p> <b>Duração em dias: </b >{item.durationInDays}</p>
            <p> <b>Data: </b>{item.date}</p>
            </TripsCard>
        )
    })
       
    

    useEffect(()=> {
        getTrips();
    },[]);


    const history = useHistory()

    const goBackHome = () => {
        history.goBack()
    }

    const applicationForm = () => {
        history.push("/trips-application")
    }

    console.log(trips)

    return (
        
        <div>
            <Header/>
            

        <h2>Pacotes de Viagens</h2> 

        <CardContainer>
        {showList}
        </CardContainer>
        
         
        
        <ButtonList>
        <button onClick={applicationForm}>Increva-se</button>
        <button onClick={goBackHome}>Voltar</button>
        
        </ButtonList>
        


        </div>



    )


}

export default ListTripsPage;