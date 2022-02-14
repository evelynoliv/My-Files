import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Router from "./Routes/Router";
import theme from "./Constants/Theme";
import SplashScreen from "./Components/SplashScreen/SplashScreen";
import GlobalStyle from './Global/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      {SplashScreen}
      <Router/>
    </ThemeProvider>
  );
}

export default App;