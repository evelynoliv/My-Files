import React from "react";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import EditAddressForm from "./EditAdressForm";
import Header from "../../Components/Header/Header";
import { EditAddressContainer } from "./Style";

const EditAdressPage = () => {
  useProtectedPage();

  return (
    <div>
      <Header title={"Editar Endereço"} />
      <EditAddressContainer>
        <EditAddressForm />
      </EditAddressContainer>
    </div>
  );
};

export default EditAdressPage;