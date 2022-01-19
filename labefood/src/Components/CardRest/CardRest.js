import React from "react";
import { useHistory } from "react-router-dom";
import { goToRestaurant } from "../../Routes/Coordinator";
import {
  CardContainer,
  ImgCard,
  RestauranteCardText,
  TempoEntrega,
  FretCard,
} from "./Style";

const CardRest = (props) => {
  const history = useHistory();

  return (
    <CardContainer>
      <div onClick={() => goToRestaurant(history, props.id)}>
        <ImgCard src={props.src} alt={props.name} />
        <RestauranteCardText>{props.name}</RestauranteCardText>
      </div>
      <TempoEntrega>{props.deliveryTime} min</TempoEntrega>
      <FretCard>Frete R$ {props.shipping.toFixed(2).replace(".", ",")}</FretCard>
    </CardContainer>
  );
};

export default CardRest;