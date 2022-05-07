import { useState } from "react"
import PlayEpisode from "./Play"

const MsChapter = ({ title, duration, sypnopsis, thumbnail, number, url }) => {
  const [active, setActive] = useState(false)

  if(active) return (<PlayEpisode active={active => setActive(active)} url={url}/>)
  
  return (
    <div className="Ms-chapter-box">
      <span className="list-number">{number}</span>
      <div className="thumbnail-container">
       
          <img src={thumbnail} className="thumbnail" alt="Ms-chapter-n1" onClick={() => setActive(true)}/>
       
      </div>
      <div className="Ms-chapter-info">
        <div className="info">
          <span className="chapter">
            {title}
          </span>
          <span className="duration">
            {duration}
          </span>
        </div>
        <span className="synopsis">
          {sypnopsis}
        </span>
      </div>
    </div>
  )
}

export default MsChapter