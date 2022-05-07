import Logo from "../Logo"
import Avatars from "./Avatars"
import AdministrationBtn from "./AdministrationBtn"

const WhoIsWatching = () => {
  return (
    <>
    <div className="who_is_whatching">
        <header className="who_is_whatching_header">
          <Logo />
        </header>
        <main className="who_is_whatching_main">
        <h1>¿Quien esta viendo ahora?</h1>
          <Avatars />
          <AdministrationBtn />
        </main>
      </div>
    </>
  )
}

export default WhoIsWatching