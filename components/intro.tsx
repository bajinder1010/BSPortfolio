"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "../lib/hooks";
import { useActiveSectionContext } from "../context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-left sm:mb-0 scroll-mt-[100rem] relative sm:h-dvh"
    >
      <div className="flex items-center justify-center">
        <div className="relative py-2">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/socialapp-cba0a.appspot.com/o/profile-images%2F80624027480.jpg?alt=media"
              alt="Bajinder Singh"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.15rem] border-white"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-0 mt-0 px-4 text-left font-medium !leading-[1.5] sm:text-4xl py-6"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-extrabold tracking-wide  text-5xl text-[#f6f9fc]">Hello, I&apos;m Bajinder Singh</span> 
        <div className="text-3xl py-1  leading-snug text-[#8ea9bf]">Senior Software Engineer currently based in London,UK, and employed at <a href="https://www.tcs.com/" target="_blank" className="relative inline-block text-blue-500 before:content-[''] before:absolute before:left-0 before:top-[82%]
                 before:w-full before:h-[3px] before:bg-blue-500 before:scale-x-0 before:transition-transform 
                 before:duration-300 hover:before:scale-x-100">tcs</a>. My professional journey includes collaborating with clients worldwide, contributing to a global perspective in software development.

        I develop things in my free time.</div>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium py-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-700 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:text-slate-200 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

       

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          href="https://www.linkedin.com/in/bajinder1010/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
          href="https://github.com/bajinder1010"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}