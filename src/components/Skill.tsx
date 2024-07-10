import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "typings";
import { urlFor } from "../../lib/sanity";
import { useTheme } from "@/context/ThemeContext";

type Props = {
  directionLeft?: boolean;
  skill: SkillType;
};

function Skill({ skill }: Props) {
  const { theme } = useTheme();

  const backgroundColor = theme === "dark" ? "#424242" : "#f0f0f0";

  return (
    <div className="group relative flex cursor-pointer">
      <div
        className="relative rounded-full object-fill p-3 sm:p-4 md:p-5 w-16 h-16 sm:h-20 sm:w-20 md:h-24 md:w-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-100 ease-in-out flex flex-col items-center content-center justify-center"
        style={{ backgroundColor: backgroundColor }}
      >
        <motion.img
          initial={{
            x: 50,
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          src={urlFor(skill?.image).url()}
          className="relative object-fill p-1 w-16 h-16 sm:w-20 sm:h-20 sm:p-1 md:h-24 md:w-24 xl:w-28 xl:h-28 xl:p-2 skill-image"
        />
      </div>

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[black] w-16 h-16 sm:h-20 sm:w-20 md:h-24 md:w-24 xl:w-28 xl:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xs md:text-base xl:text-lg text-white opacity-100">
            {skill.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
