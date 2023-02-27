import Link from "next/link";
import React from "react";
import { SlLocationPin } from "react-icons/sl";
import {Tooltip} from "@material-tailwind/react";
import {GiGraduateCap} from "react-icons/gi";
import {BiCodeAlt} from "react-icons/bi";

const PersonalInfos = () => {
  return (
    <div className="w-full lg:px-4 font-aero">
      <div
        className=" mt-8 mb-4 text-white text-2xl
      lg:text-3xl
      "
      >
        Personal infos
      </div>

      <div
        className=" font-light text-white text-justify 
      lg:text-lg lg:mt-6
      "
      >
        <Tooltip
          content="First city to end slavery in Brazil"
          className="border border-white p-1 px-2 rounded-md bg-bg-color font-aero"
        >
          <Link
            target={"_blank"}
            href="https://www.google.com/maps/place/3%C2%B043'10.1%22S+38%C2%B030'42.9%22W/@-3.7259818,-38.5199757,14.75z/data=!4m4!3m3!8m2!3d-3.7194722!4d-38.5119167"
            className="flex"
          >
            <span
              className="bg-white text-purple p-1 h-6 flex items-center justify-center rounded-md mr-2 cursor-pointer
            lg:p-2 lg:h-8 lg:text-xl lg:mr-4
            "
            >
              <SlLocationPin />
            </span>
            I was born and live in Fortaleza{" "}
          </Link>
        </Tooltip>
      </div>

      <div
        className=" font-light text-white text-justify mt-3 
      lg:text-lg lg:mt-6
      "
      >
        <Tooltip
          content="Maximum grade at mec (ministry of education)"
          className="border border-white p-1 px-2 rounded-md bg-bg-color"
        >
          <Link
            target={"_blank"}
            href="https://www.ufc.br/noticias/noticias-de-2018/11520-curso-de-engenharia-de-telecomunicacoes-e-reconhecido-com-nota-maxima-pelo-inep"
            className="flex"
          >
            <span
              className="bg-white text-purple p-1 h-6 flex items-center justify-center rounded-md mr-2 cursor-pointer
            lg:p-2 lg:h-8 lg:text-xl lg:mr-4
            "
            >
              <GiGraduateCap />
            </span>
            Studying third semester of telecommunications engineering at UFC
            (Federal University of Ceará)
          </Link>
        </Tooltip>
      </div>

      <div
        className=" font-light text-white text-justify mt-3 
      lg:text-lg lg:mt-6
      "
      >
        <Link
          target={"_blank"}
          href="https://ebaconline.com.br/"
          className="flex"
        >
          <span
            className="bg-white text-purple p-1 h-6 flex items-center justify-center rounded-md mr-2 cursor-pointer
            lg:p-2 lg:h-8 lg:text-xl lg:mr-4 
            "
          >
            <BiCodeAlt />
          </span>
          90% completion in the Front-End Engineer course by EBAC (Escola
          Britanica de Artes Criativas e Tecnologia)
        </Link>
      </div>
    </div>
  );
};

export default PersonalInfos;
