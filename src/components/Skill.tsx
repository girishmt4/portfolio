import React from "react";
import { motion } from "framer-motion";
import { Skill } from "typings";
import { urlFor } from "../../lib/sanity";
import { useTheme } from "@/context/ThemeContext";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

function Skill({ skill }: Props) {
  const { theme } = useTheme();

  const backgroundColor = theme === "dark" ? "#292929" : "#f0f0f0";
  // const backgroundColor = theme === "dark" ? "white" : "#f0f0f0";

  return (
    <div className="group relative flex cursor-pointer">
      <div
        className="relative rounded-full object-fill p-5 w-16 h-16 sm:h-20 sm:w-20 md:h-24 md:w-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-100 ease-in-out flex flex-col items-center content-center justify-center"
        style={{ backgroundColor: backgroundColor }}
      >
        <motion.img
          initial={{
            // x: directionLeft ? -200 : 200,
            x: 50,
            opacity: 0,
          }}
          // whileHover={{ scale: 1.1 }}
          // whileFocus={{ scale: 1.1 }}
          // whileTap={{ scale: 0.9 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          // viewport={{
          //   once: true,
          // }}
          src={urlFor(skill?.image).url()}
          // src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          className={`${
            theme === "dark" ? "img-stroke" : ""
          } absolute object-fill p-1 w-12 h-12 sm:w-16 sm:h-16 sm:p-2 md:h-20 md:w-20 xl:w-24 xl:h-24 xl:p-3`}
        />
      </div>

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[black]  w-16 h-16 sm:h-20 sm:w-20 md:h-24 md:w-24 xl:w-28 xl:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full ">
          <p className="text-xs md:text-base xl:text-lg text-white opacity-100">
            {skill.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
