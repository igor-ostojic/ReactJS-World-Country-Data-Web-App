import { Link } from "react-router-dom";

import "../styles/NavBar.scss";

import MoonIcon from "../icons/moon-outline.svg";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className="nav-home">
            Where in the world?
          </Link>
        </li>
        <li>
          <button>
            <img src={MoonIcon} alt="Turn on Dark Mode" />
            <p>Dark Mode</p>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
