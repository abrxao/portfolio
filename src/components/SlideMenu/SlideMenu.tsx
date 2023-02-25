import React, { FunctionComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import {
  GiEagleHead,
  GiMagicLamp,
  GiThreeFriends,
  GiThunderStruck,
} from "react-icons/gi";
import { RiEmpathizeFill } from "react-icons/ri";

const softSkils = [
  { skill: "Perceptive", Icon: GiEagleHead },
  { skill: "Creative", Icon: GiMagicLamp },
  { skill: "Enthusiastic", Icon: GiThreeFriends },
  { skill: "Proactive", Icon: GiThunderStruck },
  { skill: "Empathic", Icon: RiEmpathizeFill },
];

const SlideMenu: FunctionComponent = () => {
  return (
    <div className="absolute z-[999] right-[10%]">
      <div className="relative h-[100vh] flex items-center w-[220px]">
        <div
          className="text-transparent absolute font-aero swiper__title bg-250% bg-clip-text z-[7] flex justify-center
          
          xl:left-6 xl:text-3xl
          lg:text-2xl lg:left-8
          "
          id="softTitle"
        >
        <span>
          SOFT SKILLS
        </span>
          
        </div>
        <Swiper
          slidesPerView={4}
          direction={"vertical"}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="absolute h-[100vh] max-h-[600px] overflow-hidden w-full top-[50%] z-[8]"
        >
          {softSkils.map((elem, index) => {
            const Icon = elem.Icon as FunctionComponent;
            return (
              <SwiperSlide
                key={index + 1}
                className={`flex items-center justify-center cursor-pointer`}
              >
                <div
                  className={`
                  rounded-[2em] bg-white duration-200 overflow-hidden relative 

                  2xl:px-8 2xl:py-8 2xl:hover:px-[110px] 
                  
                  xl:px-7 xl:py-7 xl:hover:px-[90px] 

                  lg:px-6 lg:py-6 lg:hover:px-[80px]                   
                  `}
                >
                  <span
                    className="absolute text-purple flex   h-full duration-200 items-center z-[11] top-0 
                    
                    2xl:text-4xl 2xl:left-[.3em] 

                    xl:text-3xl xl:left-[.4em]

                    lg:text-2xl lg:left-3
                  
                  "
                  >
                    <Icon />

                    <span
                      className="
                      absolute text-center 

                      2xl:w-60 2xl:text-2xl 

                      xl:w-48 xl:text-xl xl:mb-2

                      lg:w-44 lg:text-lg lg:mb-1
                      "
                    >
                      {elem.skill}
                    </span>
                  </span>
                </div>
              </SwiperSlide>
            );
          })}
          {/* {softSkils.map((elem, index) => {
            const Icon = elem.Icon as FunctionComponent;
            return (
              <SwiperSlide
                key={index + 1}
                className={`flex items-center justify-center cursor-pointer`}
              >
                <div
                  className={`
                  rounded-[2em] bg-white duration-200 overflow-hidden relative 

                  2xl:px-8 2xl:py-8 2xl:hover:px-[110px] 
                  
                  xl:px-7 xl:py-7 xl:hover:px-[90px] 

                  lg:px-6 lg:py-6 lg:hover:px-[80px]                   
                  `}
                >
                  <span
                    className="absolute text-purple flex   h-full duration-200 items-center z-[11] top-0 
                    
                    2xl:text-4xl 2xl:left-[.3em] 

                    xl:text-3xl xl:left-[.4em]

                    lg:text-2xl lg:left-3
                  
                  "
                  >
                    <Icon />

                    <span
                      className="
                      absolute text-center 

                      2xl:w-60 2xl:text-2xl 

                      xl:w-48 xl:text-xl xl:mb-2

                      lg:w-44 lg:text-lg lg:mb-1
                      "
                    >
                      {elem.skill}
                    </span>
                  </span>
                </div>
              </SwiperSlide>
            );
          })} */}
        </Swiper>
      </div>
    </div>
  );
};

export default SlideMenu;
