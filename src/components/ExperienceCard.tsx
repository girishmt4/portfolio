import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
        <h4 className="text-4xl font-light">Full Stack Developer</h4>
        <p className="text-2xl font-bold mt-1">Data Strategies Interchange</p>
        <div className="flex flex-row space-x-2 my-2">
          {/* Tech Used */}
          <motion.img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png"
            alt=""
          />
          {/* Tech Used */}
          {/* Tech Used */}
        </div>
        <p className="py-5 text-gray-300">Start - End</p>
        <ul className="list-disc space-y-2 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
