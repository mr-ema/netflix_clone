import { useState } from "react"
import MsChapter from "./MsChapter"
import { BsCaretDownFill } from "react-icons/bs"
import { MiniSpinner } from "../../index"

const MsChapters = ({seasons}) => {
  const [season, setSeason] = useState(0)
  const [active, setActive] = useState(false)

  const handleClick = number => setSeason(number)
  
  if (!season) (<MiniSpinner />)

  return (
    <div className="Ms-chapters-container">
      <div className="select-season-container">
        <button onClick={() => setActive(!active)} disabled={seasons.length > 1 ? false:true}>
          <span>season {season + 1}</span>
          <span><BsCaretDownFill /></span>
          </button>
        <div className={`select-season ${active ? "":"hide"}`}>

          {seasons.map((season, id) => (
          <span 
          key={id} 
          onClick={() => {handleClick(id); setActive(!active)}}>
            season {season.id}
          </span>))}

        </div>
      </div>
      <h1>Episodes</h1>
      {seasons[season].episodes.map( (episode, id) => <MsChapter key={id} {...episode} />)}
    </div>
  )
}

export default MsChapters