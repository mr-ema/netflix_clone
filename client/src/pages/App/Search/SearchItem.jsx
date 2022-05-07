import { useLocation, Link } from "react-router-dom"

const SearchItem = ({ title, thumbnail, videoId, id, tags}) => {
  const location = useLocation()
  const filter = location.search.length > 1 ? location.search:""

  if(!videoId) {return (null)} 

    return (
    <>
      <Link to={location.pathname+filter+"/watch?id="+videoId}>
      <div id={`slider-item-${id}`} className="slider-img-box">
          
      <img className="slider-img" src={thumbnail} alt={title} />

      </div>
      </Link>
    </>
  )
}

  export default SearchItem