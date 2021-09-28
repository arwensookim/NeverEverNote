import React from "react";
import { Redirect } from "react-router";
import { AuthRoute } from "../util/route_util";


import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import NavBarContainer from "./navbar/navbar_container"


const App = () => (
    <div>
        <AuthRoute exact path="/"  component={NavBarContainer}/>
        <AuthRoute exact path='/login' component={LoginFormContainer}/>
        <AuthRoute exact path='/signup' component={SignupFormContainer}/>
        <Redirect to='/' />
    </div>
);

export default App;