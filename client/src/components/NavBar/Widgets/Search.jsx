import { useRef, useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const Search = () => {
  const [show, setShow] = useState(false)
  const to = useNavigate()  
  const search = useRef(null)

  const handleFocus = () => search.current.focus()

  const handleSearch = event => to(`/search/filter?q=${event.target.value}`)
  

  return (
    <div className="search-box">
           <button className="search-btn" onClick={() => setShow(!show)}>
        <span className="icon-search" onClick={handleFocus}>
          <FaSearch />
        </span>
      </button>
      <label htmlFor="search-bar"/>
        <input 
        autoComplete="off"
        id="search-bar"
        ref={search}
        className={`${show ? "toggle-search":""}`} 
        type="search" 
        placeholder="Search" 
        name="search"
        onChange={handleSearch}
        />
 
    </div>
  )
}

export default Search