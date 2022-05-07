import { MdErrorOutline } from "react-icons/md"
import { Link, useLocation } from "react-router-dom"

const MoreInfoBtn = ({id}) => {
  const location = useLocation()
  const filter = location.search.length > 1 ? location.search:""

  return (
    <Link to={location.pathname+filter+"/watch?id="+id}>
      <button className='more-info-btn'>
        <span  className='more-info-icon'>
          <MdErrorOutline />
        </span>
        <span>More info</span>
      </button>
    </Link>
  )
}

export default MoreInfoBtn