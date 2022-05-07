import { useNavigate } from "react-router-dom"
import { PlayBtn, InfoBtn, DisLikeBtn, MyListBtn, LikeBtn } from "../MsButtons/index"
import { GenereTags, DataTags } from "../Tags/index"

const MiniView = ({ videoId, tags, loseFocus, to }) => {
  const go = useNavigate()

  return (
      <>
          <div className="slider-item-container" onLoad={getOffSet}>
            <div className="mini-view-pre"></div>
            <div className="slider-item-hover" id="mini-view" 
              onMouseLeave={() => loseFocus(false)}
              onClick={() => go(`${to}`)}
              >
              <div className="slider-trailer-cotainer">
                <div className="slider-iframe"></div>
                <iframe title="trailer" src={`https://www.youtube.com/embed/${videoId}?controls=0&autoplay=1&mute=0`}></iframe>
              </div>
              <div className="slider-item-buttons-box">
                <PlayBtn />
                <MyListBtn />
                <LikeBtn />
                <DisLikeBtn />
                <InfoBtn />
              </div>
              <div className="slider-item-tags-box">
                <div className="tags">
                  <DataTags tags={tags} />
                  <GenereTags tags={tags} />
                </div>
              </div>
            </div>
          </div>
      </>
    )
}

const getOffSet = () => {
  const miniView = document.querySelector("#mini-view")
  const item = document.querySelector(".slider-item-container")
  const rec = item.getBoundingClientRect()
  const position = parseInt(rec.left)
  
  return miniView.style.left = `${position}px`
}

export default MiniView