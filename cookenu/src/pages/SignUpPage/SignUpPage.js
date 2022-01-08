// import React from "react";
// import {useHistory} from "react-router-dom";
// import useForm from "../../hooks/useForm";
// import useUnprotectedPage from "../../hooks/useUnprotectedPage";
// import { signUp } from "../../services/user"
// import logo from "../../assets/logo.png";
// import TextField from "@material-ui/core/TextField";
// import { ScreenContainer, LogoImage, InputsContainer, SignUpButtonContainer } from "./styled"
// import Button from "@material-ui/core/Button"
// import { goToSignUp } from "../../routes/coordinators";




// function SignUpPage () {
//     useUnprotectedPage()

//     const history = useHistory()

//     const [form, onChange, clear] = useForm({ email: "", password: "" })

//     const signUpForm = (event) => {
//         event.preventDefault()
//         signUp(form, clear, history)

//     }

//     return (
//         <ScreenContainer>
//             <LogoImage src={logo}></LogoImage>
//             <InputsContainer>
            
//                 <form onSubmit={signUpForm} >
//                     <TextField
//                         name={"name"}
//                         value={form.name}
//                         onChange={onChange}
//                         label={"nome"}
//                         variant={"outlined"}
//                         fullWidth
//                         margin={"normal"}
//                         required
//                         type={"name"}

//                     />
//                     <TextField
//                         name={"email"}
//                         value={form.email}
//                         onChange={onChange}
//                         label={"email"}
//                         variant={"outlined"}
//                         fullWidth
//                         margin={"normal"}
//                         required
//                         type={"email"}
//                     />
//                          <TextField
//                         name={"password"}
//                         value={form.password}
//                         onChange={onChange}
//                         label={"senha"}
//                         variant={"outlined"}
//                         fullWidth
//                         margin={"normal"}
//                         required
//                         type={"password"}
//                     />

//                     <Button
//                         type={"submit"}
//                         fullWidth
//                         variant={"contained"}
//                         color={"primary"}

//                     >Cadastrar</Button>


//                 </form>

              
//             </InputsContainer>

//         </ScreenContainer>
        
//     )

// }

// export default SignUpPage;

import React from 'react'
import logo from '../../assets/logo.png'
import { ScreenContainer } from './styled'
import SignUpForm from './SignUpForm'
import { LogoImage } from './styled'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const SignUpPage = ({setAnotherLog}) => {
//   useUnprotectedPage()
  return (
    <ScreenContainer>
      <LogoImage src={logo}/>
      <SignUpForm setAnotherLog={setAnotherLog}/>
    </ScreenContainer>
  )
}

export default SignUpPage

