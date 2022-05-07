import { NavLink } from "react-router-dom"

const Links = () => {
  return (
    <nav className="browse-header-links">
      <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/series">Series</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/latest">Latest</NavLink>
          </li>
          <li>
            <NavLink to="/myList">My list</NavLink>
          </li>
      </ul>
    </nav>
  )
}

export default Links