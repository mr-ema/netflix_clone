import Faq from "./Faq"
import Form from "../../Form/Form"

const FaqSection = () => {

  return (
    <section className="faq">
      <h1>Preguntas frecuentes</h1>
      <ul>
        <Faq />
        <Faq />
        <Faq />
      </ul>
      <div>
        <p>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p>
        <Form />
      </div>
    </section>
  )
}

export default FaqSection
