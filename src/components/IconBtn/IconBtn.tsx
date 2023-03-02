import React, { FunctionComponent, PropsWithChildren } from "react";

interface IconBtn extends PropsWithChildren{
    zoom?: number | null;
}

const IconBtn: FunctionComponent<IconBtn> = ({ children, zoom }) => {
  return (
    <span
      className="bg-white text-purple p-1 aspect-square flex items-center justify-center rounded-md cursor-pointer border border-bg-color lg:text-xl"

     style={{zoom:zoom??1}}
    >
      {children}
    </span>
  );
};

export default IconBtn;
