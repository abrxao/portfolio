import Image from "next/image";
import React from "react";
import Header from "../Header/Header";
import MapBackground from "../MapBackground/MapBackground";
import empireState from '../../../public/empire_state.jpg';
import perfil from '../../../public/perfil.png';
import citySvg from "../../../public/city.svg";
import DevFrontDecoration from "../DevFrontDecoration/DevFrontDecoration";
import SlideMenu from "../SlideMenu/SlideMenu";

const About = () =>{

 return (
   <section id="presentation">
     <div className="relative w-full h-[100vh] min-h-[600px] overflow-y-hidden flex flex-col overflow-x-hidden">
       <SlideMenu />
       <div
         className="
       2xl:w-[900px] 2xl:h-[900px] 2xl:left-0 xl:w-[740px]  xl:h-[740px] xl:-left-20 absolute bg-gradient-to-tr from-purple via-purple to-[#fff0] rounded-[50%] 2xl:top-20 xl:top-[6em] z-10 brightness-75"
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

       <Image
         src={citySvg}
         alt="city svg"
         className="z-[60] absolute bottom-0"
       />
       <Image
         src={perfil}
         alt="abraão´s picture"
         width={840}
         className="aspect-[1] z-50 bottom-10 absolute"
       />
       <div className="self-center z-[9] absolute w-full h-[100vh] flex items-center flex-col justify-center">
         <h1 className="text-white 2xl:text-[15em] -mt-20 xl:text-[12em] font-aero">
           Abraão
         </h1>
         <h2 className="text-white 2xl:text-[7em] xl:text-[5.6em] xl:-ml-2 font-aero -mt-20 -ml-3">
           ALBUQUERQUE
         </h2>
       </div>
       <div className="2xl:w-[400px] 2xl:h-[200px] 2xl:left-[-120px] bg-[#111] z-[200] absolute bottom-0 rotate-[39deg]"></div>
       <DevFrontDecoration />
     </div>
   </section>
 );
}

export default About;
