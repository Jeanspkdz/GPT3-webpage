import { useState } from "react"

import {RiMenu3Line, RiCloseLine} from "react-icons/ri"
import logo from "../../assets/logo.svg"
import "./header.css"


const Menu = ({className}) =>  {

     return (
          <>
               <a href="#home" className={className}>Home</a>
               <a href="#wgpt3" className={className}>What is GPT3?</a>
               <a href="#features" className={className}>Case Studies</a>
               <a href="#possibility" className={className}>Open AI</a>
               <a href="#blog" className={className}>Library</a>
          </>
     )
}
    


const Header = () => {
     const [isActiveMenu, setIsActiveMenu] = useState(false)

   

     return (
          <header className="navbar container">
                    <nav className="navbar-links">
                         <img className="navbar-links__logo" src={logo} alt="logo" />

                         <div className="navbar-links__container">
                              <Menu className="navbar-links__item"/>
                         </div>

                         <div className="navbar-links__sign">
                              <a href="#" className="navbar-links__btn btn btn">Sign In</a>
                              <a href="#" className="navbar-links__btn btn btn--primary">Sign Up</a>
                         </div>

                         <div className="navbar-links__menu">
                             <button 
                                   type="button" 
                                   className="navbar-links__btn-menu btn"
                                   onClick={() => setIsActiveMenu(!isActiveMenu)}
                              >
                                   {isActiveMenu ?  <RiCloseLine /> : <RiMenu3Line/> }
                             </button>


                             {isActiveMenu && (
                              <div className={`navbar-links__container--menu ${isActiveMenu && 'scale-up-center'}`}>
                                  <Menu/>
                                   <div className="navbar-links__sign--menu">
                                        <a href="#" className="navbar-links__btn btn btn">Sign In</a>
                                        <a href="#" className="navbar-links__btn btn btn--primary">Sign Up</a>
                                   </div>
                              </div>
                             )}
                         </div>

                        

                         {/* <div className="navbar-links__sign">
                              <a href="#" className="navbar-links__btn btn btn">Sign In</a>
                              <a href="#" className="navbar-links__btn btn btn--primary">Sign Up</a>
                         </div> */}
                    </nav>    
          </header>
     )
}

export default Header
