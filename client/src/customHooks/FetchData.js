import { useState, useEffect } from "react"
import axios from "axios"

const defaultUrl = "http://localhost:3001/api/all"

const useFetchData = (url = defaultUrl) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [randomTrailer, setRandomTrailer] = useState(null)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      
      try {
        const response = await axios.get(url)
        const random = Math.floor(Math.random() * response.data.length)
        
        setData(response.data)
        setRandomTrailer(response.data[random])
        setIsLoading(false)
  
      } catch (err) {
          setIsLoading(false)
          console.log(err)
      }
    } 
    
  getData()
}, [url])

  return [data, isLoading, randomTrailer]
}

export default useFetchData