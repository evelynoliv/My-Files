import React from "react";
import { useUnprotectedPage } from "../../Hooks/useUnprotectedPage";
import SignUpForm from "./SignUpForm";
import { TextSingUp, LogoImage, SingUpContainer } from "../SignUpPage/styled";
import Header from "../../Components/Header/header";
import logo2 from "../../Assets/Imgs/logo2.png";

const SignUpPage = () => {
  useUnprotectedPage();

  return (
    <SingUpContainer>
      <Header />
      <LogoImage src={logo2} />
      <SignUpForm />
    </SingUpContainer>
  );
};

export default SignUpPage;