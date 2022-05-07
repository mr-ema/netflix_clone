import SearchItems from "./SearchItems"
import { useSearchData } from "../../../customHooks"
import NoResults from "../../Errors/NoResults"

const Results = ({data, item}) => {
  const [result] = useSearchData(data,`title`,`${item}`)

  if(result.length < 1) {return <NoResults page="home" />}

  return (
    <div className="search-results">
      <SearchItems data={result} miniView={false}/>
    </div>
  )
}

export default Results