import React from "react";
import { Link } from 'react-router-dom';



const NavBarLinks = ({ currentUser, logout }) => {
    const loginOrSignup = () => (
        <nav className="navSession">
            <Link to="/login" className="login"> Log In </Link>
            {/* <Link to="/signup" className="signup">Sign Up</Link> */}
        </nav>
    )

    const greeting = () => (
        <nav className="navSession">
            <h2>Hello, { currentUser.username }</h2>
            <Link to="/" onClick={logout} className="logout"> Log Out</Link>
        </nav>
    )

    return currentUser ? greeting() : loginOrSignup();
}

export default NavBarLinks;