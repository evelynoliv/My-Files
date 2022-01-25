import React from "react"
import { useParams } from "react-router-dom";
import useRequestData from "../../Hooks/useRequestData";
import { ContainerMain, ContainerImg, ContainerMoves, ContainerStats, ContainerTypes } from "./Style";



const DetailsPage = () => {

    
    const poke = ""
   

    return (
        <ContainerMain>
           
            <h2>Detalhes do Pokemon: {poke.name && poke.name.toUpperCase()}</h2>

            <ContainerImg>
                <img src={poke.sprites && poke.sprites.front_default} />
                <img src={poke.sprites && poke.sprites.back_default} />
            </ContainerImg>

            <ContainerTypes>
                <h4>Types:</h4>
                {poke.types && poke.types.length > 0 ?
                    <div>
                        <p> {poke.types && poke.types[0].type.name} </p>
                        <p> {poke.types[1] && poke.types[1].type.name} </p>
                    </div>
                    :
                    <p> {poke.types && poke.types[0].type.name} </p>
                }
            </ContainerTypes>

            <ContainerMoves>
                <h4>Moves:</h4>
                <p>{poke.moves && poke.moves[0].move.name}</p>
                <p>{poke.moves && poke.moves[1].move.name}</p>
                <p>{poke.moves && poke.moves[2].move.name}</p>
                <p>{poke.moves && poke.moves[3].move.name}</p>
                <p>{poke.moves && poke.moves[4].move.name}</p>

            </ContainerMoves>

            <ContainerStats>
                <h4>Stats:</h4>
                <p>HP: {poke.stats && poke.stats[0].base_stat}</p>
                <p>Attack: {poke.stats && poke.stats[1].base_stat}</p>
                <p>Defense: {poke.stats && poke.stats[2].base_stat}</p>
                <p>Special Attack: {poke.stats && poke.stats[3].base_stat}</p>
                <p>Special Defense: {poke.stats && poke.stats[4].base_stat}</p>
                <p>Speed: {poke.stats && poke.stats[5].base_stat}</p>
            </ContainerStats>
        </ContainerMain>
    )
}

export default DetailsPage;