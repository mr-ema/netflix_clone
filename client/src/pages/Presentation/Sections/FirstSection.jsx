import { Logo, LangBtn } from "../../../components/index"
import { Link } from "react-router-dom"
import Form from "../Form/Form"

const FirstSection = () => {
  return (
    <section id="img-bg">
        <div>
          <header>
            <Logo />
            <div className="presentation-buttons">
                <LangBtn />
                <Link to="/login">
                  Iniciar Sesion
                </Link>
            </div>
          </header>
          <main className="no-sign-main">
            <h1>Películas y series ilimitadas y mucho más.</h1>
            <h2>Disfruta donde quieras. Cancela cuando quieras.</h2>
            <h3>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</h3>
            <Form />
          </main>
        </div>
      </section>
  )
}

export default FirstSection