import React from "react";
import useForm from "../../Hooks/useForm";
import TextField from "@mui/material/TextField";
import { BASE_URL } from "../../Constants/URL";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { useRequestData } from "../../Hooks/useRequestData";
import CardRestaurante from "../../Components/CardRestaurante/CardRestaurante";
import Header from "../../Components/Header/Header";
import { FraseBusca, InputContainer } from "./styled";

const SearchPage = () => {
  useProtectedPage();

  const { form, handleInputOnChange } = useForm({ filtroRestaurante: "" });
  const restaurantes = useRequestData([], `${BASE_URL}/restaurants`);

  const buscaVazia = () => {
    if (form.filtroRestaurante.length === 0) {
      return <FraseBusca>Busque por nome de restaurante</FraseBusca>;
    } else {
      return renderRestaurantes.length > 0 ? (
        <div>{renderRestaurantes}</div>
      ) : (
        <FraseBusca>
          Não encontramos{" "}
          <span role="img" aria-label="emoji triste">
            😕
          </span>
        </FraseBusca>
      );
    }
  };

  const renderRestaurantes =
    restaurantes.restaurants &&
    restaurantes.restaurants
      .filter((restaurante) => {
        return restaurante.name
          .toLowerCase()
          .includes(form.filtroRestaurante.toLowerCase());
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
    <div>
      <Header title={"Busca"} />
      <InputContainer>
        <TextField
          name={"filtroRestaurante"}
          value={form.filtroRestaurante}
          onChange={handleInputOnChange}
          label={"Restaurante"}
          type={"text"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
        />
      </InputContainer>
      {buscaVazia()}
    </div>
  );
};

export default SearchPage;