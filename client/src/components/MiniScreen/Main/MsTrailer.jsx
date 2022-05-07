import { Trailer } from "../../index"
import { MyListBtn, LikeBtn, DisLikeBtn } from "../MsButtons/index"

const MsTrailer = ({ id, data }) => {
  if (!data) return (null)

  return (
    <div className="mini-screen-trailer-box">
      <Trailer playBtn={true} info={false} ageTag={false} id={id} name="mini-screen-iframe"/>
      { data.logo ? 
        <img src={data.logo} alt={data.title} /> 
        :
        <span className="mini-screen-title">{data.title}</span>
      }
      <div className="mini-screen-buttons-box">
        <MyListBtn />
        <LikeBtn />
        <DisLikeBtn />
      </div>
    </div>
  )
}

export default MsTrailer