import React from "react";
import { motion } from "framer-motion";
import { Experience } from "typings";
import { urlFor } from "../../sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center text-center justify-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden ">
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
        className="h-32 w-32 rounded-full object-cover object-center"
        src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
      />

      <div className="space-y-7 px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="text-2xl font-bold mt-1">{experience.company}</p>
        <div className="flex flex-row space-x-2 my-2 items-center justify-center">
          {experience.technologies.map((technology) => (
            <div
              key={technology._id}
              className="relative rounded-full object-fill w-14 h-14  filter group-hover:grayscale transition duration-100 ease-in-out bg-[white] flex flex-col items-center justify-center"
            >
              <motion.img
                key={technology._id}
                className="h-10 w-10"
                src={urlFor(technology?.image).url()}
                alt=""
              />
            </div>
          ))}
        </div>
        <p className="py-5 text-gray-300">{`From ${experience.dateStarted} to ${
          experience.isCurrentlyWorkingHere ? "Present" : experience.dateEnded
        }`}</p>
        <ul className="list-disc space-y-2 ml-5 text-lg pr-5 max-h-32 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]/80">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
