import React from "react";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import Header from "../../Components/Header/header";
import SignAddressForm from "./SignAddressForm";
import { TextSingUp } from "../SignUpPage/styled";

const SignAddressPage = () => {
  useProtectedPage();

  return (
    <div>
      <Header />
      <TextSingUp>Meu endereço</TextSingUp>
      <SignAddressForm />
    </div>
  );
};

export default SignAddressPage;