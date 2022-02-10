import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import  {BASE_URL}  from "../../Constants/url"
import { Card, CardImg, TypesRow, Id } from "./Style";
import GlobalContextState from "../../Contexts/GlobalContextState";
import { goToDetails } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { addPokedex } from "../../Services/addPokedex";
import Loading from "../../Constants/Loading"

export default function CardPokemon({ name, pokemon, addPokedex }) {
  const navigate = useNavigate();
  const [photoPokemon, setPhotoPokemon] = useState();
  const [id, setId] = useState(0);
  const [types, setTypes] = useState([]);
  const { setPokedex, setOpen, setOpenRelease } = useContext(GlobalContextState);

  const getInfoPokemon = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/${name}`);
      setPhotoPokemon(res.data.sprites.other["dream_world"].front_default);
      setId(res.data.id);
      setTypes(res.data.types);
    } catch (err) {
      console.log("erro", err.response);
    }
  };

 
    useEffect(() => {
      getInfoPokemon();
    }, []);

    const pokemonTypes =
    pokemon &&
    types.map((types)=> {
      return (
        <TypesRow key={types.type.name} type={types.type.name}>
          
          </TypesRow>
      )
    })
  


  return (
    <Card>
      <div>
        <Id><p> {id < 100 ? `#0${id}` : `#${id}`}
          </p></Id>
        <CardImg src={photoPokemon} />
        <p>{name}</p>
        {pokemonTypes}
               
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