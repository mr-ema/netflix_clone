import Item from "./Item/Item"

const Items = ({data}) => {  
  
  return(
    <>
      {data && 
        data.map( (video, id) => {
          return(
            <Item 
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

export default Items