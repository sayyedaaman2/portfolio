'use client';
import { useState } from 'react';
import Logo from "./Logo";
import ThemeButton from "./ThemeButton";
import HamburgerButton from "./HamburgerButton";
import './hamburger-fix.css'
export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="h-24">
      <div className="px-4 lg:px-20 h-full flex justify-between items-center">
        <Logo/>
        <div className="flex items-center lg:gap-5">
          <nav id="navigation">
            <ul className={`
              fixed lg:static inset-0 z-40
              pt-24 lg:pt-0
              grid grid-cols-1 place-content-center lg:flex lg:gap-5
              text-4xl lg:text-base uppercase
              bg-slate-100 dark:bg-slate-800 lg:bg-transparent
              transition-transform duration-300 ease-in-out
              ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
              <li className="nav-item">Home</li>
              <li className="nav-item">About</li>
              <li className="nav-item">Contact</li>
              <li className="nav-item">Project</li>
            </ul>
          </nav>
          <ThemeButton/>
          <HamburgerButton 
          isActive={isOpen}
            onToggle={() => setIsOpen((prev) => !prev)}
            className="fill-red-500 lg:hidden"
            
          />
        </div>
      </div>
    </header>
  );
}