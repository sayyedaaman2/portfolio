import React from "react";
import Logo from "./Logo";
import ThemeButton from "./ThemeButton";

export default function Header(){
    return(
        <header className="h-24">
            <div className="px-4  lg:px-20 h-full flex justify-between items-center transition-colors duration-200">
                <Logo/>
                <nav className="flex  items-center gap-5">
                    <ul className="flex gap-2 ">
                        <li>Home</li>
                        <li>About</li>
                        <li>contact</li>
                        <li>Project</li>
                    </ul>
                <ThemeButton/>
                </nav>
            </div>
        </header>
    )
}