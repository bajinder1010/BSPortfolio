"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsGroupData } from "../lib/data";
import Skill from "./skill";
import { useSectionInView } from "../lib/hooks";


export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.25);

  return (
    <div className="bg-[#f2f2f2] flex w-full items-center justify-center px-3 py-[6rem]" >
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[43rem] scroll-mt-28 text-center sm:mb-20"
    >
      <SectionHeading><span className="font-bold text-5xl">My skills</span></SectionHeading>
      
        {skillsGroupData.map((skillobj, index) => (
          <React.Fragment key={index}>
            <Skill {...skillobj} />
          </React.Fragment>
        ))}
    
    </section>
    </div>
  );
}