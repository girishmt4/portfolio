import React from "react";
import { motion } from "framer-motion";
import { Experience } from "typings";
import { urlFor } from "../../lib/sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center text-center justify-center flex-shrink-0 w-full sm:w-5/6 md:w-2/3  snap-center bg-[#292929] cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.img
        initial={{
          y: -80,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        // viewport={{
        //   once: true,
        // }}
        className="mb-5 rounded-full object-contain object-center"
        style={{ maxWidth: "16rem", maxHeight: "4rem" }}
        src={urlFor(experience?.companyImage).url()}
      />

      <div className="w-full px-0 space-y-4 md:px-2">
        <div className="space-y-1">
          <h4 className="text-xl sm:text-3xl font-bold">
            {experience.jobTitle}
          </h4>
          <p className="text-base sm:text-lg font-bold">{experience.company}</p>
          <p className="text-base sm:text-lg">{experience.location}</p>

          <p className=" text-gray-300">{`From ${experience.dateStarted} to ${
            experience.isCurrentlyWorkingHere ? "Present" : experience.dateEnded
          }`}</p>
        </div>

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
