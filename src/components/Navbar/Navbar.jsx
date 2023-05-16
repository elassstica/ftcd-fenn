import { Link } from "react-router-dom";
import Logo7 from "../../fonts/logo7-02.svg";
import './navbar.css';
import List from '../../fonts/list.svg'
import Close from '../../fonts/x-lg.svg'

const Navbar = () => {
  return (
    <nav>
    {/* A checkbox used for toggling the navigation menu */}
      <input type="checkbox" id="toggle"></input>
      {/* The logo of the website */}
      <a href="/" className="nav-logo">
        <img src={Logo7} alt="Feminist Deck Card" className="nav-logo__img"/>
      </a>

      {/* The toggle button for opening and closing the navigation menu */}
      <label for="toggle" className="nav-toggle">
        {/* An icon representing the hamburger menu */}
        <img src={List} alt="hamburger-menu" className="foo-bar" />

        {/* An icon representing the close button */}
        <img src={Close} alt="close" className="foo-exit" />
      </label>

      {/* The list of navigation links */}
      <ul className="nav-list">
        <li className="nav-item">
          {/* A link to the "About" page */}
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          {/* A link to the "Disclaimer" page */}
          <Link to="/disclaimer" className="nav-link">Disclaimer</Link>
        </li>
        <li className="nav-item">
          {/* A link to download a deck */}
          <Link to="/download" className="nav-link">Download deck</Link>
        </li>
        <li className="nav-item">
          {/* A link to an external website */}
          <a href="https://superrr.net/" className="nav-link">SuperrrLab</a>
        </li>
        <li className="nav-item">
          {/* A link to the "Display cards" page */}
          <Link to="/display" className="nav-link">Display cards</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
