"use client";

import { skillsGroupData } from "../lib/data";
import Image from "next/image";
import SectionHeading from "./section-heading";

type SkillProps = (typeof skillsGroupData)[number];

export default function Skill({
  heading,
  skillsDetails,
}: SkillProps) {
  
  return (
  
    <section className="bg-white borderBlack mt-10  w-[full] rounded-xl py-0">
   <SectionHeading><div className=" bg-[#465b74]  text-4xl w-full  tracking-wide font-extralight border rounded-t-lg tracking-wider text-[#fff] mt-0 py-0">{heading}</div></SectionHeading>
        <div className="flex flex-wrap justify-center sm:gap-16 gap-8">
        
        {skillsDetails.map((skill, index) => (
          <div key={index} >
                
                <Image
          src={skill.url}
          alt={skill.name}
          quality={95}
          className="sm:block top-8 sm:w-[5.80rem] w-[8.80rem] rounded-t-lg "/>
               
                <p className="mt-2">{skill.name}</p>
            </div>
        
        ))}
         </div>
        
    
    
      </section>
 
  );
}