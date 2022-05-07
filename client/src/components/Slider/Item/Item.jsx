import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import MiniView from "../../MiniScreen/MiniView/MiniView"


const Item = ({ title, thumbnail, videoId, id, tags}) => {
  const location = useLocation()
  const filter = location.search.length > 1 ? location.search:""
  const [active, setActive] = useState(false)
  const screen = window.innerWidth
  let sleep;

  if(!videoId) return (null)
  
  if(screen <= 900) return (
    <>
    <Link to={location.pathname+filter+"/watch?id="+videoId}>
    <div id={`slider-item-${id}`} className="slider-img-box" >
     <img className="slider-img" src={thumbnail} alt={title} />
    </div>
    </Link>
    </>
  )
  
  if(!active) return (
    <>
    <Link to={location.pathname+filter+"/watch?id="+videoId}>
    <div id={`slider-item-${id}`} className="slider-img-box"  

      onMouseEnter={() => {sleep = setTimeout(() => setActive(true), 2000)}}
      onMouseLeave={() => clearTimeout(sleep)}
      onClick={() => clearTimeout(sleep)}
      >
        
     <img className="slider-img" src={thumbnail} alt={title} />

    </div>
    </Link>
    </>
  )

  if(active) return (
      <MiniView 
        videoId={videoId} 
        tags={tags} 
        thumbnail={thumbnail} 
        loseFocus={(lose) => setActive(lose)}
        to={location.pathname+filter+"/watch?id="+videoId}
        />
  )
}

export default Item