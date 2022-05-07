import "./presentation.css"
import FirstSection from "./Sections/FirstSection"
import Section from "./Sections/Section"
import SecondSection from "./Sections/SecondSection"
import FaqSection from "./Sections/FaqSection/FaqSection"

const Presentation = () => {
  return (
    <>
      <div className="presentation-container">
        <FirstSection />
        <Section 
          h1="Disfruta en tu TV." 
          h2="Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más."
          img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
          videoWidth="410"
        />
        <SecondSection />
        <Section  
          h1="Disfruta donde quieras."
          h2="Películas y series ilimitadas en tu teléfono, tablet, computadora y TV sin costo extra."
          img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
          video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
          videoWidth="340"
          />
        <Section 
          h1="Crea perfiles para niños."
          h2="Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía."
          img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/kidsValueProp.png"
          leftText={true}
        />
        <FaqSection />
      </div>
    </>
  )
}

export default Presentation
