import "./possibility.css"
import possibilityImage from "../../assets/possibility.png"


const Possibility = () => {
  return (
    <section className="possibility section" id="possibility">
          <div className="possibility__grid container">
               <img src={possibilityImage} alt="Possibility image"  className="possibility__img"/>

              <div className="possibility__info">
                    <p className="possibility__extra">Request Early Access to Get Started</p>
                    <div className="possibility__heading gradient__text">
                         <h2 className="possibility__title">The possibilities are beyond your imagination</h2>
                    </div>

                    <p className="possibility__data">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <p className="possibility__extra">Request Early Access to Get Started</p>
              </div>
          </div>
    </section>
  )
}

export default Possibility
