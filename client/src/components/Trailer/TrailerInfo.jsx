import { PlayBtn, MoreInfoBtn } from "./TrailerButtons"

const TrailerInfo = ({ setPlay, data }) => {
  return (
    <div className="trailer-info-box">

        <div className="title">
          {data.logo ? 
            <img src={data.logo} alt={data.title} />
            :
            <span>{data.title}</span>
          }
        </div>
      
      <div className="synopsis">
          {data.description}
      </div>
      <div className="buttons">
        <PlayBtn play={play => setPlay(play)}/>
        <MoreInfoBtn id={data.videoId} />
      </div>
  </div>
  )
}

export default TrailerInfo