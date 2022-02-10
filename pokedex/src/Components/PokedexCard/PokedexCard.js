import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  DivImagem,
  TypesContainer,
  Id,
  TypesRow,
  TypeImg,
  Nome,
} from "./Style";
import GlobalStateContext from "../../Contexts/GlobalContextState";
import { goToDetails } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import Loading from "../../Constants/Loading";

export default function CardPokemon({ name, pokemon, removePokedex }) {
  const navigate = useNavigate();
  const [fotoPokemon, setFotoPokemon] = useState();
  const [id, setId] = useState(0);
  const [types, setTypes] = useState([]);
  const { pokedex, setPokedex, setPokeSnackRelease, setOpenRelease, setOpen } =
    useContext(GlobalStateContext);

  const pegarInformacoesPokemon = async () => {
    try {
      const res = await axios.get(pokemon.url);
      setFotoPokemon(res.data.sprites.other["official-artwork"].front_default);
      setId(res.data.id);
      setTypes(res.data.types);
    } catch (err) {
      console.log(err);
    }
  };

  const pokemonTypes =
    pokemon &&
    types.map((types) => {
      return (
        <TypesRow key={types.type.name} type={types.type.name}>
          <TypeImg src={`/icons/${types.type.name}.svg`} alt="imagem" />
        </TypesRow>
      );
    });

  useEffect(() => {
    pegarInformacoesPokemon();
  }, []);

  return (
    <Card>
      {!fotoPokemon ? (
        <Loading />
      ) : (
        <div>
          <Id>
            <p>{id < 100 ? `#0${id}` : `#${id}`}</p>
          </Id>
          <DivImagem onClick={() => goToDetails(navigate, name)}>
            <CardImg src={fotoPokemon} />
            <Nome>{name}</Nome>
          </DivImagem>
          
            <TypesRow>{pokemonTypes}</TypesRow>
          
          <button
            onClick={() =>
              removePokedex(
                pokemon,
                pokedex,
                setPokedex,
                setPokeSnackRelease,
                setOpenRelease,
                setOpen
              )
            }
          >
            Release
          </button>
        </div>
      )}
    </Card>
  );
}