import React from "react";
import { motion } from "framer-motion";
import { Project } from "typings";
import { urlFor } from "../../sanity";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  // const projects = [1, 2, 3, 4, 5, 6];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col md:flex:row max-w-full justify-center items-center mx-auto z-0 px-10">
      <h3 className="absolute top-24 uppercase tracking-[1rem] text-gray-500 text-2xl ">
        Projects
      </h3>
      <div
        className="flex w-full space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]"
        // className=" w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory p-10 z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]"
      >
        {projects.map((project) => (
          <div
            className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
            // className="w-[500px] md:w-[600px] xl:w-[900px] rounded-lg flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
            key={project._id}
          >
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
              src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              className="object-cover object-center w-24 h-24 md:h-48 md:w-48 xl:h-64 xl:w-64"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                {project.title}
              </h4>
              <div className="flex flex-row space-x-2 my-2 items-center justify-center">
                {/* Tech Used */}
                {project.technologies.map((technology) => (
                  <div
                    key={technology._id}
                    className="relative rounded-full object-fill w-14 h-14  filter group-hover:grayscale transition duration-100 ease-in-out bg-[white] flex flex-col items-center justify-center"
                  >
                    <motion.img
                      src={urlFor(technology?.image).url()}
                      className=" absolute object-fill w-12 h-12 p-1"
                    />
                  </div>
                  // <motion.img
                  //   key={technology._id}
                  //   className="h-10 w-10 rounded-full"
                  //   src={urlFor(technology?.image).url()}
                  //   alt=""
                  // />
                ))}

                {/* Tech Used */}
                {/* Tech Used */}
              </div>
              <p className="text-lg text-center">{project.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
