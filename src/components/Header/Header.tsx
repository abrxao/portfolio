import { Tooltip } from "@material-tailwind/react";
import Link from "next/link";
import React, { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <header>
      <ul
        className="py-7 w-full flex justify-center align-center gap-[1.75em] font-aero  text-orange tracking-wider absolute z-[9999]

        2xl:text-5xl 
        xl:text-3xl
        lg:text-2xl
      "
      >
        <li>
          <Link href="#about">about.</Link>
        </li>
        <li className="cursor-not-allowed">
          <Tooltip content="not ready" className="border border-white p-2">
            projects.
          </Tooltip>
        </li>
        <li className="cursor-not-allowed">
          <Tooltip content="not ready" className="border border-white p-2">
            contact.
          </Tooltip>
        </li>
      </ul>
    </header>
  );
};
export default Header;
