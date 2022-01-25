import React, { useEffect, useState } from "react"
import GlobalContext from './GlobalContext';


const GlobalState = (props) =>{
    const [pokedex, setPokedex] = useState(JSON.parse(localStorage.getItem('pokedex')))
    if(!pokedex){
        localStorage.setItem('pokedex', JSON.stringify([]))
        setPokedex(JSON.parse(localStorage.getItem('pokedex')))
    }

    return(
        <GlobalContext.Provider value={{pokedex, setPokedex}}>
            {props.children}
        </GlobalContext.Provider>
    )
}


export default GlobalState;