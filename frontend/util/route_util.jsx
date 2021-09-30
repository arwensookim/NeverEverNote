import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";


// define some custom routes.
// conditionally render either the component or a 'Redirect' based on whether a user is logged in.


const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id ) };
};


const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={props => !loggedIn? <Component {...props} /> : <Redirect to="/"/>}/>
);

const Protected = ({component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} render={props => loggedIn ? <Component {...props}/> : <Redirect to="/notes" />}/>
);

export const AuthRoute = withRouter(
    connect(mapStateToProps, null)(Auth)
);

export const ProtectedRoute = withRouter(
    connect(mapStateToProps, null)(Protected)
);