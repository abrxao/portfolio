import Link from "next/link";
import React, { useRef } from "react";

interface SmoothScrollLinkProps {
  href: string;
  children: any;
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({
  href,
  children,
}) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (typeof window !== "undefined") {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Link href={href} onClick={handleClick} ref={ref}>
      {children}
    </Link>
  );
};

export default SmoothScrollLink;
