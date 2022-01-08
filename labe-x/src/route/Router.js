import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ListTripsPage from "../pages/ListTripsPage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import AdminHomePage from "../pages/AdminHomePage";
import TripDetailsPage from "../pages/TripDetailsPage";
import CreateTripPage from "../pages/CreateTripPage";

function Router() {
    return (
        
        <div>
           
            <BrowserRouter>
            
            
                <Switch>
                    <Route exact path={"/"}>
                        <HomePage />
                    </Route>

                    <Route exact path={"/trips/:list"}>
                        <ListTripsPage />
                    </Route>

                    <Route exact path={"/trips-application"}>
                        <ApplicationFormPage />
                    </Route>

                    <Route exact path={"/admin-trips-list"}>
                        <AdminHomePage />
                    </Route>

                    <Route exact path={"/login"}>
                        <LoginPage />
                    </Route>

                    <Route exact path={"/admin/trips/:id"}>
                        <TripDetailsPage />
                    </Route>

                    <Route exact path={"/admin-trips-create"}>
                        <CreateTripPage />
                    </Route>
                  

                </Switch>

                <Footer/>
            </BrowserRouter>
        </div>

    )

}

export default Router;
