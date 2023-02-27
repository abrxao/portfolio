import React, { FunctionComponent, useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import {
  GiEagleHead,
  GiMagicLamp,
  GiThreeFriends,
  GiThunderStruck,
} from "react-icons/gi";
import { RiEmpathizeFill } from "react-icons/ri";
import "swiper/css";
const softSkils = [
  { skill: "Perceptive", Icon: GiEagleHead },
  { skill: "Creative", Icon: GiMagicLamp },
  { skill: "Enthusiastic", Icon: GiThreeFriends },
  { skill: "Proactive", Icon: GiThunderStruck },
  { skill: "Empathic", Icon: RiEmpathizeFill },
];

const SlideMenu: FunctionComponent = () => {
  return (
    <div
      className="absolute z-[999] bottom-0
      lg:h-full lg:py-0 lg:w-auto lg:right-[10%]
      py-3 h-1/3 w-full
      "
    >
      <div
        className="relative flex items-center 
        lg:w-[220px] lg:-translate-y-[50%]
        h-full w-full 
        "
      >
        <div
          className="text-transparent absolute font-aero swiper__title bg-250% bg-clip-text  flex justify-center
          
          xl:left-6 xl:text-3xl
          lg:text-2xl lg:left-8 lg:top-1/2 lg:w-auto lg:h-full
          text-2xl w-full top-0 
          "
          id="softTitle"
        >
          <span>SOFT SKILLS</span>
        </div>
        <Swiper
          slidesPerView={2.5}
          spaceBetween={10}
          centeredSlides={true}
          direction={"horizontal"}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            768: {
              slidesPerView: 4,
              spaceBetween: 0,
              direction: "vertical",
            },
          }}
          className="absolute max-h-[600px] overflow-hidden lg:top-[50%] z-[8] lg:left-[50%] lg:w-[220px]
          "
        >
          {softSkils.map((elem, index) => {
            const Icon = elem.Icon as FunctionComponent;
            return (
              <SwiperSlide key={index + 1} className={`cursor-pointer `}>
                <div
                  className={`
                  rounded-[2em] bg-white duration-200 overflow-hidden

                  2xl:px-8 2xl:py-8 2xl:hover:px-[110px]
                  
                  xl:px-7 xl:py-7 xl:hover:px-[90px]

                  lg:px-6 lg:py-6 lg:relative lg:w-0 lg:hover:px-[80px]
                  
                  py-1 px-1
                  `}
                >
                  <span
                    className=" text-purple flex h-full duration-200 items-center z-[11] top-0 
                    
                    2xl:text-4xl 2xl:left-[.3em]

                    xl:text-3xl xl:left-[.4em]

                    lg:text-2xl lg:left-3 lg:px-0 lg:absolute

                    xsm:text-lg 

                    px-2 w-auto
                  
                  "
                  >
                    <span>
                      <Icon />
                    </span>

                    <span
                      className=" text-center 

                      2xl:w-60 2xl:text-2xl 

                      xl:w-48 xl:text-xl xl:mb-2

                      lg:w-44 lg:text-lg lg:mb-1 lg:absolute

                      xsm:text-base

                      text-[.75em] w-full
                      
                      "
                    >
                      {elem.skill}
                    </span>
                  </span>
                </div>
              </SwiperSlide>
            );
          })}
          {softSkils.map((elem, index) => {
            const Icon = elem.Icon as FunctionComponent;
            return (
              <SwiperSlide key={index + 1} className={`cursor-pointer `}>
                <div
                  className={`
                  rounded-[2em] bg-white duration-200 overflow-hidden

                  2xl:px-8 2xl:py-8 2xl:hover:px-[110px]
                  
                  xl:px-7 xl:py-7 xl:hover:px-[90px]

                  lg:px-6 lg:py-6 lg:relative lg:w-0 lg:hover:px-[80px]
                  
                  py-1 px-1
                  `}
                >
                  <span
                    className=" text-purple flex h-full duration-200 items-center z-[11] top-0 
                    
                    2xl:text-4xl 2xl:left-[.3em]

                    xl:text-3xl xl:left-[.4em]

                    lg:text-2xl lg:left-3 lg:px-0 lg:absolute

                    xsm:text-lg 

                    px-2 w-auto
                  
                  "
                  >
                    <span>
                      <Icon />
                    </span>

                    <span
                      className=" text-center 

                      2xl:w-60 2xl:text-2xl 

                      xl:w-48 xl:text-xl xl:mb-2

                      lg:w-44 lg:text-lg lg:mb-1 lg:absolute

                      xsm:text-base

                      text-[.75em] w-full
                      
                      "
                    >
                      {elem.skill}
                    </span>
                  </span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SlideMenu;
