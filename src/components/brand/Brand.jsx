import "./brand.css"
import {google, slack, dropbox, shopify, atlassian} from "./imports"

const Brand = () => {
     return (
          <section className="brand section">
              <div className="brand__grid container">
                     <div className="brand__item">
                         <img src={google} alt="brand google" />
                    </div>

                    <div className="brand__item">
                         <img src={slack} alt="brand slack" />
                    </div>

                    <div className="brand__item">
                         <img src={dropbox} alt="brand dropbox" />
                    </div>

                    <div className="brand__item">
                         <img src={shopify} alt="brand shopify" />
                    </div>

                    <div className="brand__item">
                         <img src={atlassian} alt="brand atlassian" />
                    </div>
              </div>
          </section>
     )
}

export default Brand
