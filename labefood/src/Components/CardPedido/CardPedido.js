import React from "react";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { BASE_URL } from "../../Constants/URL";
import { useRequestData } from "../../Hooks/useRequestData";
import { MainContainer, Titulo } from "./Style";
import Relogio from "../../Assets/Icons/clock.svg";

const CardPedido = () => {
  useProtectedPage();
  const pedido = useRequestData({}, `${BASE_URL}/active-order`);

  return (
    <>
      {pedido && pedido.order && (
        <MainContainer>
          <img src={Relogio} alt="ícone relógio" />
          <div>
            <Titulo>Pedido em andamento</Titulo>
            <p>{pedido.order.restaurantName}</p>
            <p>
              SUBTOTAL R${pedido.order.totalPrice.toFixed(2).replace(".", ",")}
            </p>
          </div>
        </MainContainer>
      )}
    </>
  );
};

export default CardPedido;