import React from "react";
import { SignUp } from '../../Services/Access'
import { useHistory } from "react-router-dom";
import useForm from '../../Hooks/useForm'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { SingUpFormContainer, TexfieldContainer, ButtonCadastro } from "../SignUpPage/styled";



const SignUpForm = () => {
    const {form, handleInputOnChange, clear} = useForm({name:"", email:"", cpf:"", password:"", password2:""})
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        if(form.password === form.password2){
            SignUp(form, clear, history)
        } else {
            alert("Password does not match!")
        }
    }
   
    return (
            <SingUpFormContainer>
                <form onSubmit={onSubmitForm}>
                    <TexfieldContainer>
                    <TextField
                        name={"name"}
                        value={form.username}
                        onChange={handleInputOnChange}
                        label={"Nome"} 
                        placeholder="Nome e sobrenome"                      
                        type={"name"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
                    
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={handleInputOnChange}
                        label={"E-mail"} 
                        placeholder="email@email.com"                       
                        type={"email"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
                   
                   
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={handleInputOnChange}
                        label={"Senha"}
                        placeholder="Mínimo 6 digitos"
                        type={"password"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
                    
                    <TextField
                        name={"password2"}
                        value={form.password2}
                        onChange={handleInputOnChange}
                        label={"Confirme a senha"}
                        placeholder="Confirme a senha"
                        type={"password"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
                    </TexfieldContainer>
                    <ButtonCadastro>
                    <Button fullWidth variant="contained" type="submit" color="primary">
                     <p>Cadastrar</p>
                     </Button>      
                     </ButtonCadastro>
                           
                </form>
            </SingUpFormContainer>
    )
    
}

export default SignUpForm;