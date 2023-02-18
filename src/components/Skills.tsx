import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "typings";

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <div className="h-screen flex relative flex-col text-center xl:flex-row max-w-[2000px] justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[1rem] text-gray-500 text-2xl xl:px-10 ">
        Skills
      </h3>
      <motion.div
        // initial={{
        //   x: 200,
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
        className="grid grid-cols-7 gap-4 h-120 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]/80"
      >
        {skills?.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
