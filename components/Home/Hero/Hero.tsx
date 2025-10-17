"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { BsArrowRight } from "react-icons/bs";
import ParticlesHero from "./ParticleBackground";

const Hero = () => {
  return (
    <div id="home" className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <ParticlesHero />
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src={"/images/myself.jpg"}
          alt="heroimage"
          width={150}
          height={150}
          className="rounded-full object-cover border-8 border-[#0c0c48aa]"
        />
      </div>
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide">
        Creating web products,
        <br />
        brands,
        <span className="text-cyan-200"> and experiences.</span>
      </h1>
      <h2 className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
        Hi! I'm Supreecha - A passionate
        <span className="text-cyan-200 font-bold">
          <Typewriter
            options={{
              strings: [
                " Frontend Developer",
                " Backend Developer",
                " Web Developer",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
              wrapperClassName: "pl-2",
            }}
          />
        </span>
      </h2>

    </div>
  );
};

export default Hero;
