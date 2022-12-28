import React from 'react';
import './testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,  
      review:
      "Flawless! I like the App and the website. 3 jobs in the first week. The site is very well organized."
    },
    {
      img: profilePic2,
      review:
      "Perfect solution for someone who just wants to work with freelancers, find the most talented professionals and really focus on the best results."
    },
    {
      img: profilePic3,
      review:
      "The service I received during the delivery issue was GREAT! I liked it so much that I'm already buying more books ."
    },
    ,
    {
      img: profilePic4,
      review:
      "Provides the simplicity and support that is necessary for smaller e-commerce businesses. The best part is the fantastic support to address questions along the way."
    }

  ]
  return(
    <div className="t-wrapper" id='Testimonials'>
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
         <div className="blur t-blur2" style={{background: 'var(--purple)'}}></div>
         <div className="blur t-blur1" style={{ background: '#ABF1FF94'}}></div>
      </div>

      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {clients.map((client, index)=>{
          return(
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
}

export default Testimonials;