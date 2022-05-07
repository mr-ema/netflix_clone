import { FaBell } from "react-icons/fa"

const Notification = () => {
  return (
    <div className="notification-box">
      <button className="notification-btn">
        <span className="icon-notification">
          <FaBell />
        </span>
      </button>
    </div>
  )
}

export default Notification