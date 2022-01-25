import { React, useEffect, useContext } from 'react'
import PokedexCard from '../../Components/PokedexCard/PokedexCard'
import { PokemonList } from '../HomePage/Style'
import GlobalContext from '../../Contexts/GlobalContext';
import { removePokedex } from '../../Services/removePokemon';

const PokedexPage = () => {
    const {pokedex, setPokedex} = useContext(GlobalContext)

    useEffect(() => {

    }, [pokedex])

    
    return(
        <PokemonList>
            {!pokedex || pokedex.length === 0 ? <p>Nenhum Pokemon adicionado a Pokedex</p> : pokedex.map((pokemon) => {
        return <PokedexCard key={pokemon.name} name={pokemon.name} pokemon={pokemon} removePokedex={removePokedex}/>
        })}
            
        </PokemonList>
    )
}

export default PokedexPage;