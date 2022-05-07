const Section = (props) => {
  const text = (
    <div className="container">
      <h1>{props.h1}</h1>
      <h2>{props.h2}</h2>
    </div>)

  return (
    <section className="cards" >
      {!props.leftText && text}
    <div className="our-story-card-animation-container">
        <img alt="" className="our-story-card-img" src={props.img} data-uia="our-story-card-img" />
        { props.video &&
          <div className="our-story-card-animation">
          <video className="our-story-card-video" autoPlay playsInline muted loop width={props.videoWidth}>
            <source src={props.video} type="video/mp4" />
          </video>
        </div>}
    </div>
    {props.leftText && text}
  </section>
  )
}

export default Section