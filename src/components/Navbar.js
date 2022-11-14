import { Link, useMatch, useResolvedPath } from "react-router-dom";
import GameMenu from "./GameMenu";
import Logo7 from "../fonts/logo7-02.svg";



function Navbar() {
  return (
    <nav className="nav body-noise">
      <img src={Logo7} className="logo"/>
      <div id="infinite">
      <Link to="/" className="site-t">
        Feminist Tech Card Game
      </Link>
      </div>
      <ul className="sections">
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/disclaimer">Disclaimer</CustomLink>
        <CustomLink to="/download">Download deck</CustomLink>
        <CustomLink href="https://superrr.net/">SuperrrLab</CustomLink>
        <CustomLink to="/display">Display cards</CustomLink>

      </ul>
    </nav>
  );
}

// /pricing/todos
function CustomLink({ to, href, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : " "}>
        {to && <Link className="nav-links" to={to} {...props}>
        {children}
      </Link>}
      {href && <a className="nav-links"  href={href}>
        {children}
        </a>}
    </li>
  );
}

export default Navbar;
