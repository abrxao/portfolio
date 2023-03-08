import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import  svgFooter from '../../../public/fotter.svg'; 

const Contact = () => {
  return (
    <section id="contact" className=" w-full bg-bg-color">
      <div className="-mt-1 max-w-[1400px] m-auto py-20 pb-32 flex flex-col items-center font-aero text-white w-full ">
        <div
          className="w-2/3 lg:h-3 h-2 bg-orange animate-contact relative rounded-3xl shadow-inner shadow-[#111a] 
            lg:mt-10
            "
        >
          <div
            style={{ animationDelay: "-2500ms" }}
            className="w-3/4 m-auto lg:h-3 h-2 bg-orange mt-3 animate-contact left-1/2 -translate-x-1/2 absolute opacity-75 rounded-3xl shadow-inner shadow-[#111a]
            lg:mt-5
            "
          ></div>
          <div
            style={{ animationDelay: "-4500ms" }}
            className="w-1/2 m-auto left-1/2 -translate-x-1/2 lg:h-3 h-2 absolute bg-orange mt-6 animate-contact opacity-50 rounded-3xl shadow-inner shadow-[#111a]
            lg:mt-10
            "
          ></div>
        </div>
        <div
          className="text-orange font-aero w-full text-center
        lg:text-7xl lg:my-20
        text-5xl mx-4 mt-8
        "
        >
          contact.
        </div>

        <ul className="lg:flex lg:ml-10 w-full lg:justify-around grid grid-cols-1 gap-x-10 lg:max-w-none gap-y-5 mt-10 xsm:grid-cols-2 px-6 xsm:pl-10 max-w-[550px]">
          <li className="text-lg hover:opacity-80 hover:tracking-widest w-full flex lg:justify-center justify-center duration-150">
            <div className="flex ">
              <span
                className="bg-white text-purple p-1 h-6 flex items-center justify-center rounded-md mr-2 cursor-pointer
                    lg:p-2 lg:h-10 lg:text-2xl lg:mr-4 lg:-mt-1
                    "
              >
                <SiGmail />
              </span>
              <Link
                href={"mailto:abrxao@gmail.com"}
                target="_blank"
                className="lg:text-2xl"
              >
                abrxao@gmail.com
              </Link>
            </div>
          </li>
          <li className="text-lg hover:opacity-80 hover:tracking-widest w-full flex justify-center lg:justify-center duration-150">
            <div className="flex">
              <span
                className="bg-white text-purple p-1 h-6 flex items-center justify-center rounded-md mr-2 cursor-pointer
                lg:p-2 lg:h-10 lg:text-2xl lg:mr-4 lg:-mt-1
                "
              >
                <BsWhatsapp />
              </span>
              <Link
                href={"https://api.whatsapp.com/send?phone=5585994308558"}
                target="_blank"
                className="lg:text-2xl"
              >
                WhatsApp
              </Link>
            </div>
          </li>

          <li className="text-lg hover:opacity-80 hover:tracking-widest w-full flex lg:justify-center justify-center duration-150">
            <div className="flex">
              <span
                className="bg-white text-purple p-1 h-6 flex items-center justify-center rounded-md mr-2 cursor-pointer
                    lg:p-2 lg:h-10 lg:text-2xl lg:mr-4 lg:-mt-1 
                    "
              >
                <RiLinkedinLine />
              </span>
              <Link
                href={"https://www.linkedin.com/in/abrxao/"}
                target="_blank"
                className="lg:text-2xl"
              >
                LinkedIn
              </Link>
            </div>
          </li>

          <li className="text-lg hover:opacity-80 hover:tracking-widest w-full flex lg:justify-centerjustify-center duration-150">
            <div className="flex">
              <span
                className="bg-white text-purple p-1 h-6 flex items-center justify-center rounded-md mr-2 cursor-pointer
                    lg:p-2 lg:h-10 lg:text-2xl lg:mr-4 lg:-mt-1
                    "
              >
                <FiGithub/>
              </span>
              <Link
                href={"https://github.com/abrxao"}
                target="_blank"
                className="lg:text-2xl"
              >
                Github
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="h-40 bg-bg-color relative">
        <Image src={svgFooter} alt="final svg" className=" absolute zoomSvg object-none h-60 bottom-0" />
      </div>
      
    </section>
  );
};

export default Contact;
