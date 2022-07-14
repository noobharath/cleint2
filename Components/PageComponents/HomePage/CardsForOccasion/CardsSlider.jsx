import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import SliderData from '../../../data/CardsSliderData' ;
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";



// import required modules
import { EffectCards } from "swiper";

export default function CardsSlider() {
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {
          
          SliderData.map((item)=>{
          return(
          <SwiperSlide>
            <div className="swiper">
              <img src={item.image} />
            </div>
          </SwiperSlide>
          )})
        }
      </Swiper>
      <style>
        {`
          #app {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .swiper {
            width: 25vw;
            height: 35vw;
          }
          .swiper img{
            width: 100%;

          }
          .swiper-slide {
            display: flex;
            align-items: center;
            justify-content: center;
            // border-radius: 18px;
            font-size: 22px;
            font-weight: bold;
            color: #fff;
          }
          @media screen and (max-width: 768px) {
            .swiper {
              width: 11rem;
              height: 15rem;
            }
          }
        `}
      </style>
    </div>
  );
}
