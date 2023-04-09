import "./Testmonials.css"
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';


const Testimonials = (props) => {
  return (
    <>
      
          <div className="row text-center m-auto testimonials">
              <div className="col-12">
                  <img src={props.img} className="d-block img-fluid rounded-circle" alt="" />
                  <h3>{props.clientName}</h3>
                  <span>{props.clientJob}</span>
                  <p>
                    <FaQuoteLeft size={25} className="quote"/>{props.testmonial}<FaQuoteRight  className="quote" size={25}/>
                  </p>
              </div> 
          </div>
        
    </>
  )
}

export default Testimonials
