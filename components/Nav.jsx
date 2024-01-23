import React from "react";
import Image from "next/image";
import { navLinks } from "@/constants";

function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center w-full max-container">
        <a href="/">
          <Image
            src="/assets/images/header-logo.svg"
            alt="page logo"
            width={130}
            height={29}
          />
        </a>
        <ul className="flex items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal font-medium text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="max-lg:block hidden">
          <Image src='/assets/icons/hamburger.svg' width={25} height={25}/>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
