import "./home.css"
import hero from "../../assets/ai.png"
import people from "../../assets/people.png"

const Home = () => {
  return (
    <div className="home" id="home">
          <div className="home__grid container">
               <div className="home__content">
                    <h1 className="home__title gradient__text">Let’s Build Something amazing with GPT-3 OpenAI</h1>

                    <p className="home__text">
                         Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                    </p>

                    <form action=""  className="home__form">
                         <input type="text"  className="home__input" placeholder="Your Email Address"/>
                         <button type="submit" className="home__submit btn btn--primary">Get Started</button>
                    </form>

                    <div className="home__people">
                         <img src={people} alt="image people who have proved GPT3"  className="home__profile"/>
                         <p className="home__request">1,600 people requested access a visit in last 24 hours</p>
                    </div>
               </div>     

               <img src={hero} alt="Image Hero"  className="home__hero"/>
          </div>    
    </div>
  )
}

export default Home
