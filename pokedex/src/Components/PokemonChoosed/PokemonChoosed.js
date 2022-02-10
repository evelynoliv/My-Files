import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {BASE_URL} from "../../Constants/url";
import GlobalContextState from "../../Contexts/GlobalContextState";
import { goToDetails } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";

export default function CardPokemon({ name, pokemon, removePokedex }) {
  const navigate = useNavigate();
  const [fotoPokemon, setFotoPokemon] = useState([]);
  const { pokedex, setPokedex } = useContext(GlobalContextState);

  const getInfoPokemon = async () => {
    try {
      const res = await axios.get(`${BASE_URL}${name}`);
      setFotoPokemon(res.data.sprites.other["official-artwork"].front_default);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getInfoPokemon();
  }, []);

  return (
    <Card>
      <div onClick={() => goToDetails(navigate, name)}>
        <CardImg src={fotoPokemon} />
        <Nome>{name}<IconPokebola src={pokebola2} /></Nome>
      </div>
      <button onClick={() => removePokedex(pokemon, pokedex, setPokedex)}>
        Remover
      </button>
    </Card>
  );
}