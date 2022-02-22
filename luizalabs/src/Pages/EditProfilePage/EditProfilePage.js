import React from "react";
import EditProfileForm from "./EditProfileForm";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import Header from "../../Components/Header/header";

const EditProfilePage = () => {
  useProtectedPage();

  return (
    <div>
      <Header title={"Editar"} />
      <EditProfileForm />
    </div>
  );
};

export default EditProfilePage;