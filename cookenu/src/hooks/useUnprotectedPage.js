import {useHistory} from "react-router-dom";
import {useLayoutEffect} from "react";
import { goToRecipes } from "../routes/coordinators";

const useUnprotectedPage = () => {
    const history = useHistory()

    useLayoutEffect(()=> {
        const token = localStorage.getItem("token")
        if (!token) {
            goToRecipes(history)
        }
    }, [history])    
    
}

export default useUnprotectedPage;