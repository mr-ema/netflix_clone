import { Routes, Route } from "react-router-dom"
import { Spinner, Trailer, Slider, MiniScreen } from "../../../components/index"
import { useFetchData } from "../../../customHooks"
import { FailConnection } from "../../index"

const url = "http://localhost:3001/api/all"

const HomeTrailer = () => {
  const [data, isLoading, randomTrailer] = useFetchData(url)
  
  if (isLoading) return ( <Spinner />) 
  if (!isLoading && !data) return <FailConnection />

  return (
    <>
    <Trailer 
      playBtn={false}
      ageTag={true}
      info={true}
      data={randomTrailer}
      name="home-iframe"
    />

      <div className="slider-main-container">
        <Slider id={1}  name="latest" data={data} filterBy="tags.year" filter="2022" />
        <Slider id={2}  data={data} name="movies and series"/>
      </div>

      <Routes>
        <Route path=":id" element={<MiniScreen data={data}/>} />
      </Routes>
    </>
  )

}

export default HomeTrailer