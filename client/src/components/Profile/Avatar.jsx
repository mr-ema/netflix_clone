const Avatar = (props) => {
  return (
    <div className="avatar-container" onClick={() => {window.location.href = "/home"}}>
      <div style={{backgroundImage: props.avatar}} alt="avatar" className="avatar"></div>
      <span className="avatar-name">{props.name}</span>
    </div>
  )
}

export default Avatar