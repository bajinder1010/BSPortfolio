"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "../lib/data";
import Project from "./project";
import { useSectionInView } from "../lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.25);

  return (
    <div className="bg-[#FF9A1A] flex w-full items-center justify-center px-3 py-[11rem]" >
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading><span className="font-bold text-orange-50  text-5xl">Personal Endeavors</span></SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
    </div>
  );
}