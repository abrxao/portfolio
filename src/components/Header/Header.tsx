import { Tooltip } from "@material-tailwind/react";
import Link from "next/link";
import React, { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    const href = target.getAttribute("href")?.replace("/", "");
    const element = document.querySelector(href as string);
    if (element) {
      const position = element.getBoundingClientRect().top;
      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  };
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
          <Link href="#about" onClick={(e) => handleClick(e)}>
            about.
          </Link>
        </li>
        <li className="cursor-not-allowed">
          <Link href="#projects" onClick={(e) => handleClick(e)}>
            projects.
          </Link>
        </li>
        <li>
          <Link href="#contact" onClick={(e) => handleClick(e)}>
            contact.
          </Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
