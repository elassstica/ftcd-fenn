import { Link, useMatch, useResolvedPath } from "react-router-dom";
import GameMenu from "./GameMenu";

function Navbar() {
  return (
    <nav className="nav">
      <div id="infinite">
      <Link to="/" className="site-t">
        ONLINE FEMINIST TECH CARD GAME
      </Link>
      </div>
      <ul className="sections">
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/disclaimer">Disclaimer</CustomLink>
        <CustomLink to="/download">Download deck</CustomLink>
        <CustomLink href="/superrr">Superrr's web</CustomLink>
        <CustomLink to="/display">Display cards</CustomLink>
      </ul>
    </nav>
  );
}

// /pricing/todos
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : " "}>
      <Link className="nav-links" to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
