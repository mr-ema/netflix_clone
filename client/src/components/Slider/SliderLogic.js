const SliderLogic = (id) => {
  const screen = document.body.clientWidth;
  const items = parseInt(screen / 250)
  const total = parseInt(247 * items)  

  const handlePrev = () => check() // without args => scroll negatively
  
  const handleNext = () => check("next")
  
  const check = (sum) => {
    const slider = document.querySelector(`#slider-row-${id}`)
    const prev = slider.scrollLeft
    const end = (slider.scrollWidth - total)
    let scroll = sum ? (prev + total) : (prev - total)
    
    if (scroll >= slider.scrollWidth - 247) return slider.scrollTo({left:0, top:0, behavior:'smooth'})
    if (scroll <= -total) return slider.scrollTo({left:end, top:0, behavior:'smooth'})  
    
    slider.scroll({
      top: 0,
      left: scroll,
      behavior: "smooth"
    })
  }

  return [handlePrev, handleNext]
}

export default SliderLogic