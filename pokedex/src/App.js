import {React, useEffect} from 'react'
import Router from './Routes/Router';
import GlobalStyle from './Constants/GlobalStyle';
import Header from './Components/Header/Header';
import { BrowserRouter } from "react-router-dom";
import GlobalState from './Contexts/GlobalState';


function App() {
  return (
    <div>
      <GlobalStyle/>
      <GlobalState>
        <BrowserRouter>
          
          <Router/>
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;