import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {BASE_URL} from "../../Constants/url"
import { Card, CardImg } from "./Style";
import GlobalContext from "../../Contexts/GlobalContext";
import { goToDetails } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { addPokedex } from "../../Services/addPokemon";

export default function CardPokemon({ name, pokemon, addPokedex }) {
  const navigate = useNavigate();
  const [photoPokemon, setPhotoPokemon] = useState([]);
  const { setPokedex } = useContext(GlobalContext);

  const getInfoPokemon = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/${name}`);
      setPhotoPokemon(res.data.sprites.front_default);
    } catch (err) {
      console.log("erro", err.response);
    }
  };

  useEffect(() => {
    getInfoPokemon();
  }, []);

  return (
    <Card>
      <div>
        <CardImg src={photoPokemon} />
        <p>{name}</p>
      </div>
      <button onClick={() => addPokedex(pokemon, setPokedex)}>
        Add to Pokedex
      </button>
      <button onClick={() => goToDetails(navigate, name)}>
        See Details
      </button>
    </Card>
  );
}