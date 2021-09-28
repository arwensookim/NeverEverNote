import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import { Switch } from "react-router-dom";


import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import NavBarContainer from "./navbar/navbar_container"


const App = () => (
    <div>
        {/* <header>
            <h1>NeverEverNote</h1>
            <NavBarContainer/>
        </header> */}
        <Switch>
            <Route exact path="/"  component={NavBarContainer}/>
            <AuthRoute exact path='/login' component={LoginFormContainer}/>
            <AuthRoute exact path='/signup' component={SignupFormContainer}/>
        </Switch>

    </div>
);

export default App;