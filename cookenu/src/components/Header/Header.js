import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {goToRecipes, goToLogin} from "../../routes/coordinators"
import {ToolbarStyle} from './styled'
import {useHistory} from "react-router-dom";
import {useState} from "react"
import { clear } from '@testing-library/user-event/dist/clear';



function Header({anotherLog, setAnotherLog}) {
    
    
    const history = useHistory()
    const token = localStorage.getItem("token")
   

    const logout = () => {
      localStorage.removeItem("token")

    }

    const anotherLogAction = () => {
      if (token) {
        logout()
        setAnotherLog("Login")
        goToLogin(history)
      }
      else {
        goToLogin(history)
      }

    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <ToolbarStyle>

          <Button onClick={()=>goToRecipes(history)} color="inherit">Cookenu</Button>
          <Button onClick={anotherLogAction} color="inherit">{anotherLog}</Button>
        </ToolbarStyle>
      </AppBar>
    </Box>
  );
}

export default Header;