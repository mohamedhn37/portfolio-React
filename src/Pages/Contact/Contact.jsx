import React, { useState } from 'react'
import "./Contact.css"
import formImage from "../../images/contact-draw.png"
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import SectionHead from '../../Components/SectionHead/SectionHead';
import EarthCanvas from '../../Components/EarthCanvas/EarthCanvas';
const Contact = () => {
    const [name,setName] = useState("") 
    const [email,setEmail] = useState("") 
    const [subject,setSubject] = useState("") 
    const [message,setMessage] = useState("") 

    const handelchangeName = (e)=>{
        setName(e.target.value)
    }
    const handelchangeEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handelchangeSujet = (e)=>{
        setSubject(e.target.value)
    }
    const handelchangeMessage = (e)=>{
        setMessage(e.target.value)
    }

    const  submit= (e)=>{
        e.preventDefault()
        emailjs.send('service_ulmlpa8', 'template_9dslr2h',
        {
                'to_name' : name,
                'to_email': email,
                'to_Subject': subject,
                'message': message

        }, 
        'VcvOoocIa3WIvaCRT')
        .then(()=>{
                toast.success('Votre message est bien envoyer!' , {duration: 6000});
                setName('')
                setEmail('')
                setSubject('')
                setMessage('')
        }).catch(()=>{toast.error("Lemessage n'est pas envoyer pour le moment, resseyer plus-tard")})

    }

  return (
    <div className="container py-4">
        <SectionHead title="CONTACT" description = "Thank you for visiting my contact page. If you have any questions, comments or suggestions, I would love to hear from you. Please feel free to reach out to me using the contact form provided on this page.I am always open to new opportunities, collaborations and challenges, and I would be happy to discuss any potential projects or partnerships. Thank you again for your interest, and I look forward to hearing from you soon."/>
        <div className="row m-auto">
            <div className="col-md-5">
                <iframe className='iframeSource'title="c'est mon emplacement" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.787816011601!2d-7.5729026857085175!3d33.55888885101601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda632d42c57ddd9%3A0x9d4b85aec9efe4a3!2sMosqu%C3%A9e%20Pakistan!5e0!3m2!1sfr!2sma!4v1676753176173!5m2!1sfr!2sma" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                {/* <EarthCanvas/> */}
            </div>
            <div className="col-md-7">
                <h3 className='fw-bold text-danger suggestion'>If you have any suggestion, project or even you want to say Hello.please fill out the form below and I will reply you shortly.</h3>
                <div className='formContent'>
                    <form onSubmit={submit}>
                        <div className="row m-auto">
                            <div className="col-md-6">
                                <div className="form-group mt-3"> 
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required value={name}  onChange={handelchangeName}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mt-3">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required value={email} onChange={handelchangeEmail}/>
                                </div>
                            </div>
                            <div className="form-group mt-3"> 
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required value={subject} onChange={handelchangeSujet}/>
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows="5" placeholder="Message" required value={message} onChange={handelchangeMessage}></textarea>
                            </div>
                            <div className="text-center mt-3">
                                <button type="submit" className="rounded-pill text-white fw-bold">Send Message</button>
                                <Toaster position="top-right" reverseOrder={false}/>
                            </div>
                        </div>
                       
                    </form>
                    <div className='formImg'>
                        <img src={formImage} alt="formImage" />
                    </div>
                </div>
            </div>
        </div> 
    </div>  
  )
}

export default Contact