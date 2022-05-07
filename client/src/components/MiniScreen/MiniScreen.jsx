import { AiFillCloseCircle } from "react-icons/ai"
import { MsInfo, MsLogic, MsTrailer, MsChapters } from "./Main/index"
import { useNavigate } from "react-router-dom"

const MiniScreen = ({data}) => {
  const [result, id, prev] = MsLogic(data)
  const goTo = useNavigate()

  const noScroll = () => document.body.style.overflowY = "hidden"
  

  noScroll()

  if(!result) return (null)

  return (
    <>
    <div id="mini-screen">
      <div className="mini-screen-container" >
        <div className="close-btn-box">
          <span className="close-icon" 
            onClick={() => {goTo(`/${prev}`); document.body.style.overflowY = "scroll"}}>
            <AiFillCloseCircle />
          </span>
        </div>

          <MsTrailer id={id} data={result}/>
          <MsInfo 
            tags={result.tags}
            description={result.description}  
            seasons={result.seasons ? result.seasons.length:false}
          />
          {result.seasons && <MsChapters seasons={result.seasons}/>}

        </div>
      </div>
    </>
  )
}

export default MiniScreen