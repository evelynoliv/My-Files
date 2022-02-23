import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { LogoImage, TextSingUp } from "./styled";
import { useUnprotectedPage } from "../../Hooks/useUnprotectedPage";
import SplashScreen from "../../Components/SplashScreen/SplashScreen";
import { LoginContainer, ButtonCadastro } from "./styled";
import { useHistory } from "react-router-dom";
import { goToSignUp } from "../../Routes/Coordinator";
import Button from "@mui/material/Button";
import logo2 from "../../Assets/Imgs/logo2.png";

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
            src={logo2}
          />
         
          <LoginForm />
        </>
      )}
      <ButtonCadastro>
        <Button onClick={() => goToSignUp(history)}>
          Quero criar uma conta
        </Button>
      </ButtonCadastro>
    </LoginContainer>
  );
};

export default LoginPage;