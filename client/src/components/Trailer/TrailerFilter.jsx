import {BsCaretDownFill} from "react-icons/bs"
import { useState } from "react"
import { Link } from "react-router-dom"

const TrailerFilter = ({page}) => {
  const [filter, setFilter] = useState(false)

  const handleFilter = () => filter ? setFilter(false) : setFilter(true)

  return (
    <>
    <div className="trailer-page">
        <h1>{page}</h1>
        <div className="filter-box">
          <button className="filter-btn" onClick={handleFilter}>
            <span>Generes</span>
            <span className="arrow-filter"><BsCaretDownFill/></span>
          </button>
          <div className={`filter-options ${filter ? "":"hide"}`}>
              <Link to="?genre=action">action</Link>
              <Link to="?genre=comedy">comedy</Link>
              <Link to="?genre=horror">horror</Link>
              <Link to="?genre=thriller">thriller</Link>
              <Link to="?genre=drama">drama</Link>
              <Link to="?genre=mystery">mystery</Link>
              <Link to="?genre=romance">romance</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default TrailerFilter