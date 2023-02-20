import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "typings";
import { urlFor } from "../../sanity";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="flex flex-col relative h-screen text-center md:text-center lg:flex-row max-w-7xl px-10 justify-center mx-auto items-center"
    >
      <h3 className="absolute top-16 sm:top-24 uppercase tracking-[1rem] text-gray-500 text-2xl text-center">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="mb-10 lg:mb-0 flex-shrink-0 rounded-full h-32 w-32 mx-auto object-cover md:w-64 md:h-64 xl:w-[20rem] xl:h-[20rem]"
        src={urlFor(pageInfo?.profilePic).url()}
        alt=""
      />
      <motion.div
        // initial={{
        //   x: 500,
        //   opacity: 0,
        // }}
        // transition={{
        //   duration: 1.2,
        // }}
        // whileInView={{
        //   x: 0,
        //   opacity: 1,
        // }}
        // viewport={{
        //   once: true,
        // }}
        className="space-y-10 px-0 md:px-10 max-h-48"
      >
        {/* <h4 className="text-4xl font-semibold">
          Here is a little background..{" "}
        </h4> */}
        <p className="text-sm max-h-48 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]/80 pr-3">
          {pageInfo?.backgroundInformation}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
