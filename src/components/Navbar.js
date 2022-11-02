import { Link, useMatch, useResolvedPath } from "react-router-dom";
import GameMenu from "./GameMenu";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-t">
        {/* ONLINE FEMINIST TECH CARD GAME | ONLINE FEMINIST TECH CARD GAME */}
        OFTCG
      </Link>
      <ul className="sections">
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/disclaimer">Disclaimer</CustomLink>
        <CustomLink to="/download">Download deck</CustomLink>
        <CustomLink to="/superrr">Superrr's web</CustomLink>
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
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
