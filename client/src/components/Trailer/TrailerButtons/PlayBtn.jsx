import { FaPlay } from "react-icons/fa"

const PlayBtn = ({ play }) => {
  return (
      <button className='play-btn' onClick={play}>
        <span className='play-icon'><FaPlay /></span>
        <span>Play</span>
      </button>
  )
}


export default PlayBtn