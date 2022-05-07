import { Logo } from "../index"
import Links from "./Links"
import MobileLinks from "./MobileLinks"
import Widgets from "./Widgets/Widgets"
import { useEffect } from "react"

const screen = window.innerWidth

const NavBar = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        document.querySelector(".browse-header").className = "browse-header scroll";
      } else {
        document.querySelector(".browse-header").className = "browse-header";
      }
    })
  }, [])

  return (
    <>
      <header className="browse-header">
        <Logo />
       { (screen <= 900) ? <MobileLinks />:<Links />}
        <Widgets />
      </header>
    </>
  )
}

export default NavBar