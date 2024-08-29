import {Blog, Features,  Possibility, WhatGPT3 ,Home} from "./containers"
import {Brand, CTA} from "./components"
import {Header, Footer} from "./layouts"

import "./App.css"

const App = () => {
  return (
     <div className="App">
          <section className="gradient__bg">
               <Header/>
               <Home/>
          </section>

          <Brand/>
          <WhatGPT3/>
          <Features/>
          <Possibility/>
          <CTA/>
          <Blog/>
          <Footer/>
     </div>
  )
}

export default App
