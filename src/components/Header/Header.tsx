
import React, { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <header>
      <ul className="py-7 w-full flex justify-center align-center text-[2.9em] gap-[1.75em] font-aero  text-orange tracking-wider absolute z-50">
        <li >about.</li>
        <li >projects.</li>
        <li >contact.</li>
      </ul>
    </header>
  );
};
export default Header;
