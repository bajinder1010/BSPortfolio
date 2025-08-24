"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";

import Image from "next/image";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <div className="bg-[#f6f9fc] flex w-full items-center justify-center px-3 py-6" >
    <motion.section
      ref={ref}
      className="mb-10  max-w-[45rem]  leading-8  py-12   scroll-mt-12"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading><span className="font-bold text-5xl">About me</span></SectionHeading>
      <p className="mb-3 text-left text-2xl py-1  leading-normal text-slate-500">
        I began my coding journey in 1995, upon receiving my first computer—a gift from my Dad.{" "}My first programming language was BASIC.
        I distinctly remember the <span className="font-medium">&apos;ASP in a Nutshell&apos;</span> book by O&apos;Reilly – my entry point into the world of web development.
      </p>

      <p className="mb-3 text-left text-2xl py-1  leading-normal text-slate-500">As an experienced software engineer,
      
      I have engaged in <span className="font-medium">comprehensive</span> development across all layers of the stack, prioritizing the creation of solutions that are both sustainable and enduring. I always find it exciting to share what I know and discuss how to build more robust and intelligent software systems.
      During my career, I have had the privilege of working <span className="font-medium">globally</span>. This experience has profoundly enriched my cultural insights and technical proficiency.
      </p>

      <p className="mb-3 text-left text-2xl py-1  leading-normal text-slate-500">
        <span className="italic">Besides all this</span>, I enjoy gardening, watching &quot;living off the grid&quot; videos on YouTube, and{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
   
    </div>
   
  );
}