import { React, useEffect, useContext } from "react";
import useRequestData from "../../Hooks/useRequestData";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import PokemonChoosed from "../../Components/PokemonChoosed/PokemonChoosed";
import { PokemonList } from "./Style";
import GlobalContext from "../../Contexts/GlobalContext";
import { addPokedex } from "../../Services/addPokemon";
import { removePokedex } from "../../Services/removePokemon";


const HomePage = () => {
  const [pokemons] = useRequestData(`?offset=0&limit=40`);
  const [pokemonPhoto] = useRequestData(`${pokemons?.url}`);
  const { pokedex } = useContext(GlobalContext);

  useEffect(() => {}, [pokedex]);

  const pokemonsList =
    pokedex &&
    pokemons &&
    pokemons.results.map((pokemon) => {
      let pokemonOpen = pokedex.find((p) => p.name === pokemon.name);
      if (pokemonOpen) {
        return (
          <PokemonChoosed
            key={pokemon.name}
            name={pokemon.name}
            pokemon={pokemon}
            removerPokedex={removePokedex}
          />
        );
      } else {
        return (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            pokemon={pokemon}
            adicionarPokedex={addPokedex}
          />
        );
      }
    });

  return (
    <div>
      
      <PokemonList>{pokemonsList}</PokemonList>
    </div>
  );
};

export default HomePage;