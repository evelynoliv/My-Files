import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { LogoImage, TextSingUp, LoginContainer, ButtonCadastro } from "./Style";
import { useUnprotectedPage } from "../../Hooks/useUnprotectedPage";
import SplashScreen from "../../Components/SplashScreen/SplashScreen";
import { useHistory } from "react-router-dom";
import { goToSignUp } from "../../Routes/Coordinator";
import Button from "@mui/material/Button";
import LogoColorida from "../../Assets/Icons/logo-future-eats-invert.svg";

const LoginPage = () => {
  useUnprotectedPage();
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  return (
    <LoginContainer>
      {loading ? (
        <SplashScreen setLoading={setLoading} />
      ) : (
        <>
          <LogoImage 
            src={LogoColorida}
          />
          <TextSingUp>Entrar</TextSingUp>
          <LoginForm />
        </>
      )}
      <ButtonCadastro>
        <Button onClick={() => goToSignUp(history)}>
          Não Possui cadastro? Clique aqui.
        </Button>
      </ButtonCadastro>
    </LoginContainer>
  );
};

export default LoginPage;