import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import {RiArrowDownSLine} from "react-icons/ri"

const MobileLinks = () => {
  const [toggle, setToggle] = useState(false)
  const [link, setLink] = useState("home")
  const location = useLocation()
  const currentPath = location.pathname.split("/")[1]

  useEffect(() => {
    setToggle(true)
    setLink(currentPath)
  },[link, currentPath])

  return (
      <nav className="browse-header-links"> 
        <div className="current-link"  onClick={() => setToggle(!toggle)}>
          <span>
            {link}
          </span>
          <RiArrowDownSLine />
        </div>
        <div className={`links-container ${toggle ? "hide":""}`}>
          <ul>
              <li onClick={() => setLink("Home")}>
                <NavLink to="/home">home</NavLink>
              </li>
              <li onClick={() => setLink("Series")}>
                <NavLink to="/series">Series</NavLink>
              </li>
              <li onClick={() => setLink("Movies")}>
                <NavLink to="/movies">movies</NavLink>
              </li>
              <li onClick={() => setLink("Latest")}>
                <NavLink to="/latest">latest</NavLink>
              </li>
              <li onClick={() => setLink("MyList")}>
                <NavLink to="/myList">my List</NavLink>
              </li>
          </ul>
        </div>
      </nav>
    )

}

export default MobileLinks