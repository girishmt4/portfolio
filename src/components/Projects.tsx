import React from "react";
import { motion } from "framer-motion";
import { Project } from "typings";
import { urlFor } from "../../lib/sanity";
import { useTheme } from "@/context/ThemeContext";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  const { theme } = useTheme();

  const backgroundColor = theme === "dark" ? "#292929" : "#f0f0f0"; // Light mode color is set to a lighter shade

  // const projects = [1, 2, 3, 4, 5, 6];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col md:flex:row max-w-full justify-center items-center mx-auto z-0 px-5 xl:px-20 2xl:px-32 ">
      <h3
        className="absolute top-20 lg:top-24 uppercase tracking-[1rem] text-gray-500 text-2xl font-bold"
        style={{
          color: "var(--color-primary)",
          textShadow:
            theme === "dark" ? "1px 1px 5px var(--color-contrast)" : "",
        }}
      >
        Projects
      </h3>
      <div
        className="flex w-full space-x-5 overflow-x-scroll mt-20 h-4/6 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#1976d2]"
        // className=" w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory p-10 z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#1976d2]"
        // "flex w-full mt-20 space-x-5 overflow-x-scroll h-4/6 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#1976d2]"
      >
        {projects.map((project) => (
          <div
            className="flex flex-col rounded-lg items-center text-center justify-center space-y-7 flex-shrink-0 w-full sm:w-5/6 md:w-2/3 xl:w-3/5  snap-center bg-[#292929]  cursor-pointer transition-opacity duration-200 overflow-hidden"
            // className="flex flex-col rounded-lg items-center text-center justify-center flex-shrink-0 w-full sm:w-5/6 md:w-2/3  snap-center bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden
            // " text-center justify-center "
            // className="w-[500px] md:w-[600px] xl:w-[900px] rounded-lg flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
            key={project._id}
            style={{ backgroundColor: backgroundColor }}
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
              // viewport={{
              //   once: true,
              // }}
              className="h-24 w-24 mb-5 md:h-32 md:w-32 object-cover object-center"
              src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              // className="object-cover object-center w-24 h-24 mb-5 md:h-32 md:w-32"
              // mb-5 md:h-32 md:w-32 rounded-full object-contain object-center
            />

            <div className="w-full px-3 space-y-4 ">
              <h4 className="text-2xl sm:text-3xl font-light text-center">
                {project.title}
              </h4>
              <div className="flex flex-row space-x-2 my-2 items-center justify-center">
                {/* Tech Used */}
                {project.technologies.map((technology) => (
                  <div
                    key={technology._id}
                    className="relative rounded-full object-fill w-8 h-8  filter group-hover:grayscale transition duration-100 ease-in-out bg-[white] flex flex-col items-center justify-center"
                  >
                    <motion.img
                      src={urlFor(technology?.image).url()}
                      className=" h-5 w-5 "
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

              <ul
                className="list-disc space-y-2 py-4 text-sm lg:text-base px-6 h-44  overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#1976d2]/80"
                style={{
                  backgroundColor: "var(--color-bg)",
                  textAlign: "left",
                }}
              >
                {project.summary.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
