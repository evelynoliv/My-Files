import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import axios from "axios"
import { Typography } from '@material-ui/core'
import {useState} from 'react'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button'
import { InputsContainer, AddRecipeContainer, ScreenContainer } from './styled'
import useForm from '../../hooks/useForm'
import { BASE_URL } from '../../constants/urls'


function AddRecipePage () {
    const [form, onChange, clear] = useForm({ title: "", description: "", image: "" })

    const createRecipe = () => {
        axios.post(`${BASE_URL}/recipe`, form, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then ((res)=> {
            alert(res.data.message)
            clear()
        })
        .catch((err)=> alert(err.response.message))
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        createRecipe(form, clear)

        console.log(form)
      }

      // useProtectedPage()
    return (
        <ScreenContainer>
            <h1>Adicionar Nova Receita</h1>

            <form onSubmit={onSubmitForm}>
         <AddRecipeContainer>
         <InputsContainer>
          <TextField
            name={"title"}
            value={form.title}
            onChange={onChange}
            label={'Título'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField
            name={"description"}
            value={form.description}
            onChange={onChange}
            label={'Descrição'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            name={"image"}
            value={form.image}
            onChange={onChange}
            label={'Foto'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
          
        
        <Button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
        >
        Adicionar Receita
        </Button>
        </InputsContainer>
        </AddRecipeContainer>
      
    </form>
     
        

          </ScreenContainer>
        
    )

}

export default AddRecipePage;