import React, { useState , useEffect } from 'react'
import './Service.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation , Autoplay } from "swiper";
import { addDoc , collection, onSnapshot, } from "firebase/firestore";
import { db } from '../firebase'
import toast, { Toaster } from 'react-hot-toast';
import SectionHead from '../../Components/SectionHead/SectionHead'
import Testmonials from '../../Components/Testmonials/Testmonials'
import { ServiceCard } from '../../Components/Card/Card'
import imgServiceWeb from "../../images/serviceDarw.png"
import imgServiceApp from "../../images/APPdev.png"
import imgReview from "../../images/reviewsDraw.png"


const Service = () => {
    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [review, setReview] = useState('')
    const [image, setImage] = useState('')
    const [data, setData] = useState([])
    
    useEffect(() => {
      onSnapshot(collection(db, "reviews"), (res) => {
        setData(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        console.log(data);
      })
    }, [data])

    const handelImageChange = (e) => {
        setImage(e.target.value)
      }
    const handelNameChange = (e) => {
        setName(e.target.value)
      }
    const handelJobChange = (e) => {
        setJob(e.target.value)
      }
    const handelReviewchange = (e) => {
        setReview(e.target.value)
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() !== '' && job.trim()!== '' && review.trim() !== '') { 
          addDoc(collection(db, "reviews"), { image, job, name, review })
            .then(() => {
              toast.success('Votre message est bien envoyé!', { duration: 2000 });
              setName('')
              setImage('')
              setJob('')
              setReview('')
            })
            .catch(() => {
              toast.error("Le message n'a pas pu être envoyé pour le moment, veuillez réessayer plus tard.")
            })
        } else {
          toast.error("L'input est vide, veuillez remplir pour l'envoyer.");
        }
      }

    return (
        <>
            <div className="container py-4">
                <SectionHead title="Services" description="I offer a range of services including web and mobile development, software testing, and project management. Whether you need a new website, mobile app, or software solution, I can help. Contact me to discuss your project." />
                <div className="row m-auto">
                    <div className="col-md-6 text-center bg-light p-4 rounded-3">
                        <div className="row m-auto g-3">
                            <ServiceCard img={imgServiceWeb} title='Web design' />
                            <ServiceCard img={imgServiceApp} title='App design' />
                        </div>
                    </div>
                    <div className='col-md-6 mt-5'>
                        <SectionHead title="Testmonials" />
                            <Swiper
                                navigation={true} 
                                slidesPerView={"auto"} 
                                autoplay={{ 
                                    delay: 1500, 
                                    disableOnInteraction: false, 
                                }} 
                                
                                modules={[Navigation, Autoplay]} 
                                className="mySwiper" 
                                >
                            { 
                                data.map((review) => {
                                    return <SwiperSlide>
                                     <Testmonials key={review.id} img={review.image} clientName={review.name} clientJob={review.job} testmonial={review.review}/>
                                    </SwiperSlide> 
                                })
                            }
                        </Swiper>
                    </div>
                </div>
                <div className="row m-auto mt-4">
                    <div className="col-md-6 offset-md-3 py-4 reviews position-relative">
                            <h4 className='text-center fw-bold'>Add Your Reviews</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mt-3">
                                    <label htmlFor="image" className='mb-2 fw-bold text-danger'>Votre Image</label>
                                    <input type="file" id="image" value={image} className="form-control" placeholder="Enter votre image " onChange={handelImageChange}/>
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="name" className='mb-2 fw-bold text-danger'>Name</label>
                                    <input type="text" id="name" value={name} className="form-control" placeholder="Enter votre nom " onChange={handelNameChange}/>
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="job" className='mb-2 fw-bold text-danger'>Job</label>
                                    <input type="text" id="job" value={job} className="form-control" placeholder="Enter votre travail " onChange={handelJobChange}/>
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="Review" rows="5" placeholder="Review" required value={review} onChange={handelReviewchange}></textarea>
                                 </div>
                                <div className="form-group mt-3">
                                    <button className="btn btn-danger">Envoyer</button>
                                    <Toaster position="top-right" reverseOrder={false}/>
                                </div>
                            </form>
                            <div className='reviewImg position-absolute'>
                                <img src={imgReview} alt="reviewImg" />
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service