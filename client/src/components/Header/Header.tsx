"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import ThemeButton from "./ThemeButton";
import HamburgerButton from "./HamburgerButton";
import "./hamburger-fix.css";
interface MenuLinkType {
  title : string;
  href : string;
}
const Navigation:MenuLinkType[] = [
  {
    title : 'Home',
    href : '/',

  },
  {
    title : 'About',
    href : '#about',

  },
  {
    title : 'Project',
    href : '#project',

  },
  {
    title : 'Skills',
    href : '#skills',

  },
  {
    title : 'Contact',
    href : '#contact'
  }
 
]
export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="fixed w-full h-[10vh] z-[100]  backdrop-blur-md bg-white dark:bg-black   ">
      <div className="px-4 lg:px-20 h-full flex justify-between items-center">
        <Logo />
        <div className="flex items-center lg:gap-5">
          <nav
            id="navigation"
            className={`backdrop-blur-lg bg-white dark:bg-black h-screen  lg:h-auto  fixed lg:static inset-0  grid grid-cols-1  md:block justify-center items-center
              transition-transform duration-300 ease-in-out 
              ${
                isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
              } `}
          >
            <ul
              className={` z-[200] lg:flex gap-4`}
            >
              {
                Navigation.map(({title,href},index)=>(
                  
                  <li key={index} className=" button uppercase border border-slate-50 grid place-items-center py-6 lg:border-0 lg:bg-transparent lg:py-0"><Link href={href}>{title}</Link></li>
                ))
              }
              
            </ul>
          </nav>
          <ThemeButton />
          <HamburgerButton
            isActive={isOpen}
            onToggle={() => setIsOpen((prev) => !prev)}
            className="fill-red-500 lg:hidden z-[300]"
          />
        </div>
      </div>
    </header>
  );
}
