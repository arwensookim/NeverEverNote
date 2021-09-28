import React from "react";
import { Link } from "react-router-dom";
import NavBarLinksContainer from "./navbar_links_container"

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  //   const {currentUser, logout} = this.props;

  //   const display = currentUser ? (
  //     <div>
  //       <p>
  //         Hello, {currentUser.username}
  //       </p>
  //       <button onClick={logout}>Log out</button>
  //     </div>
  //   ) : (
  //     <div>
  //       <Link to='/signup'> Sign up </Link>
  //       <Link to='/login'> Login </Link>
  //     </div>
  //   );

    return (
      <header className="header">
        <div className="navbar">
          <Link to="/">
            <img className="logo-image" src={window.logoURL}/>
            <h1 className="app-name">NeverEverNote</h1>
          </Link>

          <NavBarLinksContainer />
        </div>
      </header>
      // {display}

    )
  }
}

export default Navbar;