import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


import SessionForm from "./session_form";
import { login } from "../../actions/session_actions"


const mapStateToProps =( { errors } ) => ({
    errors: errors.session,
    formType: 'Log In',
    text: "Don't have an account?",
    navLink: <Link to="/signup" >Create account</Link> 
})

const mapDispatchToProps = (dispatch) =>  ({
    processForm: user => dispatch(login(user)),
    login: user => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);