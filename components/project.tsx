"use client";

import { useRef } from "react";
import { projectsData } from "../lib/data";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
 
  return (
    <div
    ref={ref}
    
      
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-orange-50 max-w-[42rem] border border-black/5 rounded-2xl overflow-hidden sm:pr-8  sm:h-[20rem]  transition relative z-10 sm:group-even:pl-8">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[60%] relative flex flex-col h-full sm:group-even:ml-[16rem]">
          <h3 className="text-2xl text-[#000] px-1 py-0 font-semibold hover:text-[#ec0101]"> <a
          className="cursor-pointer"
          href={url}
          target="_blank"
        >{title}</a></h3>
          <p className="mt-1 px-1 py-3 leading-normal text-[#666666] ">
            {description}
          </p>
          <ul className="flex flex-wrap mt-2 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className=" px-3 leading-5 py-2 text-[0.8rem] leading-4 border-[#666] border border-solid tracking-wider text-[#666] border-slate-200 rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <a
          className="cursor-pointer"
          href={url}
          target="_blank"
        >
        <video
        autoPlay muted 
        loop={true}
        className="absolute hidden sm:block  top-8  -right-40 w-[28.25rem]  -z-9 rounded-xl shadow-3xl
        transition 
        

        group-even:right-[initial] group-even:-left-40 -z-10"
      >
        <source src={imageUrl} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      </a>
       
      </section>
    </div>
  );
}