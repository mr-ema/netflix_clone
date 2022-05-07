import { useLocation } from "react-router-dom"
import { useFetchData } from "../../../customHooks/index"
import { MiniScreen, Spinner } from "../../../components/index"
import { Navigate } from "react-router-dom"
import Results from "./Results"

const url = "http://localhost:3001/api/all"

const Search = () => {
  const location = useLocation()
  const match = location.search.split("/")[1]
  const search = location.search.split("=")
  const item = search[1].split("/")[0]
  const [data, isLoading] = useFetchData(url)

  if(!item){ return <Navigate to="/home" />}
  if(isLoading) {return <Spinner />}

  return (
    <>
      <div className="search-page">
        <Results data={data} item={item}/>
      </div>
      
   {match && <MiniScreen data={data}/>}
    </>
  )
}

export default Search