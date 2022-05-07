import { useContext } from "react"
import { LoginContext } from "../../helpers/LoginContext";
import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar, WhoIsWatching } from "../../components/index"
import { MoviesPage, SeriesPage, HomePage, SearchPage } from "../index"
import NoResults from "../Errors/NoResults"

// css
if (window.innerWidth <= 900) {import("./css/homeMobile.css")
}else import("./css/home.css")


const Home = () => {
  const { loggedIn } = useContext(LoginContext)
  
  if (!loggedIn) {return <Navigate to="/presentation" />}

  return (
    <>
      <NavBar />

      <Routes>
      <Route index             element={<WhoIsWatching />} />
      <Route path="home/*"     element={<HomePage />} />
      <Route path="series/*"   element={<SeriesPage />} />
      <Route path="movies/*"   element={<MoviesPage />} />
      <Route path="search/*"   element={<SearchPage />} />
      <Route path="*"          element={<NoResults page="home"/>} />
      </Routes>
      
    </>
  )
}

export default Home
