import React, { useEffect } from "react";
import axios from "axios";
import { EditProfile } from "../../Services/Access";
import { useHistory } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ButtonLoginContainer, LoginContainer, TexfieldLogin } from "./Style";
import { BASE_URL } from "../../Constants/URL";
import { useProtectedPage } from "../../Hooks/useProtectedPage";

const EditProfileForm = () => {
  useProtectedPage()
  const { form, handleInputOnChange, setForm } = useForm({name: "", email: "", cpf:"" });
  const history = useHistory();

  const onSubmitAddress = (event) => {
    event.preventDefault();
    EditProfile(form, history);
  };

  const getProfile = () => {
    axios.get(`${BASE_URL}/profile`, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
      .then((response) => {
        setForm({ name: response.data.user.name, email: response.data.user.email, cpf: response.data.user.cpf})
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
     
  }

  useEffect(()=>{
    getProfile()
  },[])
  
  return (
    <LoginContainer>
      <form onSubmit={onSubmitAddress}>
        <TexfieldLogin>
        <TextField
          name={"name"}
          value={form.name}
          onChange={handleInputOnChange}
          label={"Nome"}
          type={"text"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          required
        />
       </TexfieldLogin>
       <TexfieldLogin>
        <TextField
          name={"email"}
          value={form.email}
          onChange={handleInputOnChange}
          label={"E-mail"}
          type={"email"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          required
        />
        </TexfieldLogin>
        <TexfieldLogin>
        <TextField
          name={"cpf"}
          value={form.cpf}
          onChange={handleInputOnChange}
          label={"CPF:000.000.000-00"}
          type={"cpf"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          required
        />
        </TexfieldLogin>
       <ButtonLoginContainer>
        <Button fullWidth variant="contained" type="submit">
          <p>Salvar</p>
        </Button>
        </ButtonLoginContainer>
       
      </form>
    </LoginContainer>
  );
};

export default EditProfileForm ;