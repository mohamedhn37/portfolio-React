import React from 'react'
import './Service.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation , Autoplay } from "swiper";
import SectionHead from '../../Components/SectionHead/SectionHead'
import Testmonials from '../../Components/Testmonials/Testmonials'
import { ServiceCard } from '../../Components/Card/Card'
import imgServiceWeb from "../../images/serviceDarw.png"
import imgServiceApp from "../../images/APPdev.png"
import imgServiceUIUX from "../../images/UIUX.png"
import imgTestMonial1 from "../../images/testimonials-1.jpg"
import imgTestMonial2 from "../../images/testimonials-2.jpg"
import imgTestMonial3 from "../../images/testimonials-3.jpg"


const Service = () => {
    const ClientsTestmonial = [
        {
            id: 1,
            Name: 'Saul Goodman',
            Job: 'Ceo & Founder',
            Testmonial: 'Mohamed is a highly skilled and dedicated developer. He consistently goes above and beyond to ensure that his clients needs are met, and he delivers high-quality solutions on time and on budget ',
            image: imgTestMonial1,
        },
        {
            id: 2,
            Name: 'Sara Wilson',
            Job: 'Designer',
            Testmonial: 'Working with Mohamed was an absolute pleasure. He is professional, knowledgeable, and passionate about what he does. He is also a great communicator and kept us informed throughout the project ',
            image: imgTestMonial2,
        },
        {
            id: 3,
            Name: 'Jena Carlis',
            Job: 'Store Owner',
            Testmonial: 'Mohamed was able to take our complex requirements and turn them into a fully functional and user-friendly web application. He was always responsive and kept us informed throughout the development process. We were thrilled with the final product.',
            image: imgTestMonial3,
        },
    ]

    return (
        <>
            <div className="container py-4">
                <SectionHead title="Services" description="I offer a range of services including web and mobile development, software testing, and project management. Whether you need a new website, mobile app, or software solution, I can help. Contact me to discuss your project." />
                <div className="row m-auto">
                    <div className="col-md-6 text-center bg-light p-4 rounded-3">
                        <div className="row m-auto g-3">
                            <ServiceCard img={imgServiceWeb} title='Web design' />
                            <ServiceCard img={imgServiceApp} title='App design' />
                            <ServiceCard img={imgServiceUIUX} title='UI/UX design' />
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
                                ClientsTestmonial.map((testimonial) => {
                                    return <SwiperSlide>
                                     <Testmonials key={testimonial.id} img={testimonial.image} clientName={testimonial.Name} clientJob={testimonial.Job} testmonial={testimonial.Testmonial}/>
                                    </SwiperSlide> 
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service