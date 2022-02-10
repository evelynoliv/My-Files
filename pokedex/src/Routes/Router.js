import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "../Components/Header/Header";
import GlobalStyle from "../Constants/GlobalStyle";
import DetailsPage from "../Pages/DetailsPage/DetailsPage"
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";

const Router = () => {
    return(
       
            <Routes>
                                
                                
                <Route exact path="/" element={<HomePage/>}/> 
                <Route exact path="/pokedex" element={<PokedexPage/>}/> 
                <Route exact path="/detalhes/:name" element={<DetailsPage/>}/> 
                <Route path="/*" element={<ErrorPage/>}/>
                
            </Routes>
    )
}

export default Router