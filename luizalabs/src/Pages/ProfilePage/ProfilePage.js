import React from "react";
import { useRequestData } from "../../Hooks/useRequestData";
import { BASE_URL } from "../../Constants/URL";
import { goToEditAdress, goToEditProfile } from "../../Routes/Coordinator";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import Menu from "../../Components/Menu/Menu";
import Header from "../../Components/Header/header";
import { Profile, CardHistorico, CardHistoricoContainer, DadosContainer, DadosContainer2, HistoricoContainer } from "./styled";
import { Button } from "@mui/material";
import Editar from "../../Assets/Icons/edit.svg";

const ProfilePage = () => {
  useProtectedPage();
  const history = useHistory();
  const perfil = useRequestData([], `${BASE_URL}/profile`);
  const pedidos = useRequestData([], `${BASE_URL}/orders/history`);


  return (
    <main>
      <Header title={"Meu Perfil"} />
      <Profile>
        {perfil.user ? (
          <div id={"personalData"}>
            <DadosContainer>
              <div>
                <p id={"nome"}>{perfil.user.name}</p>
                <p id={"email"}>{perfil.user.email}</p>
              </div>
              <Button onClick={() => goToEditProfile(history)}>
                <img src={Editar} alt="ícone editar" />
              </Button>
            </DadosContainer>
            <DadosContainer2>
              <div>
                <p>Endereço cadastrado </p>
                <p id={"endereco"}>{perfil.user.address}</p>
              </div>
              <Button onClick={() => goToEditAdress(history)}>
                <img src={Editar} alt="ícone editar" />
              </Button>
            </DadosContainer2>
          </div>
        ) : (
          <div>Loading..</div>
        )}
        <HistoricoContainer>
        <h3> Histórico de pedidos</h3>
        <CardHistoricoContainer>
          {pedidos.orders ? (
            <div></div>
          ) : (
            <h4>Você ainda não realizou nenhum pedido!</h4>
          )}
        </CardHistoricoContainer>
        </HistoricoContainer>
      </Profile>
      <Menu />
    </main>
  );
};

export default ProfilePage;