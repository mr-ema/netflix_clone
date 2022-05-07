import { useState } from "react"
import AgeTag from "./TrailerTags/AgeTag"
import { SoundBtn, PlayBtn } from "./TrailerButtons/index"
import TrailerInfo from "./TrailerInfo"
import TrailerFilter from "./TrailerFilter"


const Trailer = ({ playBtn, ageTag, info, id, name, page, data }) => {
  const [mute, setMute] = useState(false)

  const handlePlay = () => {
    const elem = document.getElementById(`${name}`)
    elem.requestFullscreen() 
  }

  return (
    <div className="trailer-container">
      <div className="trailer-box"></div>
      {page && <TrailerFilter page={page}/>}
      <div className="trailer-video-container">
        <iframe  
          id={name}
          title="YouTube video player"
          src={`https://www.youtube.com/embed/${id ? id:data.videoId}?autoplay=1&mute=${mute ? 0:1}&controls=2&showinfo=0&modestbranding=1&loop=1&rel=0` }
          frameBorder="0"
          allowFullScreen
         >    
        </iframe>
      </div>

        {info && <TrailerInfo setPlay={handlePlay} data={data}/>}
        
        {(playBtn && !info) && <PlayBtn play={handlePlay}/>}

        <div className="age-sound-container" >
            <SoundBtn mute={mute => setMute(mute)}/>
            {ageTag && <AgeTag age={data.tags.age}/>}
        </div>
    </div>
  )
}

export default Trailer