import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "typings";

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <div className="h-screen flex relative flex-col text-center xl:flex-row justify-center  mx-auto items-center lg:mx-20 xl:mx-24 2xl:mx-32">
      <h3 className="absolute top-20 lg:top-24 uppercase tracking-[1rem] text-gray-500 text-2xl xl:px-10 ">
        Skills
      </h3>
      <motion.div
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
        // viewport={{
        //   once: true,
        // }}
        className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 xl:grid-cols-8 mt-20 md:px-5 gap-4 h-4/6 place-items-center pr-2"
      >
        {skills?.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
