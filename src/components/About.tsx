import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
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
      className="flex flex-col relative h-screen text-center md:text-center md:flex-row max-w-7xl px-10 justify-center mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[1rem] text-gray-500 text-2xl">
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
        className="mb-10 md:mb-0 flex-shrink-0 rounded-full h-40 w-40 mx-auto object-cover md:w-64 md:h-64 xl:w-[20rem] xl:h-[20rem]"
        src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
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
        className="space-y-10 px-0 md:px-10"
      >
        <h4 className="text-4xl font-semibold">
          Here is a little background..{" "}
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facere
          ab laboriosam, consequuntur, quibusdam, obcaecati labore repellendus
          natus minima dolorem id quos sint! Ut, facere consectetur ex quam
          dolore, aspernatur quisquam numquam, facilis labore sed quia eveniet
          vel! Molestiae soluta, alias et, omnis amet odio repellendus earum
          blanditiis repellat possimus officia hic aliquid? Optio modi, veniam
          nemo ullam perspiciatis ut asperiores sed nihil. Deleniti maiores
          quisquam possimus placeat itaque veritatis nam earum libero!
          Consequuntur, a, atque, porro maiores quisquam sint facilis fugit
          dignissimos dolorum non laborum. Necessitatibus doloremque corporis
          magni assumenda magnam nisi iste. Qui tempore magni blanditiis
          exercitationem, non ipsa maiores sequi odio rem. Praesentium quis
          deserunt expedita vel? Dignissimos, repudiandae earum.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
