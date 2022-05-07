import { useEffect, useState } from "react"

const useFilterData = (data, filterBy, filter) => {
  const [result, setResult] = useState([])

  const filterData = (by = "", arg = "") => {
    if (!by || !arg) {
      throw new Error('invalid parameter')
    }
    const filter = []
    const arr = by.split('.')

    if (arr.length > 1) {
     data.filter( item => {
        if (item[arr[0]][arr[1]].includes(arg)) return filter.push(item)
        return false
      })
    } else {
      data.filter( item => { 
        if (item[by] === arg) return filter.push(item)
        return false
      })
    }

    setResult(filter)
  }
    

  useEffect(() => filterData(filterBy, filter), [filter, filterBy])

  return [result]
}

export default useFilterData