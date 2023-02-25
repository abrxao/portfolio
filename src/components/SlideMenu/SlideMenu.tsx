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
    <div className="w-full">
      <Swiper
        slidesPerView={3.5}
        direction={"vertical"}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className=""
      >
        {softSkils.map((elem, index) => {
          const Icon = elem.Icon as FunctionComponent;
          return (
            <SwiperSlide
              key={index + 1}
              className={`flex items-center justify-center cursor-pointer`}
            >
              <div
                className={`w-[4em] h-[4em] rounded-[2em] bg-white hover:w-[220px] duration-200   overflow-hidden relative `}
              >
                <span className="absolute text-purple text-4xl flex left-[.3em] gap-[3em] h-full hover:gap-5 duration-200 items-center z-[11] ">
                  <Icon />

                  <span className="w-[220px] text-2xl mb-2 absolute text-center pl-4">
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
            <SwiperSlide
              key={index + 1}
              className={`flex items-center justify-center cursor-pointer `}
            >
              <div
                className={`w-[4em] h-[4em] rounded-[2em] bg-white hover:w-[220px] duration-200   overflow-hidden relative bg-[250%]`}
              >
                <span className="absolute text-purple text-4xl flex left-[.3em] gap-[3em] h-full hover:gap-5 duration-200 items-center z-[11]">
                  <Icon />
                  <span className="w-[220px] text-2xl mb-2 absolute text-center pl-4">
                    {elem.skill}
                  </span>
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        className="text-transparent absolute text-2xl font-aero swiper__title bg-250% bg-clip-text z-[7] top-[30%] right-[23%]"
        id="softTitle"
      >
        SOFT SKILLS
      </div>
    </div>
  );
};

export default SlideMenu;
