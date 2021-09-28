import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import { Switch } from "react-router-dom";


import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import NavBarContainer from "./navbar/navbar_container"
// import PageNotFound from "./session_form/page_not_found"


const App = () => (
    <div>

        <Switch>
            <AuthRoute exact path='/login' component={LoginFormContainer}/>
            <AuthRoute exact path='/signup' component={SignupFormContainer}/>
            <Route path="/"  component={NavBarContainer}/>
            {/* <Route component={PageNotFound}/> */}
        </Switch>

    </div>
);

export default App;