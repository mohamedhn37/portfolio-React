import React from 'react'
import './PortfolioCard.css'
import { FaArrowRight } from 'react-icons/fa';


const PortfolioCard = (props) => {

  return (
    <> 
        <div className="col-sm-6 col-lg-4">
                <div className="card">
                  <img src={props.img} className="card-img-top" alt={props.title} />
                  <div className="card-body">
                    <h5 className="card-title fw-bold fs-4">{props.title}</h5>
                    <p className="card-text">
                      <span className="text-danger"> {props.category} /{" "}</span> {props.date}
                    </p>
                    <a href={props.demo} target="_blank" rel="noreferrer">
                      See Demo 
                      <FaArrowRight/>
                    </a>
                  </div>
                </div>
        </div>
    </>
  )
}

export default PortfolioCard