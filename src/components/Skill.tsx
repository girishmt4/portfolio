import React from "react";
import { motion } from "framer-motion";
import { Skill } from "typings";

type Props = {
  // directionLeft: boolean;
  skill: Skill;
};

function Skill({ skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        // initial={{
        //   x: directionLeft ? -200 : 200,
        //   opacity: 0,
        // }}
        // whileInView={{
        //   opacity: 1,
        //   x: 0,
        // }}
        // transition={{
        //   duration: 0.5,
        // }}
        // viewport={{
        //   once: true,
        // }}
        src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        className="rounded-full object-cover w-24 h-24 md:h-28 md:w-28 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-100 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-black opacity-100">{skill.title}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
