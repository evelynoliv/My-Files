import { React, useEffect, useContext } from 'react'
import CardPokedex from '../../Components/PokedexCard/PokedexCard'
import { ListaPoke, ImgOpenBall, PokedexDiv } from './Style';
import GlobalStateContext from '../../Contexts/GlobalContextState';
import { removePokedex } from '../../Services/removePokedex';
import openball from '../../Img/openball.png'
import pokedex01 from '../../Img/pokedex01.jpg'
import { Typography } from '@mui/material'
import Header from '../../Components/Header/Header';
import CustomizedSnackbars from '../../Constants/Alert01'
import CustomizedSnackbars2 from '../../Constants/Alert02'



const PokedexPage = () => {
  const { pokedex, setOpen, open, openRelease } =
    useContext(GlobalStateContext);

  useEffect(() => {}, [pokedex]);

  return (
    <div>
      <Header />
      <ListaPoke>
        {!pokedex || pokedex.length === 0 ? (
          <PokedexDiv>
            <ImgOpenBall src={pokedex01}></ImgOpenBall>
            <Typography variant={"h4"} align={"center"}>
              Your pokedex is empty!
            </Typography>
          </PokedexDiv>
        ) : (
          pokedex.map((pokemon) => {
            return (
              <CardPokedex
                key={pokemon.name}
                name={pokemon.name}
                pokemon={pokemon}
                removerPokedex={removePokedex}
              />
            );
          })
        )}
      </ListaPoke>
      
      {CustomizedSnackbars()}
      {CustomizedSnackbars2()}
    </div>
  );
};

export default PokedexPage;