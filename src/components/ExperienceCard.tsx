import React from "react";
import { motion } from "framer-motion";
import { Experience } from "typings";
import { urlFor } from "../../sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center text-center justify-center flex-shrink-0 w-full sm:w-5/6 md:w-2/3  snap-center bg-[#292929] cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="h-24 w-24 mb-5 md:h-32 md:w-32 rounded-full object-contain object-center"
        src={urlFor(experience?.companyImage).url()}
      />

      <div className="w-full px-0 space-y-4 md:px-2">
        <h4 className="text-xl sm:text-3xl font-light">
          {experience.jobTitle}
        </h4>
        <p className="text-base sm:text-lg font-bold">{experience.company}</p>
        <div className="flex flex-row space-x-2 sm:space-x-5 my-2 items-center justify-center">
          {experience.technologies.map((technology) => (
            <div
              key={technology._id}
              className="relative rounded-full object-fill w-8 h-8  filter group-hover:grayscale transition duration-100 ease-in-out bg-[white] flex flex-col items-center justify-center"
            >
              <motion.img
                key={technology._id}
                className="h-5 w-5"
                src={urlFor(technology?.image).url()}
                alt=""
              />
            </div>
          ))}
        </div>
        <p className=" text-gray-300">{`From ${experience.dateStarted} to ${
          experience.isCurrentlyWorkingHere ? "Present" : experience.dateEnded
        }`}</p>
        <ul className=" space-y-2 py-4 text-sm lg:text-base px-6 max-h-44  overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]/80">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
