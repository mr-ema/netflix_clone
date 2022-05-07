import Search from "./Search"
import Notification from "./Notification"
import User from "./User"

const Widgets = () => {
  return (
    <>
    <Search />
      <div className="browse-header-container">
        <Notification />
        <User />
      </div>
    </>
  )
}

export default Widgets