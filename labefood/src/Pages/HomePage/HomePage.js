import React, { useState } from "react";
import CardRestaurante from "../../Components/CardRestaurante/CardRestaurante";
import Menu from "../../Components/Menu/Menu";
import { BASE_URL } from "../../Constants/URL";
import { useRequestData } from "../../Hooks/useRequestData";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import useForm from "../../Hooks/useForm";
import { goToSearch } from "../../Routes/Coordinator";
import { useHistory } from "react-router-dom";
import Header from "../../Components/Header/header";
import CardPedido from "../../Components/CardPedido/CardPedido";
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

  const renderRestaurantes =
    restaurantes.restaurants &&
    restaurantes.restaurants
      .filter((restaurante) => {
        return (
          restaurante.name
            .toLowerCase()
            .includes(form.filtroRestaurante.toLowerCase()) &&
          restaurante.category.includes(filtroTipo)
        );
      })
      .map((restaurante) => {
        return (
          <div key={restaurante.id}>
            <CardRestaurante
              id={restaurante.id}
              src={restaurante.logoUrl}
              name={restaurante.name}
              deliveryTime={restaurante.deliveryTime}
              shipping={restaurante.shipping}
            />
          </div>
        );
      });

  return (
    <>
      <Header title={"Rappi4"} />
      <HomePageContainer>
        <InputContainer>
          <TextField
            name={"filtroRestaurante"}
            value={form.filtroRestaurante}
            onChange={handleInputOnChange}
            onClick={() => goToSearch(history)}
            label={"Restaurante"}
            type={"text"}
            variant={"outlined"}
            fullWidth
            margin={"dense"}
          />
        </InputContainer>
        <FiltroHomeContainer>
          <TextFiltroHome onClick={() => handleTipe("Hamburguer")}>
            Hamburguer
          </TextFiltroHome>
          <TextFiltroHome onClick={() => handleTipe("Asian")}>
            Asiática
          </TextFiltroHome>
          <TextFiltroHome onClick={() => handleTipe("Árabe")}>
            Árabe
          </TextFiltroHome>
          <TextFiltroHome onClick={() => handleTipe("Italian")}>
            Italiana
          </TextFiltroHome>
          <TextFiltroHome onClick={() => handleTipe("Ice cream")}>
            Sorvetes
          </TextFiltroHome>
          <TextFiltroHome onClick={() => handleTipe("Meats")}>
            Carnes
          </TextFiltroHome>
          <TextFiltroHome onClick={() => handleTipe("Baiana")}>
            Baiana
          </TextFiltroHome>
          <TextFiltroHome onClick={() => handleTipe("Petiscos")}>
            Petiscos
          </TextFiltroHome>
          <TextFiltroHome onClick={() => handleTipe("Mexican")}>
            Mexicana
          </TextFiltroHome>
        </FiltroHomeContainer>
        <RestaurantesContainer>{renderRestaurantes}</RestaurantesContainer>
      </HomePageContainer>
      <CardPedido />
      <Menu />
    </>
  );
};

export default HomePage;