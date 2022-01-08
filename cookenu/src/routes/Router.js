import React from "react";
import { Switch, Route } from "react-router-dom";
import AddRecipePage from "../pages/AddRecipePage/AddRecipePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage";
import RecipesPage from "../pages/RecipesPage/RecipesPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";



function Router ({anotherLog, setAnotherLog}) {
    return (
        
        
        <Switch>
            <Route exact path="/login">
                <LoginPage setAnotherLog={setAnotherLog}/>
            </Route>

            <Route exact path="/cadastro">
                <SignUpPage setAnotherLog={setAnotherLog}/>
            </Route>

            <Route exact path="/adicionar">
                <AddRecipePage/>
            </Route>

            <Route exact path="/">
                <RecipesPage/>
            </Route>

            <Route exact path="/detalhe/:id">
                <RecipeDetailPage/>
            </Route>
           
            <Route>
                <ErrorPage/>
            </Route>

        </Switch>   
        
        
        

    )

}

export default Router;