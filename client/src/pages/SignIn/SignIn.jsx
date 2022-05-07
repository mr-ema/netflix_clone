import { Logo } from "../../components/index";
import "./sign-in.css"

const SignIn = () => {
  return (
    <div id="img-bg">
      <div>
        <header>
          <Logo />
        </header>
        <main className="sign-in-main">
          <form className="container">
            <h1>Crea tu cuenta</h1>
            <label htmlFor="username" />
            <input type="text" placeholder="Email" id="username" className="registration-input"/>
            <label htmlFor="password" />
            <input type="password" id="password" placeholder="Contraseña" className="registration-input" />
            <label htmlFor="confirmPassword" />
            <input type="password" id="confirm-password" placeholder="Confirma tu contraseña" className="registration-input"/>
            <button id="sign-in-btn" className="sign-in-page">Registrarse</button>
              <a href="#help" className="need-help">¿Necesitas ayuda?</a>
          </form>
        </main>
      </div>
  </div>
  )
}

export default SignIn;