import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
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
        className="grid grid-cols-4 gap-5"
      >
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </motion.div>
    </div>
  );
};

export default Skills;
