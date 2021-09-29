import React from "react";
import { Link } from "react-router-dom";
import NavBarLinksContainer from "./navbar_links_container"

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <header className="header">
        <div className="navbar">
          <Link to="/"  className="logo-link" >
            <img className="logo-image" src={window.logoURL} alt="logo" />
            <h1 >NeverEverNote</h1>
          </Link>

          <ul className="navbar-left">
            <li><a href="https://github.com/arwensookim" target="_blank">Github</a></li>
            <li><a href="https://www.linkedin.com/in/arwen-kim-85a01b221/" target="_blank">Linkedin</a></li>
          </ul>

          <NavBarLinksContainer />
        </div>
      </header>
      // {display}

    )
  }
}

export default Navbar;