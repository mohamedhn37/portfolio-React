import React from 'react'
import './SectionHead.css'

const SectionHead = (props) => {
  return (
    <>
    <div className="row text-center mb-3">
         <div className="col-md-12">
                <div className='partAndDescription'>
                    <h2 className="fw-bold position-relative">{props.title}</h2>
                    <p className="fw-bold">{props.description}</p>
                </div>
        </div>
    </div>
    </>
  )
}

export default SectionHead