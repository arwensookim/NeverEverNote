import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


import SessionForm from "./session_form";
import { signup, login } from "../../actions/session_actions"

const mapStateToProps =({ errors }) => ({
    errors: errors.session,
    formType: 'Sign Up',
    text: "already have an account?",
    navLink: <Link to="/login" >Log In</Link>
})

const mapDispatchToProps = (dispatch) =>  ({
    processForm: user => dispatch(signup(user)),
    login: user => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);