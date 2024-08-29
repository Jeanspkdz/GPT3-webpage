import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
          <div className="footer__container container">
               <div className="footer__message">
                    <h2 className="footer__heading gradient__text">Do you want to step in to the future before others</h2>
                    
                    <a href="#" className="footer__request">Request Early Access</a>
               </div>
               
               <div className="footer__grid">
                    <div className="footer__box">
                         <h3 className="footer__logo">GPT-3</h3>
                         <ul className="footer__address">
                               <li>
                                   Crechterwoord K12 182 DK <br/> Alknjkcb, All Rights Reserved
                              </li>
                         </ul>
                    </div>
               
                    <div className="footer__box">
                         <h3 className="footer__title">Links</h3>
               
                         <ul className="footer__list">
                              <li>
                                   <a href="#" className="footer__link">Overons</a>
                              </li>
               
                              <li>
                                   <a href="#" className="footer__link">Social Media</a>
                              </li>
               
                              <li>
                                   <a href="#" className="footer__link">Counters</a>
                              </li>
               
                              <li>
                                   <a href="#" className="footer__link">Contact</a>
                              </li>
                         </ul>
               
                         
                    </div>
               
                    <div className="footer__box">
                         <h3 className="footer__title">Company</h3>
               
                         <ul className="footer__list">
                              <li>
                                   <a href="#" className="footer__link">Terms & Conditions</a>
                              </li>
               
                              <li>
                                   <a href="#" className="footer__link">Privacy Policy</a>
                              </li>
               
                              <li>
                                   <a href="#" className="footer__link">Contact</a>
                              </li>
                         </ul>
                    </div>
                    
               
                    <div className="footer__box">
                         <h3 className="footer__title">Get in touch</h3>
               
                         <ul className="footer__list">
                              <li>
                                   <a href="#" className="footer__link">Crechterwoord K12 182 DK</a>
                              </li>
               
                              <li>
                                   <a href="#" className="footer__link">085-132567</a>
                              </li>
               
                              <li>
                                   <a href="#" className="footer__link">info@payme.net</a>
                              </li>
                         </ul>
                    </div>
               </div>
          </div>

          <p className="footer__copyright">
               © 2021 GPT-3. All rights reserved.
          </p>
    </footer>
  )
}

export default Footer
