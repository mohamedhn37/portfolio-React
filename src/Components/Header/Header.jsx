import React from 'react'
import './Header.css';
import { NavLink } from 'react-router-dom'
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <>
        <header>
            <nav className="navbar navbar-expand-lg">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                <h2><span className="text-danger">M</span>H <span className="text-danger">M</span>OZART</h2>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center align-items-center" id="navbarNav">
                <ul className="navbar-nav first ms-5">
                    <li className="nav-item px-2">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item px-2">
                    <NavLink className="nav-link" to="about.html">About</NavLink>
                    </li>
                    <li className="nav-item px-2">
                    <NavLink className="nav-link" to="resume.html">Resume</NavLink>
                    </li>
                    <li className="nav-item px-2">
                    <NavLink className="nav-link" to="service.html">Services</NavLink>
                    </li>
                    <li className="nav-item px-2">
                    <NavLink className="nav-link" to="/Portfolio">Portfolio</NavLink>
                    </li>
                    <li className="nav-item px-2">
                    <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav social-media p-2 me-3">
                    <li className="nav-item">
                    <NavLink className="nav-link" to="https://twitter.com/MohamedHannaou5" target="_blank"> <FaTwitter size={20}/> </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="https://github.com/mohamedhn37" target="_blank"> <FaGithub size={20}/> </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="https://www.linkedin.com/in/mohamed-hannaoui-3089171b0/" target="_blank"> <FaLinkedin size={20}/> </NavLink>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </header>
    </>
  )
}

export default Header