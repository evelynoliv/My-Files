import React from "react";
import { useUnprotectedPage } from "../../Hooks/useUnprotectedPage";
import SignUpForm from "./SignUpForm";
import { TextSingUp, LogoImage, SingUpContainer } from "./Style";
import Header from "../../Components/Header/Header";
import LogoColorida from "../../Assets/Icons/logo-future-eats-invert.svg";

const SignUpPage = () => {
  useUnprotectedPage();

  return (
    <SingUpContainer>
      <Header />
      <LogoImage src={LogoColorida} />
      <TextSingUp> Cadastrar </TextSingUp>
      <SignUpForm />
    </SingUpContainer>
  );
};

export default SignUpPage;