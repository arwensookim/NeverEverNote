import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";


import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
// import NavBarContainer from "./navbar/navbar_container"
import Homepage from "./home_page/homepage_content";
import NoteShowContainer from "./notes/note_show_container";
import Main from "./main_page/main";
// import PageNotFound from "./session_form/page_not_found"


const App = () => (
    <div>

        <Switch>
            <AuthRoute exact path='/login' component={LoginFormContainer}/>
            <AuthRoute exact path='/signup' component={SignupFormContainer}/>
            <ProtectedRoute exact path='/notes' component={Main} />
            <Route path="/notes/:noteId" component={NoteShowContainer} />

            <Route path="/" component={Homepage}/>

        </Switch>

    </div>
);

export default App;