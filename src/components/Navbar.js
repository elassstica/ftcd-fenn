import { Link, useMatch, useResolvedPath } from "react-router-dom"


function Navbar() {
    
return (
    <nav className="nav">
        <Link to="/" className="site-title">
            Feminist Tech Card Game
        </Link>
        <ul>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/disclaimer">Disclaimer</CustomLink>
            <CustomLink to="/download">Download Card Deck</CustomLink>
            <CustomLink to="/superrr">Superrr Webiste</CustomLink>
        </ul>
    </nav>
)
}

// /pricing/todos
function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
 return (
    <li className={isActive ? "active" : " "}>
        <Link to={to} {...props}>
            {children}
        </Link>
    </li>
 )
}

export default Navbar