import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "typings";

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{ once: true }}
      className="h-screen flex flex-col relative overflow-hidden text-left 
      md:flex-row 
      max-w-full px-5 xl:px-20 2xl:px-32 justify-center mx-auto items-center "
    >
      <h3 className="absolute top-20 lg:top-24 uppercase tracking-[1rem] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="flex w-full mt-20 space-x-5 overflow-x-scroll h-4/6 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
