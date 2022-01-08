import axios from "axios";
import { useState } from "react"
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import { LoginBox } from "../styles";


const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }


    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const logAdmin = () => {
        history.push("/admin/trips/list")
    }

    const signIn = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/evelyn-oliveira-carver/login"
        const body = {
            email: email,
            password: password
        }
        console.log(email, password)
        axios.post(url, body)
            .then((res) => {
                console.log(res.data.token, "entrou");
                localStorage.setItem("token", res.data.token)

                history.push("/admin/trips/list")
            })
            .catch((err) => {
                console.log(err.res, "deu erro")
            })


    }



    return (
        <LoginBox>
            <Header />

            <input
                placeholder={"E-mail"}
                type="email"
                value={email}
                onChange={onChangeEmail} />

            <input
                placeholder={"Senha"}
                type="password"
                value={password}
                onChange={onChangePassword} />

            <button onClick={signIn}>Entrar</button>

            <button onClick={goBack}>Voltar</button>


        </LoginBox>



    )



}

export default LoginPage;