const GenereTags = ( {tags} ) => {
  if (!tags) return (null)

  return (
    <div className="genere-tags">
      {tags.generes.map((tag, id) => (<span key={id}>{tag}</span>))}
    </div>
  )
}

export default GenereTags