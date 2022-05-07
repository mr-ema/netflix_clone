import {GiSpeaker, GiSpeakerOff} from "react-icons/gi"
import { useState } from "react"

const SoundBtn = ({mute}) => {
  const [isMute, setIsMute] = useState(false)

  return (
    <button className="sound-btn" onClick={() => {mute(!isMute); setIsMute(!isMute)}}>
      <span className="sound-icon">
        {isMute ? <GiSpeaker /> : <GiSpeakerOff />}
      </span>
    </button>
  )
}

export default SoundBtn