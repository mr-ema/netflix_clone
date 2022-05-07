const CastTags = ( {tags} ) => {
  
  if (!tags) return (null)
  
  return (
    <div className="genere-tags">
      {tags.cast.map((tag, id) => (<span key={id}>{tag}</span>))}
    </div>
  )

}

export default CastTags