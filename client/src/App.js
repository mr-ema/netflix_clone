import { Presentation, SignIn, LogIn, Home, NoMatch } from "./pages/index"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./pages/index.css"
import { LoginContext } from "./helpers/LoginContext"
import { useEffect, useState } from "react";


function App() {
  // simple fakelogin session
  const isLogged = window.sessionStorage.getItem("isLogged") ? true:false
  const storage = () => {
    if(loggedIn) 
      return sessionStorage.setItem("isLogged", "true")
  }

  const [loggedIn, setLoggedIn] = useState(isLogged)

  useEffect(() => storage(), [loggedIn])

  return (
    <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
      <BrowserRouter>
      <Routes>
        <Route path="/*"                element={<Home />} />
        <Route path="login"         element={<LogIn />}  />
        <Route path="presentation"  element={<Presentation />} />
        <Route path="signIn"        element={<SignIn />} />
        <Route path="*"             element={<NoMatch />}/>
      </Routes>
    </BrowserRouter>
    </LoginContext.Provider>


  );
}

export default App;
