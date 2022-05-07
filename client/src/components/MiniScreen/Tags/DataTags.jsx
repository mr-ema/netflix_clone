const DataTags = ( {tags, seasons} ) => {
  if (!tags) return (null)
  
  return (
      <div className="metadata">
        <span className="for-you-tag">98% for you</span>
        <span className="year">{tags.year}</span>
        <span className="age-tag">{tags.age}</span>
        {seasons && <span className="season-tag">{seasons > 1 ? `${seasons} seasons`:`${seasons} season`}</span>}
        <span className="cuality-tag">hd</span>
      </div>
  )
}

export default DataTags