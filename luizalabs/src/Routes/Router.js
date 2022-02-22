import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EditAdressPage from "../Pages/EditAdressPage/EditAdressPage"
import EditProfilePage from "../Pages/EditProfilePage/EditProfilePage"
import HomePage from "../Pages/HomePage/HomePage"
import LoginPage from "../Pages/LoginPage/LoginPage"
import ProfilePage from "../Pages/ProfilePage/ProfilePage"
import SignUpPage from "../Pages/SignUpPage/SignUpPage"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import SignAddressPage from "../Pages/SignAddressPage/SignAddressPage";
import SplashScreen from "../Components/SplashScreen/SplashScreen";

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
               

                <Route exact path="/editarendereco">
                    <EditAdressPage/>
                </Route>

                <Route exact path="/editarperfil">
                    <EditProfilePage/>
                </Route>

                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route exact path="/login">
                    <LoginPage/>
                </Route>

                <Route exact path="/perfil">
                    <ProfilePage/>
                </Route>


                <Route exact path="/cadastrar">
                    <SignUpPage/>
                </Route>

                <Route exact path="/cadastrarendereco">
                    <SignAddressPage/>
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>

            </Switch>
        </BrowserRouter>
    
    )
}

export default Router