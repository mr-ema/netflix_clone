import { DataTags, GenereTags, CastTags } from "../Tags/index"

const MsInfo = ( {tags, description, seasons} ) => {
  if(!tags || !description) return (null)
  
  return (
    <div className="mini-screen-info">
      <div className="meta-data">
        <DataTags tags={tags} seasons={seasons}/>
      </div>
      <div className="mini-screen-sypnosis">
        <span>
          {description}
        </span>
      </div>
      <div className="mini-screen-tags">
        <div>
          <span>Genere</span>
          <GenereTags tags={tags} />
        </div>
        <div>
        <span>Cast</span>
          <CastTags tags={tags}/>
        </div>
      </div>
    </div>
  )
}

export default MsInfo