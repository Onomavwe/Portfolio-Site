import React from "react";
import "./testimonials.css";
import AVTR1 from "../assets/avatar1.jpg";
import AVTR2 from "../assets/avatar2.jpg";
import AVTR3 from "../assets/avatar3.jpg";
import AVTR4 from "../assets/avatar4.jpg";

// import Swiper core and required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";



const data = [
  {
    avatar: AVTR1,
    name: "Peter Obi",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum vero ratione rem dolores nesciunt excepturi totam praesentium minima aspernatur quisquam tempore in, atque distinctio eum recusandae, sint ipsa! Reiciendis!",
  },
  {
    avatar: AVTR2,
    name: "Rily Chin",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum vero ratione rem dolores nesciunt excepturi totam praesentium minima aspernatur quisquam tempore in, atque distinctio eum recusandae, sint ipsa! Reiciendis!",
  },
  {
    avatar: AVTR3,
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum vero ratione rem dolores nesciunt excepturi totam praesentium minima aspernatur quisquam tempore in, atque distinctio eum recusandae, sint ipsa! Reiciendis!",
  },
  {
    avatar: AVTR4,
    name: "Freddie Aminn",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum vero ratione rem dolores nesciunt excepturi totam praesentium minima aspernatur quisquam tempore in, atque distinctio eum recusandae, sint ipsa! Reiciendis!",
  },
];
export default function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 9500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}>
        {
        data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })
        }
      </Swiper>
    </section>
  );
}
