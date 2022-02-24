import React, { useState } from "react";
import Menu from "../../Components/Menu/Menu";
import { BASE_URL } from "../../Constants/URL";
import { useRequestData } from "../../Hooks/useRequestData";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import useForm from "../../Hooks/useForm";
import { goToSearch } from "../../Routes/Coordinator";
import { useHistory } from "react-router-dom";
import Header from "../../Components/Header/header";
import { TextField } from "@mui/material";
import {HomePageContainer,FiltroHomeContainer,TextFiltroHome,InputContainer,RestaurantesContainer} from "./styled";

const HomePage = () => {
  useProtectedPage();
  const history = useHistory();
  const restaurantes = useRequestData([], `${BASE_URL}/restaurants`);

  const { form, handleInputOnChange } = useForm({ filtroRestaurante: "" });
  const [filtroTipo, setFiltroTipo] = useState("");

  const handleTipe = (value) => {
    if (value === filtroTipo) {
      setFiltroTipo("");
    } else {
      setFiltroTipo(value);
    }
  };


  return (
    <>
      <Header title={"Bem-vindo ao Magalu!"} />
      <HomePageContainer>
        <InputContainer>

        </InputContainer>
        <FiltroHomeContainer>
          <TextFiltroHome onClick={() => handleTipe("Pedidos")}>
            Pedidos
          </TextFiltroHome>
          <TextFiltroHome onClick={() => handleTipe("Favoritos")}>
            Favoritos
          </TextFiltroHome>
          <TextFiltroHome onClick={() => handleTipe("Devoluções")}>
            Devoluções
          </TextFiltroHome>
       
       
        
        
        
        </FiltroHomeContainer>
       
      </HomePageContainer>
     
      <Menu />
    </>
  );
};

export default HomePage;