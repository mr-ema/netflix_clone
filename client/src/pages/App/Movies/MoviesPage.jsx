import { Routes, Route } from "react-router-dom"
import { Spinner, Trailer, Slider, MiniScreen } from "../../../components/index"
import { useFetchData } from "../../../customHooks"
import { useLocation } from "react-router-dom"
import { NoResults, FailConnection }  from "../../index"


const MoviesPage = () => {
  const location = useLocation()
  const match = location.search.split("/")[1]
  const arr = location.search.split("/")
  const filter = arr[0].includes("?genre") ? arr[0]:false

  const url = `http://localhost:3001/api/movies${filter ? `/filter${filter}`:""}`
  const [data, isLoading, randomTrailer] = useFetchData(url)

  if (isLoading) { return ( <Spinner />) }
  if (!isLoading && !data) {return <FailConnection />}
  if (data.length < 1) {return (<NoResults page="movies" />)} 

  return (
    <>
      <Trailer 
        playBtn={false}
        ageTag={true}
        info={true}
        name="series-iframe"
        page="movies"
        data={randomTrailer}
      />

    <div className="slider-main-container"> 
      <Slider id={1}  filterBy="tags.year" filter="2022" name="latest" data={data}/>
      <Slider id={2}  name="rest" data={data} />
    </div>

      {match && <MiniScreen data={data}/>}

      <Routes>
        <Route path="watch" element={<MiniScreen data={data}/>} />
      </Routes>
    </>
  )
} 

export default MoviesPage