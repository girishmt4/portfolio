import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "typings";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" lg:flex lg:items-center border-b border-[#1976d2]/40 bg-[#0e3155] lg:justify-between sticky top-0 p-0 items-center justify-between w-screen z-30">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{ once: true }}
        className="flex flex-row items-center justify-between bg-[#0e3155]"
      >
        {/* SOcial Icons */}
        <div className="flex flex-row items-center justify-between">
          {socials.map((social) => (
            <SocialIcon
              key={social._id}
              url={social.linkToProfile}
              fgColor="var(--color-bg)"
              bgColor="transparent"
            />
          ))}
        </div>

        <div
          className="text-[#1976d2] h-10 w-10 mx-4 cursor-pointer lg:hidden block"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XMarkIcon color="var(--color-bg)" />
          ) : (
            <Bars3Icon color="var(--color-bg)" />
          )}
        </div>
      </motion.div>

      <motion.ul
        initial={{
          x: 1000,
          opacity: 0,
          // scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          // scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        // animate={{
        //   x: isMenuOpen ? 0 : 500,
        //   opacity: isMenuOpen ? 1 : 0,
        //   scale: isMenuOpen ? 1 : 0.5,
        // }}

        viewport={{ once: true }}
        className={`lg:flex lg:items-center absolute bg-[#0e3155] w-full left-0 z-[-30] lg:z-auto lg:static lg:w-auto py-4 lg:py-0 pl-6 lg:pl-0 transition-all ease-in duration-500 border-b lg:border-none border-[#1976d2]/40 ${
          isMenuOpen ? "top-10" : "top-[-490px]"
        }`}
      >
        <li className="mx-2 my-2 lg:my-0">
          <Link href="#hero" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <button className="navButton">Home</button>
          </Link>
        </li>
        <li className="mx-2 my-2 lg:my-0">
          <Link href="#about" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <button className="navButton">About</button>
          </Link>
        </li>
        <li className="mx-2 my-2 lg:my-0">
          <Link href="#experience" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <button className="navButton">Experience</button>
          </Link>
        </li>
        <li className="mx-2 my-2 lg:my-0">
          <Link href="#skills" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <button className="navButton">Skills</button>
          </Link>
        </li>
        <li className="mx-2 my-2 lg:my-0">
          <Link href="#projects" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <button className="navButton">Projects</button>
          </Link>
        </li>
        <li className="mx-2 my-2 lg:my-0">
          <Link href="#contact" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <button className="navButton">Contact</button>
          </Link>
        </li>
      </motion.ul>

      {/* <Link href="#contact"> */}
      {/* <div
        // initial={{
        //   x: 500,
        //   opacity: 0,
        //   scale: 0.5,
        // }}
        // animate={{
        //   x: 0,
        //   opacity: 1,
        //   scale: 1,
        // }}
        // transition={{
        //   duration: 1,
        // }}
        // viewport={{ once: true }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden lg:inline-flex text-sm text-gray-400">
          Get in Touch
        </p>
      </div> */}
      {/* </Link> */}
    </header>
  );
}
