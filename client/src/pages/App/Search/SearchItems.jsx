import SearchItem from "./SearchItem"

const SearchItems = ({data}) => {  
  
  return(
    <>
      {data && 
        data.map( (video, id) => {
          return(
            <SearchItem 
              title={video.title} 
              thumbnail={video.thumbnail} 
              key={id} 
              videoId={video.videoId}
              tags={video.tags}
              id={id}
            />
          ) 
        })
      }
    </>
  )
}

export default SearchItems