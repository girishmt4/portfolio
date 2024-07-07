import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "typings";
import { urlFor } from "../../lib/sanity";

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
      className="flex flex-col relative px-10 xl:px-20 2xl:px-32 h-screen text-center md:text-center lg:space-x-4 lg:flex-row max-w-7xl xl:space-x-12 xl:max-w-max mx-auto items-center justify-center"
    >
      <h3 className="absolute top-20 lg:top-24 uppercase tracking-[1rem] text-gray-500 text-2xl text-center">
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
        // viewport={{
        //   once: true,
        // }}
        className="mt-16 mb-6 lg:my-0 flex-shrink-0 rounded-full h-32 w-32 sm:h-48 sm:w-48 mx-auto object-cover lg:w-64 lg:h-64 md:mt-24 xl:w-[20rem] xl:h-[20rem] 2xl:w-[24rem] 2xl:h-[24rem]"
        src={urlFor(pageInfo?.profilePic).url()}
        alt=""
      />
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        // viewport={{
        //   once: true,
        // }}
        className="space-y-10 px-0 lg:px-10 h-[20rem] lg:h-[28rem]"
      >
        {/* <h4 className="text-4xl font-semibold">
          Here is a little background..{" "}
        </h4> */}
        <p className="text-sm lg:text-base xl:text-lg h-full overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]/80 px-3 sm:flex sm:items-center">
          {pageInfo?.backgroundInformation}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
