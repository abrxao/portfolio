import React, { FunctionComponent, PropsWithChildren } from "react";

interface IconBtn extends PropsWithChildren{
    zoom?: number | null;
}

const IconBtn: FunctionComponent<IconBtn> = ({ children, zoom }) => {
  return (
    <span
      className="bg-white text-purple p-1 h-6 flex items-center justify-center rounded-md cursor-pointer border border-bg-color
                    lg:p-2 lg:h-8 lg:text-xl
                    "

     style={{zoom:zoom??1}}
    >
      {children}
    </span>
  );
};

export default IconBtn;
