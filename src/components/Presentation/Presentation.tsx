import Image from "next/image";
import React from "react";
import Header from "../Header/Header";
import MapBackground from "../MapBackground/MapBackground";
import empireState from "../../../public/empire_state.jpg";
import perfil from "../../../public/perfil.png";
import citySvg from "../../../public/city.svg";
import DevFrontDecoration from "../DevFrontDecoration/DevFrontDecoration";
import SlideMenu from "../SlideMenu/SlideMenu";

const About = () => {
  return (
    <section id="presentation">
      <div className="relative w-full h-[100vh] overflow-y-hidden flex flex-col overflow-x-hidden">
        <SlideMenu />
        <div
          className="
          absolute bg-gradient-to-tr from-purple via-purple to-[#fff0] rounded-[50%]
          z-10 brightness-75
          2xl:top-20 2xl:w-[900px] 2xl:h-[900px] 2xl:left-0 
          xl:w-[740px]  xl:h-[740px]  xl:top-24
          lg:w-[600px]  lg:h-[600px] lg:-left-20 lg:top-20

        "
        ></div>

        <Header />
        <MapBackground />
        <div className="h-[100vh] w-full -z-10 absolute top-0 grayscale">
          <Image
            src={empireState}
            alt="empire-state"
            className="object-cover max-w-none"
          />
          4f1ca0
        </div>
        <div>
          <Image
            src={citySvg}
            alt="city svg"
            className="z-[60] absolute bottom-0"
          />
        </div>
        <div className="aspect-[1] z-50 bottom-10 absolute h-[100vh]">
          <Image src={perfil} alt="abraão´s picture" className="object-cover" />
        </div>

        <div className="self-center z-[9] absolute w-full h-[100vh] flex items-center flex-col justify-center">
          <h1
            className="text-white font-aero -mt-20
            2xl:text-[15em]
            xl:text-[12em]
            lg:text-[9em]
            "
          >
            Abraão
          </h1>
          <h2
            className="text-white font-aero -ml-3
            2xl:text-[7em] 
            xl:text-[5.6em] xl:-ml-2 xl:-mt-20 
            lg:text-[4.22em] lg: -mt-16
            "
          >
            ALBUQUERQUE
          </h2>
        </div>
        <div
          className="
        bg-[#111] z-[200] absolute bottom-0 rotate-[39deg]
          
          lg:w-[440px] lg:h-[200px] lg:left-[-140px]
          "
        ></div>
        <DevFrontDecoration />
      </div>
    </section>
  );
};

export default About;
