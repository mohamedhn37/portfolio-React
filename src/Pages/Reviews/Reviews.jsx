import React, { useState , useEffect } from 'react'
import './Reviews.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation , Autoplay } from "swiper";
import { addDoc , collection, onSnapshot, } from "firebase/firestore";
import { db, storage } from '../firebase'
import {ref, getDownloadURL, uploadBytes } from 'firebase/storage'
import { Audio } from 'react-loader-spinner'
import toast, { Toaster } from 'react-hot-toast';
import SectionHead from '../../Components/SectionHead/SectionHead'
import Testmonials from '../../Components/Testmonials/Testmonials'
import imgReview from "../../images/reviewsDraw.png"


const Service = () => {
    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [review, setReview] = useState('')
    const [image, setImage] = useState(null)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);


        
    useEffect(() => {
        onSnapshot(collection(db, "reviews"), async (res) => {
          const reviews = res.docs.map((doc) => ({
            id: doc.id,
            image: doc.data().image,
            ...doc.data(),
          }));
          setData(reviews)
        });
        
      }, []);
      

    const handelImageChange = (e) => {
         setImage(e.target.files[0])
      };
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
        setLoading(true);
        if (name.trim() !== '' && job.trim()!== '' && review.trim() !== '') { 
          const reviewData = { job, name, review }
          if (image) {
            const imageRef = ref(storage, `images/${Date.now()}_${image.name}`);
            uploadBytes(imageRef, image)
              .then(() => getDownloadURL(imageRef))
              .then((url) => {
                reviewData.image = url;
                addDoc(collection(db, "reviews"), reviewData)
                  .then(() => {
                    toast.success('Votre message est bien envoyé!', { duration: 2000 });
                    setImage(null)
                    setName('')
                    setJob('')
                    setReview('')
                  })
                  .catch(() => {
                    toast.error("Le message n'a pas pu être envoyé pour le moment, veuillez réessayer plus tard.")
                  })
              })
              .catch((error) => {
                toast.error("L'upload de l'image a échoué : " + error.message);
              })
          } else {
            addDoc(collection(db, "reviews"), reviewData)
              .then(() => {
                toast.success('Votre message est bien envoyé!', { duration: 2000 });
                setName('')
                setJob('')
                setReview('')
              })
              .catch(() => {
                toast.error("Le message n'a pas pu être envoyé pour le moment, veuillez réessayer plus tard.")
              })
          }
        } else {
          toast.error("L'input est vide, veuillez remplir pour l'envoyer.");
        }
        setLoading(false);
        e.target.reset();
      }

    return (
        <>
            <div className="container py-4">
                <SectionHead title="Testmonials" description="Here are some testimonials from satisfied clients I've worked with in the past. They reflect my commitment to delivering high-quality solutions and ensuring customer satisfaction. Take a look to see what some of my clients have to say about working with me." />   
                <div className="row m-auto">
                    <div className="col-md-6 p-4 reviews bg-light  rounded-3">
                            <h4 className='text-center fw-bold'>Add Your Reviews</h4>
                            {loading && (
                                <Audio
                                    height="80"
                                    width="80"
                                    radius="9"
                                    color="green"
                                    ariaLabel="loading"
                                    wrapperStyle
                                    wrapperClass
                              />
                            )}
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mt-3">
                                    <label htmlFor="image" className='mb-2 fw-bold text-danger'>Votre Image</label>
                                    <input type="file" id="image" className="form-control" accept="image/jpeg,image/png" onChange={handelImageChange}/>
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
                    </div>
                    <div className='col-md-6 mt-5 position-relative'>
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
                                return <SwiperSlide key={review.id}>
                                    <Testmonials
                                      img={review.image}
                                      clientName={review.name}
                                      clientJob={review.job}
                                      testmonial={review.review}
                                    />
                                  </SwiperSlide>
                                ;
                              })
                              
                            }
                        </Swiper>
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