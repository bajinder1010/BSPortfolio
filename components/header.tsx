
"use client"
import React,{useState} from 'react'
import {motion} from "framer-motion";
import { links } from "../lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "../context/active-section-context";
import Image from "next/image";
import avatarImg from "../public/avatar.png";

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
    const [isNavOpen, setIsNavOpen] = useState(false); // in
  return (
    <header className="z-[999] relative">
    <motion.div
      className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border-opacity-40 bg-[#262626] bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-0  sm:top-0 sm:h-[3.25rem] sm:w-full"
    initial={{y: -100,x: "-50%", opacity:0}}
    animate = {{y:0, x:"-50%", opacity: 1}}
    
    ></motion.div>
    <section className="MOBILE-MENU flex-wrap lg:hidden md:hidden">
          <div
            className="HAMBURGER-ICON space-y-2  fixed top-6  left-4 w-full "
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8  bg-gray-300"></span>
            <span className="block h-0.5 w-8  bg-gray-300"></span>
            <span className="block h-0.5 w-8  bg-gray-300"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div className="bg-gray-50 w-full bg-opacity-100">
            <div
              className="CROSS-ICON fixed top-6 right-0 px-8 py-0 "
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[100px] ">
            {links.map((link) => (
              <li className="border-b border-gray-400 my-4 uppercase " key={link.hash}  onClick={() => setIsNavOpen(false)}>
                <a href={link.hash}>{link.name}</a>
              </li>
                ))}
            </ul>
            </div>
          </div>
        </section>
        <motion.div className='flex fixed top-3 right-10  sm:fixed sm:top-[0.25rem] sm:left-10' 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}>
     <Image
              src={avatarImg}
              alt="Bajinder Singh"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-11 w-11 rounded-full object-cover  shadow-xl "
            />
            </motion.div>
     <nav className="flex fixed top-[0.15rem] right-10 h-12  py-2  sm:h-[initial] sm:py-0">
     
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 DESKTOP-MENU hidden sm:flex">
        
       
            
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-300 transition",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: fixed;
        width: 100%;
        height: 38vh;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </nav>
    </header>
  );
}
