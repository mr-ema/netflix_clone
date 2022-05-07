import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

const MsLogic = (data) => {
  const [result, setResult] = useState(null)
  const location = useLocation()
  // get the previus url to go back
  const path = location.pathname.split("/")[1]
  const search = location.search.split("/")[0]
  const prev = `${path.concat((search.includes("id") ? "":search))}` 
  
  const arr = location.search.split("=")
  const id = arr.length > 2 ? arr[2]:arr[1]

  const getResult = () => {
    const filter = data.filter(item => item.videoId === id)
    return setResult(filter[0])
  }

  useEffect(() => getResult(), [id])

  return [result, id, prev]
}

export default MsLogic