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
    <header className=" md:flex md:items-center md:justify-between sticky top-0 p-5 items-center justify-between w-screen z-20">
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
          duration: 1,
        }}
        viewport={{ once: true }}
        className="flex flex-row items-center justify-between"
      >
        {/* SOcial Icons */}
        <div className="flex flex-row items-center justify-between">
          {socials.map((social) => (
            <SocialIcon
              key={social._id}
              url={social.linkToProfile}
              fgColor="gray"
              bgColor="transparent"
            />
          ))}
        </div>

        <div
          className="text-[#f7ab0a] h-10 w-10 mx-4 cursor-pointer md:hidden block"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
        </div>
      </motion.div>

      <ul
        className={`md:flex md:items-center absolute bg-[rgb(36,36,36)] w-full left-0 z-[-1] md:z-auto md:static md:w-auto py-4 md:py-0 pl-6 md:pl-0 transition-all ease-in duration-500 ${
          isMenuOpen ? "top-20" : "top-[-490px]"
        }`}
      >
        <li className="mx-2 my-2 md:my-0">
          <Link href="#hero" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <button className="navButton">Home</button>
          </Link>
        </li>
        <li className="mx-2 my-2 md:my-0">
          <Link href="#about" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <button className="navButton">About</button>
          </Link>
        </li>
        <li className="mx-2 my-2 md:my-0">
          <Link href="#experience" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <button className="navButton">Experience</button>
          </Link>
        </li>
        <li className="mx-2 my-2 md:my-0">
          <Link href="#skills" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <button className="navButton">Skills</button>
          </Link>
        </li>
        <li className="mx-2 my-2 md:my-0">
          <Link href="#projects" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <button className="navButton">Projects</button>
          </Link>
        </li>
        <li className="mx-2 my-2 md:my-0">
          <Link href="#contact" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <button className="navButton">Contact</button>
          </Link>
        </li>
      </ul>

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
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in Touch
        </p>
      </div> */}
      {/* </Link> */}
    </header>
  );
}
