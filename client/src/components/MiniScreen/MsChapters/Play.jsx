import { useEffect } from "react"

const PlayEpisode = ( {url, active} ) => {
  
  useEffect(() => {
    const elem = document.getElementById("play-episode")
    elem.requestFullscreen()

    document.onfullscreenchange = () => {
      if(elem.offsetWidth < window.innerWidth) {
        active(false)
      }return false
    }
  }, [active])

  return (
    <div className="play-episode">
         <iframe  
          id="play-episode"
          title="YouTube video player"
          src={`https://www.youtube.com/embed/${url}?autoplay=1&mute=0&controls=2&showinfo=0&modestbranding=1&loop=1&rel=0` }
          frameBorder="0"
          allowFullScreen
         >    
        </iframe>
    </div>
  )
}

export default PlayEpisode