import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Router from "./Routes/Router";
import Theme from "./Constants/Theme";
import GlobalStyle from './Constants/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle/>
      
      <Router/>
    </ThemeProvider>
  );
}

export default App;
