import React from "react";
import { ScreenContainer, LogoImage, InputsContainer, SignUpButtonContainer } from "./styled"
import logo from "../../assets/logo.png";
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm"
import Button from "@material-ui/core/Button"
import { goToSignUp } from "../../routes/coordinators";
import {useHistory} from "react-router-dom";
import {useState} from "react"
import {login} from "../../services/user"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { CircularProgress } from "@material-ui/core";


function LoginPage({anotherLog, setAnotherLog}) {
    useUnprotectedPage()

    const history = useHistory()

    const [loading, setLoading] = useState(false)

    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setAnotherLog, setLoading)

    }



    return (
        <ScreenContainer>
            <LogoImage src={logo}></LogoImage>
            <InputsContainer>
                <form  
                onSubmit={onSubmitForm}
                anotherLog={anotherLog} setAnotherLog={setAnotherLog} >
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"e-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}

                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    />

                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}

                    >{loading ? <CircularProgress color={"inherit"} size={24}/> : <>Fazer Login</>}</Button>


                </form>

                <SignUpButtonContainer>
                    <Button
                        onClick={()=>goToSignUp(history)}
                        type={"submit"}
                        fullWidth
                        variant={"outlined"}
                        color={"primary"}

                    >Faça seu Cadastro
                    </Button>

                </SignUpButtonContainer>


            </InputsContainer>

        </ScreenContainer>
    )

}

export default LoginPage;