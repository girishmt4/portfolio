import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5, 6];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col md:flex:row max-w-full justify-center items-center mx-auto z-0">
      <h3 className="absolute top-24 uppercase tracking-[1rem] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            key={project}
          >
            <motion.img
              initial={{
                opacity: 0,
                y: -300,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              className="object-cover w-24 h-24 md:h-48 md:w-48 xl:h-64 xl:w-64"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                MeSocial - Social Media App
              </h4>
              <p className="text-lg text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur architecto repellendus iure hic, ex ipsa sint
                beatae, sunt officia voluptates eveniet aperiam id recusandae
                libero quos dolore facilis eius saepe. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Doloremque, culpa
                perferendis! Fugiat, distinctio! Fugiat iusto magnam dolor,
                architecto dolores vel?
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
