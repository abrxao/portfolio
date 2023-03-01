import React, { useEffect, useState } from "react";
import HardSkills from "../HardSkills/HardSkills";
import PersonalInfos from "../PersonalInfos/PersonalInfos";
import Resume from "../Resume/Resume";
import { skillsObj } from "../HardSkills/HardSkills";
import { FiGithub } from "react-icons/fi";
import { DiScrum } from "react-icons/di";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiJquery,
  SiWebpack,
  SiSass,
  SiNextdotjs,
} from "react-icons/si";

const h_skills: skillsObj[] = [
  { skill: "JavaScript", icon: SiJavascript, progress: 75 },
  { skill: "React", icon: SiReact, progress: 58 },
  { skill: "TypeScript", icon: SiTypescript, progress: 58 },
  { skill: "Next.js", icon: SiNextdotjs, progress: 42 },
  { skill: "Sass", icon: SiSass, progress: 92 },
  { skill: "Github", icon: FiGithub, progress: 85 },
  { skill: "Tailwindcss", icon: SiTailwindcss, progress: 70 },
  { skill: "jQuery", icon: SiJquery, progress: 40 },
  { skill: "WebPack", icon: SiWebpack, progress: 63 },
  { skill: "Scrum - agile methodology", icon: DiScrum, progress: 67 },
];
const About = () => {
  const [skills, setSkills] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        setTimeout(() => setSkills(true), 500);
    });

    if (typeof window !== "undefined") {
      const hardSkills = document.getElementById("hardSkills") as HTMLElement;
      observer.observe(hardSkills);
    }
  },[]);
  return (
    <section
      id="about"
      className="-mt-1 bg-bg-color px-5 py-20 flex flex-col items-center"
    >
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
        text-5xl mx-4
        "
      >
        about.
      </div>
      <div className="lg:flex lg:gap-8 lg:max-w-[1400px]">
        <Resume />
        <PersonalInfos />
      </div>
      <div className="font-aero text-white mt-10 w-full lg:px-5 lg:max-w-[1400px]">
        <p
          className="text-2xl mb-4
        lg:text-3xl
        "
        >
          Hard Skills
        </p>
        <div className="  lg:grid lg:grid-cols-3 lg:gap-x-10" id="hardSkills">
          <HardSkills hardskills={h_skills} isOn={skills} />
        </div>
      </div>
    </section>
  );
};

export default About;
