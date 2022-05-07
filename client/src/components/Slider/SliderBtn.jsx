import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md"

const SliderButton = ({ left, right, click }) => {
    if (left) {
    return (
      <button className="slider-prev-btn" onClick={click}>
        <span className="slider-arrow-icon">
          <MdOutlineKeyboardArrowLeft />
        </span>
      </button>
    )}
    if (right) {
      return (
      <button className="slider-next-btn" onClick={click}>
      <span className="slider-arrow-icon">
        <MdOutlineKeyboardArrowRight />
      </span>
    </button>
    )}

    return false
}

export default SliderButton