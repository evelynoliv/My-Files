import { React, useEffect, useContext } from "react";
import useRequestData from "../../Hooks/useRequestData";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import PokemonChoosed from "../../Components/PokemonChoosed/PokemonChoosed";
import { PokemonList } from "./Style";
import GlobalContextState from "../../Contexts/GlobalContextState";
import { addPokedex } from "../../Services/addPokedex";
import { removePokedex } from "../../Services/removePokedex";
import { removePokeHome } from "../../Services/removePokeHome";
import Header from "../../Components/Header/Header";


const HomePage = () => {
  const { pokedex, paginaPoke, setOpenRelease } = useContext(GlobalContextState);
  const [pokemons] = useRequestData(`?offset=${paginaPoke}0&limit=40`);
  const [pokemonPhoto] = useRequestData(`${pokemons?.url}`);
  

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
      <Header/>
      <PokemonList>{pokemonsList}</PokemonList>
    </div>
  );
};

export default HomePage;