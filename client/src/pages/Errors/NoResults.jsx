const NoResults = ({page}) => {
  return (
    <div className="no-results">
      <h1>We couldn't find any results</h1>
      <a href={page ? `/${page}`:"/"}>Go Back</a>
    </div>
  )
}

export default NoResults