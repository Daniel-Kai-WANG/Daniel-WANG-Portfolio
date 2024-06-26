"use client";

import { personalData } from "@/utils/data/personal-data";

function AboutSection() {
  return (
    <div id="about" className="relative my-12 lg:my-16">
      <div className="absolute -right-8 top-16 hidden flex-col items-center lg:flex">
        <span className="w-fit rotate-90 rounded-md bg-[#1a1443] p-2 px-5 text-xl text-white">ABOUT ME</span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="mb-5 text-xl font-medium uppercase text-[#16f2b3]">Who I am?</p>
          <p className="text-sm text-gray-200 lg:text-lg">{personalData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
