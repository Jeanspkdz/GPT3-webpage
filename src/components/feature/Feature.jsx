import "./feature.css"

const Feature = ({title, children}) => {
  return (
    <div className="feature">
         <h3 className="feature__title">{title}</h3>  

          <div className="feature__data">
               {children}
          </div> 
    </div>
  )
}

export default Feature
