import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-[96%] max-w-[1440px] mx-auto  flex justify-between items-center py-4 px-6 bg-white rounded-full shadow-md ">
      <Link  href={"/"} className="text-xl xl:text-2xl font-bold text-[#a855f7] tracking-tight">
        Bedwellin
      </Link>

      <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
        <Link
          href="#property"
          className="hover:text-[#a855f7] transition-colors xl:text-xl"
        >
          List Property
        </Link>
        <Link
          href="#testimonials"
          className="hover:text-[#a855f7] transition-colors xl:text-xl"
        >
          Help
        </Link>
      </nav>

      <button className="bg-[#a855f7] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#9333ea] transition-colors cursor-pointer xl:text-xl">
        Sign In
      </button>
    </header>
  );
};

export default Header;
