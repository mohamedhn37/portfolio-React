import React from 'react'
import "./SkillsCard.css"

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

export {SkillsCard, CertificateCard} 