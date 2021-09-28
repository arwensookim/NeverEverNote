import React from "react";
import { Link } from 'react-router-dom';

// class NavBarLinks extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     loginOrSignup() {
//         <nav>
//             <Link to="/login"> Log In </Link>
//         </nav>
//     }

//     greeting() {
//         <nav>
//             <h2>Hello, { this.props.currentUser.username }</h2>
//             <Link to="/" onClick={logout}> Log Out</Link>
//         </nav>
//     }

//     render() {
//         return(
//             this.props.currentUser ? this.greeting() : this.loginOrSignup()
//         )
//     }
// }

const NavBarLinks = ({ currentUser, logout }) => {
    const loginOrSignup = () => (
        <nav>
            <Link to="/login"> Log In </Link>
        </nav>
    )

    const greeting = () => (
        <nav>
            <h2>Hello, { currentUser.username }</h2>
            <Link to="/" onClick={logout}> Log Out</Link>
        </nav>
    )

    return currentUser ? greeting() : loginOrSignup();
}

export default NavBarLinks;