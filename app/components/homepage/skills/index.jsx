"use client";

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div id="skills" className="relative z-50 my-12 border-t border-[#25213b] lg:my-24">
      <div className="absolute left-[42%] top-6 h-[100px] w-[100px] translate-x-1/2 rounded-full bg-violet-100 opacity-20 blur-3xl filter"></div>

      <div className="flex -translate-y-[1px] justify-center">
        <div className="w-3/4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </div>
      </div>

      <div className="my-5 flex justify-center lg:py-8">
        <div className="flex items-center">
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
          <span className="w-fit rounded-md bg-[#1a1443] p-2 px-5 text-xl text-white">Skills</span>
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="space-y-10 lg:space-y-16">
        {Object.entries(skillsData).map(([category, skills]) => (
          <section key={category} className="my-6">
            <h2 className="mb-4 text-xl lg:text-2xl font-semibold text-white/90 tracking-wide">
              {category}
            </h2>

            <div className="my-6 w-full">
              <Marquee gradient={false} speed={80} pauseOnHover pauseOnClick play={category === "Frontend" || category === "DevOps & Tools"} direction="left" >
                {skills.map((skill) => {
                  const logo = skillsImage(skill) ?? "/svg/skills/placeholder.svg";
                  return (
                    <div
                      key={`${category}-${skill}`}
                      className="group relative m-3 flex h-fit w-36 min-w-fit cursor-pointer flex-col items-center justify-center rounded-lg transition-all duration-500 hover:scale-[1.15] sm:m-5"
                    >
                      <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] transition-all duration-500 group-hover:border-violet-500">
                        <div className="flex -translate-y-[1px] justify-center">
                          <div className="w-3/4">
                            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-3 p-6">
                          <div className="h-8 sm:h-10">
                            <Image
                              src={logo}
                              alt={skill}
                              width={40}
                              height={40}
                              className="h-full w-auto rounded-lg"
                            />
                          </div>
                          <p className="text-sm text-white sm:text-lg">{skill}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Marquee>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Skills;
