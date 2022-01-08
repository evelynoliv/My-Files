import axios from "axios";
import {useEffect} from "react";




const TripDetailsPage = () => {


    useEffect (() => {
        const token = localStorage.getItem("token")
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/evelyn-oliveira-carver/trips/:id", {
            headers: {
                authorization: token
            }
        })
        .then ((res)=> {
            console.log(res.data);
        })
        .catch((err)=> {
            console.log(err.res)
        })
    })
    return (

        <div>{TripDetailsPage}</div>


    )
    
   


}

export default TripDetailsPage;