import Image from "next/image";
import React, { FunctionComponent } from "react";
import clickgameGif from "public/clickgame.gif";
import data_boardGif from "public/data_board.gif";
import apex from "public/apex.svg";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { FiGithub } from "react-icons/fi";
import IconBtn from "../IconBtn/IconBtn";
import { SiReact, SiChakraui, SiTypescript } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import ImgModal from "../ImgModal/ImgModal";
import Link from "next/link";

const Apex = apex as FunctionComponent;

const Projects = () => {
  return (
    <section
      id="projects"
      className="-mt-1 bg-bg-color px-5 py-20 flex flex-col items-center font-aero"
    >
      <div className="w-full max-w-[1400px] flex items-center flex-col">
        <div
          className="w-1/2 h-3 animate-about relative bg-orange rounded-3xl shadow-inner shadow-[#111a]
        lg:mt-10
        "
        >
          <span className="bg-orange absolute h-full rounded-3xl animate-aboutl"></span>
          <span className="bg-orange absolute h-full rounded-3xl animate-aboutr"></span>
        </div>
        <div
          className="text-orange font-aero w-full text-center
        lg:text-7xl lg:my-20
        text-5xl mt-8 mb-16
        "
        >
          projects.
        </div>

        <div className="flex items-center justify-center gap-16 lg:justify-around lg:flex-row  flex-wrap">
          <Card className="bg-bg-color h-full border max-w-[400px] border-white-opac overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 p-0 rounded-none border-b border-white-opac aspect-video"
            >
              <ImgModal>
                <Image src={clickgameGif} alt="click game" />
              </ImgModal>
            </CardHeader>

            <CardBody>
              <Typography variant="h5" className="text-orange font-aero">
                Click Game
              </Typography>
              <Typography
                variant="lead"
                color="gray"
                className="mt-3 text-lg font-aero font-light text-white"
              >
                Because it&apos;s about motivating the doers. Because I&apos;m
                here to follow my dreams and inspire others.
              </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center -space-x-3">
                <Tooltip
                  content="React"
                  className="p-2 border border-white-opac bg-bg-color font-aero font-light"
                >
                  <div className="hover:z-10 group">
                    <IconBtn zoom={1.4}>
                      <div className="group-hover:animate-spin">
                        <SiReact />
                      </div>
                    </IconBtn>
                  </div>
                </Tooltip>
                <Tooltip
                  content="Chakra UI"
                  className="p-2 border border-white-opac bg-bg-color font-aero font-light"
                >
                  <div className="hover:z-10 group">
                    <IconBtn zoom={1.4}>
                      <div className="group-hover:animate-pulse">
                        <SiChakraui />
                      </div>
                    </IconBtn>
                  </div>
                </Tooltip>
                <Tooltip
                  content="Typescript"
                  className="p-2 border border-white-opac bg-bg-color font-aero font-light"
                >
                  <div className="hover:z-10 group">
                    <IconBtn zoom={1.4}>
                      <div className="group-hover:animate-bounce">
                        <SiTypescript />
                      </div>
                    </IconBtn>
                  </div>
                </Tooltip>
              </div>

              <Link className="group" href="https://github.com/abrxao/clickgame" target="_blank">
                <div className="flex gap-1">
                  <IconBtn>
                    <div className="group-hover:animate-pulse">

                    <FiGithub />
                    </div>
                  </IconBtn>
                  <Typography className="flex font-aero text-orange group-hover:brightness-150">repo</Typography>
                </div>
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-bg-color h-full border max-w-[400px] border-white-opac overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 p-0 rounded-none border-b border-white-opac aspect-video"
            >
              <ImgModal>
                <Image src={data_boardGif} alt="databoard" />
              </ImgModal>
            </CardHeader>

            <CardBody>
              <Typography variant="h5" className="text-orange font-aero">
                Statistics project
              </Typography>
              <Typography variant="lead" color="gray" className="mt-3 text-lg font-aero font-light text-white">
                Because it&apos;s about motivating the doers. Because I&apos;m
                here to follow my dreams and inspire others.
              </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center -space-x-3">
                <Tooltip
                  content="Vanilla JavaScript"
                  className="p-2 border border-white-opac bg-bg-color font-aero font-light"
                >
                  <div className="hover:z-10 group">
                    <IconBtn zoom={1.4}>
                      <div className="group-hover:animate-bounce">
                        <DiJavascript1 />
                      </div>
                    </IconBtn>
                  </div>
                </Tooltip>
                <Tooltip
                  content="ApexCharts.js"
                  className="p-2 border border-white-opac bg-bg-color font-aero font-light"
                >
                  <div className="hover:z-10 group">
                    <IconBtn zoom={1.4}>
                      <div className="group-hover:animate-pulse">
                        <Image src={apex} alt="apex" className="" />
                      </div>
                    </IconBtn>
                  </div>
                </Tooltip>
              </div>
              <Link className="group"
                href="https://github.com/abrxao/gerRandomVar"
                target="_blank"
              >
                <div className="flex gap-1">
                  <IconBtn>
                    <div className="group-hover:animate-pulse">

                    <FiGithub />
                    </div>
                  </IconBtn>
                  <Typography className="flex font-aero text-orange group-hover:brightness-150">repo</Typography>
                </div>
              </Link>
            </CardFooter>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Projects;
