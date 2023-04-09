import React from 'react'
import './Home.css'
import MonImage from '../../images/MH.png';



const Home = () => {

    const openCV = () => {
        window.open('https://drive.google.com/file/d/1Tk9-5iHOzbvZo4fdCLxoUphe1wzzA6gj/view?usp=share_link');
      }
  return (
    <>
      <div className="container my-5">
        <div className="row m-auto">
          <div className="col-md-7 mb-3 home">
            <h1 className="homeTitle">I BUILD BEAUTIFUL MODERN WEBSITES</h1>
            <p className="homeSubstitle">I'm Mohamed HANNAOUI | Full-Stack Developer</p>
            <p className='homeShortDescription'>I BUILD BEAUTIFUL MODERN WEBSITES I'm Mohamed HANNAOUI | Full-Stack Developer As a freelance Front-end developer, I've found that many clients enjoy my unique design style, high quality of work, and reasonable rates.</p>
            <a href="/Contact" className="btn btn-danger rounded-pill px-5 py-2 text-white fw-bold">CONTACT ME</a>
          </div>
          <div className="col-md-5 text-center bg-light p-4 rounded-3">
            <figure className='figMH'>
                <img src={MonImage} alt="moi" />
                <span className='avilable'></span>
            </figure>
            <h3 className='text-center py-2 fw-bold'>MOHAMED HANNAOUI</h3>
            <p className='text-center py-1 text-danger fw-bold'>FULL-STACK DEVELOPER</p>
            <h5>I am a full-time freelance full-stack developer from Morocco. who specializes in creating dynamic and beautiful web pages. I have been in the field for nearly 2 years and have been loving every minute of it.</h5>        
            <button onClick={openCV} className="btn btn-danger rounded-pill px-5 py-2 text-white fw-bold my-3">Download My Resume</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home