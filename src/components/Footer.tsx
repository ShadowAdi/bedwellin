import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full max-w-[1440px]  flex flex-col lg:flex-row space-y-4 justify-center py-8 items-center px-12 lg:justify-between">
      <span className="text-base font-semibold  text-[#71717a] text-center lg:text-left">
        © 2024 Bedwellin. All rights reserved.
      </span>
      <div className="flex space-x-5  items-center">
        <Link
          href={"/"}
          className="text-black hover:underline font-semibold text-base "
        >
          Terms
        </Link>
        <Link
          href={"/"}
          className="text-black hover:underline  font-semibold text-base "
        >
          Privacy
        </Link>
        <Link
          href={"/"}
          className="text-black hover:underline  font-semibold text-base "
        >
          Contact
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
