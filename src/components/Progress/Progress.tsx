import React, { FunctionComponent } from "react";

interface Progress {
  progress: number;
  className?: string;
  classNameBar?: string;
}

const Progress: FunctionComponent<Progress> = ({
  progress,
  className,
  classNameBar,
}) => {
  const delay = Math.random() * 2000;

  return (
    <div
      className={`progress flex flex-start bg-blue-gray-50 overflow-hidden text-xs font-medium relative ${className}`}
    >
      <div
        className={`progressBar flex justify-center items-baseline h-full break-all text-white bg-250% rounded-lg ${classNameBar}`}
        style={{ width: `${progress}%` }}
      >
        <span className="animatedProgress absolute right-0 h-full bg-white"></span>
        <span className="animatedProgTwo w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent absolute"
        style={{animationDelay:`-${delay}ms`}}
        ></span>
      </div>
    </div>
  );
};
export default Progress;