import {useHistory} from "react-router-dom";
import Header from "../components/Header";
import {HomeBox} from "../styles";
import logo from "../img/logo.png"

const HomePage = () => {

    const history = useHistory ()

    const seeTrip = () => {
        history.push("/trips/:list")
    }


    const adminPage = () => {
        history.push("/login")
    }


    return (
        
            <HomeBox>
                
            <img src={logo}/> 
            <div>
            <button onClick={seeTrip}>Ver Viagens</button>
            <button onClick={adminPage}>Área Admin</button>
            </div>
            </HomeBox>
        
    )
   
}

export default HomePage;