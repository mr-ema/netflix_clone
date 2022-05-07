import SliderLogic from "./SliderLogic"
import SliderButton from "./SliderBtn"
import Items from "./Items"
import { useFilterData } from "../../customHooks/index"

const Slider = ({id, filterBy, filter, name, data}) => {
  const [filterData] = useFilterData(data,`${filterBy}`,`${filter}`)
  const [handlePrev, handleNext] = SliderLogic(id)

  return (
    <>
      <div className="slider-container" id={`slider-number-${id}`}>
        <h1 className="slider-header">{name}</h1>
        <SliderButton left={true} click={handlePrev}/>
        <div className="slider-items" id={`slider-row-${id}`}>
            <Items
              data={filterData.length > 0 ? filterData:data}
            />
        </div>
        <SliderButton right={true} click={handleNext}/>
      </div>

    </>
  )
}

export default Slider