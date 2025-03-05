import React from 'react'
import "./Footer.css"
import { NavLink } from 'react-router-dom'
import { FaArrowCircleUp } from "react-icons/fa";

const Footer = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
  return (
    <>
    <footer className="text-center text-white">
        <div className="container-fluid py-3">
            <div className="row">
                <div className="col-11">
                <p className="fw-bold">&copy; Copyright MH-MOZART 2025. All Rights Reserved</p>
                </div>
                <div className="col-1">
                <NavLink  onClick={handleScrollToTop} className="position-absolute"><FaArrowCircleUp className='CircleUp text-white' size={30}/></NavLink>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer