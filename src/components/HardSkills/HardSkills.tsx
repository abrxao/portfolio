import React, { FunctionComponent } from "react";
import Progress from "../Progress/Progress";

export type skillsObj = {
  skill: string;
  icon: any;
  progress: number;
};

interface HardSkills {
  hardskills: skillsObj[];
  children?: any;
  isOn?: boolean;
}

const HardSkills: FunctionComponent<HardSkills> = ({
  hardskills,
  children,
  isOn,
}) => {
  return (
    <>
      {isOn &&
        hardskills.map((elem, index) => {
          const Icon = elem.icon as FunctionComponent;
          return (
            <div
              key={index + 1}
              className={`font-aero overflow-hidden animate-slide w-full text-white font-light py-2`}
              style={{animationDelay: `${-index*100}ms`}}
            >
              <div className="flex lg:text-xl">
                <span
                  className="bg-white text-purple p-1 h-6 flex items-center justify-center rounded-md mr-2 cursor-pointer
                    lg:p-2 lg:h-8 lg:text-xl lg:mr-4
                    "
                >
                  <Icon />
                </span>
                {elem.skill}
              </div>
              <Progress
                progress={elem.progress}
                className="h-4 rounded-[1em] border mt-3"
              />
              <div
                className="font-light text-justify mt-3 
                  lg:text-lg lg:mt-6 
                  "
              >
                {children}
              </div>
            </div>
          );
        })}
    </>
  );
};

export default HardSkills;
