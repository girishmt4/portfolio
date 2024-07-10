import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    // <motion.div
    //   initial={{
    //     opacity: 0,
    //   }}
    //   whileInView={{
    //     // scale: [1, 2, 2, 3, 1],
    //     opacity: [0.1, 0.2, 0.4, 0.8, 1],
    //     borderRadius: ["20%", "20%", "50%", "80%", "20%"],
    //   }}
    //   transition={{
    //     duration: 0.5,
    //   }}
    //   viewport={{ once: true }}
    //   className="relative flex justify-center items-center"
    // >
    //   <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping"></div>
    //   <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 "></div>
    //   <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 "></div>
    //   <div className="absolute border border-[#1976d2] rounded-full h-[650px] w-[650px] mt-52 opacity-20 animate-pulse"></div>
    //   <div className="absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52 "></div>
    // </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] top-10 left-10 animate-ping"></div>
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] top-20 right-10"></div>
      <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] top-40 left-20"></div>
      <div className="absolute border border-[#1976d2] rounded-full h-[650px] w-[650px] bottom-20 right-20 opacity-20 animate-pulse"></div>
      <div className="absolute border border-[#333333] rounded-full h-[800px] w-[800px] bottom-10 left-10"></div>
    </motion.div>
  );
};

export default BackgroundCircles;
