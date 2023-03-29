import React from 'react'
import "./Contact.css"
import formImage from "../../images/contact-draw.png"


const Contact = () => {
  return (
    <div className='contact'>
    <div className="container py-4">
        <div className="row text-center mb-3">
            <div className="col-md-12">
                <div className='partAndDescription'>
                    <h2 className="fw-bold position-relative">CONTACT</h2>
                    <p className="fw-bold">Thank you for visiting my contact page. If you have any questions, comments or suggestions, I would love to hear from you. Please feel free to reach out to me using the contact form provided on this page.I am always open to new opportunities, collaborations and challenges, and I would be happy to discuss any potential projects or partnerships. Thank you again for your interest, and I look forward to hearing from you soon.</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <iframe className='iframeSource' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.787816011601!2d-7.5729026857085175!3d33.55888885101601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda632d42c57ddd9%3A0x9d4b85aec9efe4a3!2sMosqu%C3%A9e%20Pakistan!5e0!3m2!1sfr!2sma!4v1676753176173!5m2!1sfr!2sma" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div className="row pt-5">
            <div className="col-md-8 offset-md-4 mt-5">
                <h3 className='fw-bold text-danger'>If you have any suggestion, project or even you want to say Hello.please fill out the form below and I will reply you shortly.</h3>
                <div className='formContent'>
                    <form>
                        <div className="form-group mt-3"> 
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group mt-3">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group mt-3"> 
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                        </div>
                        <div className="text-center mt-3">
                            <button type="submit" className="rounded-pill text-white fw-bold">Send Message</button>
                        </div>
                    </form>
                    <div className='formImg'>
                        <img src={formImage} alt="formImage" />
                    </div>
                </div>
            </div>
        </div>  
    </div>  
   </div>
  )
}

export default Contact