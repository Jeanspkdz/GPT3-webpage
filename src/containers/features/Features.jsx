import "./features.css"
import Feature from "../../components/feature/Feature"

const Features = () => {
  return (
    <section className="section features" id="features">
          <div className="features__grid container">
               <div className="features__heading gradient__text">
                    <h2 className="features__title">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h2>
                    <a  className="features__link" href="#">Request Early Access to Get Started</a>
               </div>
               
               <div className="features__items">
                    <Feature title={"Improving end distrusts instantly "}>
                         From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.
                    </Feature>
                    <Feature title={"Become the tended active"}>
                         Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.
                    </Feature>
                    <Feature title={"Message or am nothing"}>
                         Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.
                    </Feature>
                    <Feature title={"Really boy law county"}>
                         Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.
                    </Feature>
               </div>
          </div>
    </section>
  )
}

export default Features
