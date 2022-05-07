import { useState } from "react"

const Faq = () => {
  const [isActive, setIsActive] = useState(true)
  
  const handleClick = () => {
  isActive ? setIsActive(false) : setIsActive(true)
  }

  return (  
    <li>
    <button onClick={() => handleClick()}>
      ¿Qué es Netflix?
      <svg id="thin-x" viewBox="0 0 26 26" className={'svg-icon svg-icon-thin-x ' + (isActive ? 'svg-closed':'svg-open') } focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
      </button>
      <div className={'faq-answer ' + (isActive ? 'closed':'open')}>
        <span>
        Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.<br/> <br/>
        Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!
        </span>
      </div>
    </li>
    )
}

export default Faq