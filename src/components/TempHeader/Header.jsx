import logo from "../../assets/logo/logo.png";
import { NavLink } from "react-router-dom";
import "./Header.css";


/* "Header" is a React functional component that represents navigation bar at top of webpage. **
**
** It contains two main parts:                                                                **
**  - A logo, which is displayed as an image and doesn't link to any other page.              **
**  - A navigation menu, which is composed of two links: "Accueil" and "A Propos".            **
**   These links lead to different parts of website.  
**
** Component uses "NavLink" component from "react-router-dom" to create navigational links.   **
** When a link is active (i.e., current location matches path of link), link is underlined.   **
** This is done by dynamically applying a style to link based on whether it is active or not. **
**
** Component does not receive any props and does not maintain any internal state.             **
** Content and layout of header are hard-coded within component.                              */

function Header() {
    let activeStyle = {
      textDecoration: "underline",
    };
    return (
      <header className="App-header">
        <img src={logo} className="kasa-logo" alt="logo" />
        <nav id="navbar">
          <ul id="nav-items">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                end
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/A_Propos"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                end
              >
                A Propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

  export default Header;