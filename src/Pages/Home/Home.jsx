import React from 'react'
import './Home.css'
import MonImage from '../../images/MH.jpg';



const Home = () => {

    const openCV = () => {
        window.open('https://drive.google.com/file/d/1lv8VBz9hgInl8cRCQ2OAxAwkSHvydAlv/view?usp=sharing');
      }
  return (
    <>
      <div className="container my-5">
        <div className="row m-auto">
          <div className="col-md-7 mb-3 home">
            <h1 className="homeTitle">I DEVELOP INNOVATIVE SOFTWARE SOLUTIONS & DATA ANALYTICS</h1>
            <p className="homeSubstitle">I'm Mohamed HANNAOUI | Software Developer & Data Analyst</p>
            <p className='homeShortDescription'>I create advanced web applications and data-driven solutions. With expertise in software development and data analysis, I build efficient, scalable, and high-performance applications, ensuring quality and innovation in every project</p>
            <a href="/Contact" className="btn btn-danger rounded-pill px-5 py-2 text-white fw-bold">CONTACT ME</a>
          </div>
          <div className="col-md-5 text-center bg-light p-4 rounded-3">
            <figure className='figMH'>
                <img src={MonImage} alt="moi" />
                <span className='avilable'></span>
            </figure>
            <h3 className='text-center py-2 fw-bold'>MOHAMED HANNAOUI</h3>
            <p className='text-center py-1 text-danger fw-bold'>SOFTWARE DEVELOPER & DATA ANALYST</p>
            <h5 className="justify">Mohamed HANNAOUI, 24, an experienced software developer and data analyst with a strong background in web development, data processing, and IT security.
                With a degree in computer science and hands-on experience in React.js, Node.js, Python, and data analysis, I specialize in building scalable solutions for software and data-driven projects.
                I am passionate about working on innovative projects, developing data-centric applications, and optimizing systems for maximum efficiency and performance.</h5>        
            <button onClick={openCV} className="btn btn-danger rounded-pill px-5 py-2 text-white fw-bold my-3">Download My Resume</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home