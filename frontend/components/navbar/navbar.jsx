import React from "react";
import { Link } from "react-router-dom";
import NavBarLinksContainer from "./navbar_links_container"
0
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const {currentUser, logout} = this.props;

    // const display = currentUser ? (
    //   <div>
    //     <p>
    //       Hello, {currentUser.username}
    //     </p>
    //     <button onClick={logout}>Log out</button>
    //   </div>
    // ) : (
    //   <div>
    //     <Link to='/signup'> Sign up </Link>
    //     <Link to='/login'> Login </Link>
    //   </div>
    // );

    return (
      <header className="header">
        <div className="navbar">
          <Link to="/">
            <img className="logo-image" src="http://logok.org/wp-content/uploads/2015/02/Evernote-logo.png" />
            <h1>NeverEverNote</h1>
          </Link>
          <NavBarLinksContainer />
        </div>
      </header>

    )
  }
}

export default Navbar;