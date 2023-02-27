import Image from "next/image";
import React from "react";
import Header from "../Header/Header";
import MapBackground from "../MapBackground/MapBackground";
import empireState from "../../../public/empire_state.webp";
import perfil from "../../../public/perfil.webp";
import citySvg from "../../../public/city.svg";
import DevFrontDecoration from "../DevFrontDecoration/DevFrontDecoration";
import SlideMenu from "../SlideMenu/SlideMenu";

const Presentation = () => {
  return (
    <section id="presentation">
      <div
        className="relative w-full overflow-y-hidden flex flex-col overflow-x-hidden

        lg:h-[100vh] lg:min-h-[none]

        h-[80vh] min-h-[500px]
        "
      >
        <div
          className="
          absolute bg-gradient-to-tr from-purple  to-[#fff0] rounded-[50%]
          z-10 brightness-75
          2xl:top-20 2xl:w-[900px] 2xl:h-[900px] 2xl:left-0 
          xl:w-[740px]  xl:h-[740px]  xl:top-24
          lg:w-[600px]  lg:h-[600px] lg:-left-20 lg:top-20 lg:via-purple
          w-[320px] h-[320px] bottom-1/4 -left-10

        "
        ></div>

        <Header />
        <MapBackground />
        <div
          className="h-[100vh] w-full -z-10 absolute  grayscale
          lg:top-0 lg:right-0

          -top-3/4 right-1/2
          "
        >
          <Image
            src={empireState}
            alt="empire-state"
            className="object-cover max-w-none"
          />
        </div>
        <div
          className="
          h-full w-full absolute overflow-hidden z-[220]"
        >
          <div className="citySvg">
            <Image
              src={citySvg}
              alt="city svg"
              className="z-[60] absolute object-cover 
              lg:bottom-0
              bottom-1/3
              "
            />
          </div>
          <div
            className="aspect-[1] z-50  absolute 
            lg:h-[100vh] lg:bottom-10 lg:w-auto
            w-2/3 bottom-1/3
            "
          >
            <Image
              src={perfil}
              alt="abraão´s picture"
              className="object-cover"
              sizes="(min-width: 0px) 500px
                      (min-width: 1000px) 1000px"
            />
          </div>
          <div
            className="
          bg-bg-color z-[200] absolute rotate-[39deg]
            
            lg:w-[440px] lg:h-[200px] lg:left-[-140px] lg:bottom-0
            w-[120px] h-[60px] left-[-40px] bottom-1/3
            "
          ></div>
          <div
            className="
          bg-bg-color z-[67] absolute 
            lg:w-0
            w-full h-1/3 bottom-[1px]
            "
          ></div>
        </div>

        <div className="self-center z-[9] absolute w-full lg:h-full flex items-center flex-col justify-center h-1/2">
          <div
            className="text-white font-aero
            2xl:text-[15em]
            xl:text-[12em]
            lg:text-[9em] lg:-mt-20
            text-7xl -mt-10
            "
          >
            Abraão
          </div>
          <div
            className="text-white font-aero 
            2xl:text-[7em] 2xl:-ml-3
            xl:text-[5.6em] xl:-ml-2 
            lg:text-[4.22em] lg:-mt-16
            text-3xl -mt-6
            "
          >
            ALBUQUERQUE
          </div>
        </div>
        <SlideMenu />
        <DevFrontDecoration />
      </div>
    </section>
  );
};

export default Presentation;