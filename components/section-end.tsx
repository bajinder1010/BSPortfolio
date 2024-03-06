"use client";

import React from "react";
import { motion } from "framer-motion";

type MyComponentProps = {
  color: string;
  angle: string;
}

export default function SectionEnd({color,angle}:MyComponentProps) {
  return (
    <div
      className={`bg-[${color}] -mt-[4vw] ml-0 -mb-[4vw] mr-0 h-[8vw] w-[100%] transform  -rotate-[4deg]`}
    ></div>
  );
}