import React from "react";
import { useUnprotectedPage } from "../../Hooks/useUnprotectedPage";
import SignUpForm from "./SignUpForm";
import { TextSingUp, LogoImage, SingUpContainer } from "../SignUpPage/styled";
import Header from "../../Components/Header/header";
import LogoColorida from "../../Assets/Icons/logo-future-eats-invert.svg";

const SignUpPage = () => {
  useUnprotectedPage();

  return (
    <SingUpContainer>
      <Header />
      <LogoImage src={LogoColorida} />
      <TextSingUp> Sign Up </TextSingUp>
      <SignUpForm />
    </SingUpContainer>
  );
};

export default SignUpPage;