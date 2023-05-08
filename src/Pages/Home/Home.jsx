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
            <p className='homeShortDescription'>I BUILD BEAUTIFUL MODERN WEBSITES I'm Mohamed HANNAOUI | Front-end developer, I've found that many clients enjoy my unique design style, high quality of work, and reasonable rates.</p>
            <a href="/Contact" className="btn btn-danger rounded-pill px-5 py-2 text-white fw-bold">CONTACT ME</a>
          </div>
          <div className="col-md-5 text-center bg-light p-4 rounded-3">
            <figure className='figMH'>
                <img src={MonImage} alt="moi" />
                <span className='avilable'></span>
            </figure>
            <h3 className='text-center py-2 fw-bold'>MOHAMED HANNAOUI</h3>
            <p className='text-center py-1 text-danger fw-bold'>FRONT-END DEVELOPER</p>
            <h5>Mohamed HANNAOUI, 22 ,I am a beginner frontend developer (with knowledge in backend), passionate about creating websites and applications. Having recently obtained my basic degree in computer science, database option, I am now ready to apply my knowledge to create innovative solutions. I enjoy working on challenging projects and finding creative solutions to development problems.</h5>        
            <button onClick={openCV} className="btn btn-danger rounded-pill px-5 py-2 text-white fw-bold my-3">Download My Resume</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home