import React from 'react'
import "./Card.css"
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
const SkillsCard = (props) => {

  return (
    <>
        <div className="col-3 col-md-2">
            <figure>
                <img src={props.src} alt={props.alt} className='skill img-fluid' />
            </figure>
        </div>
    </>
  )
}
const CertificateCard = (props) => {
  return (
    <>
        <div className="col-md-6">
         <p className='fw-bold text-center text-danger'>{props.title}</p>
            <figure>
                <img src={props.src} alt={props.alt} />
            </figure>
        </div>
    </>
  )
}
const ServiceCard = (props) => {
  return (
    <>
        <div className="col-md-6">
                <div className="card">
                  <img src={props.img} className="card-img-top img-fluid" alt={props.title} />
                  <div className="card-body">
                    <h5 className="card-title fw-bold fs-4">{props.title}</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia itaque perferendis nesciunt quos cupiditate voluptatibus autem possimus. Id, error modi.
                    </p>
                  </div>
                </div>
        </div>
    </>
  )
}


export {PortfolioCard ,SkillsCard, CertificateCard, ServiceCard} 