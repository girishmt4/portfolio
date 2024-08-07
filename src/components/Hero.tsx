import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { PageInfo } from "typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `The name is ${pageInfo?.name}...`,
      "Full Stack Developer",
      "<LovesToCode />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden z-0">
      {/* <div className="w-[90%] absolute top-[30%] bg-blue-900/40 left-0 h-[500px] overflow-hidden z-0"></div> */}
      <BackgroundCircles />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[1rem]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3 ">{text}</span>
          <Cursor cursorColor="var(--color-primary)" />
        </h1>

        {/* <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact Me</button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
