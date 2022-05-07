import { Logo } from "../../components/index";
import { useContext } from "react";
import { LoginContext } from "../../helpers/LoginContext";
import { useNavigate } from "react-router-dom";
import "./log-in.css"

const LogIn = () => {
  const {setLoggedIn} = useContext(LoginContext)
  const go = useNavigate()

  return (
    <div id="img-bg">
      <div>
        <header>
          <Logo />
        </header>
        <main className="log-in-main">
          <form className="container" autoComplete="off" onSubmit={(e) => e.preventDefault()}> 
            <h1>Inicia sesión</h1>
            <label htmlFor="username" />
            <input type="text" placeholder="Email" id="username"/>
            <label htmlFor="password" />
            <input type="password" id="password" placeholder="Contraseña"></input>
            <button id="log-in-btn" 
              className="log-in-page"
              onClick={() => {setLoggedIn(true); go("/home")}}
              >Iniciar sesión</button>
            <div className="check-box">
              <label htmlFor="rememberme" />
              <input type="checkbox" id="rememberme" />
              <span>Recuerdame</span>
              <a href="#help">¿Necesitas ayuda?</a>
            </div>
          </form>
        </main>
      </div>
  </div>
  )
}

export default LogIn;