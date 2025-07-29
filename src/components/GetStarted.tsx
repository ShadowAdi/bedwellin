"use client";
import { projects } from "@/lib/data";
import React, { useRef } from "react";
import ScrollerCard from "./ScrollerCard";
import { useScroll } from "framer-motion";
import { Button } from "./ui/button";
import Badge from "./Badge";

const GetStarted = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={container}
      className="w-full max-w-[1440px] px-4 sm:px-10 flex flex-col py-16 lg:items-center flex-1  space-y-1 lg:space-y-16 h-screen"
    >
      <div className="flex flex-col items-center justify-center space-y-3">
        <Badge text="For Hosts" bgColor="#9333ea" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold font-sans text-center">
          It&apos;s easy to get started on Bedwellin
        </h1>
        <p className="text-base md:text-lg lg:text-xl xl:text-3xl text-gray-600 font-sans text-center">
          Join millions of hosts on Bedwellin to share your space and earn extra
          income
        </p>
      </div>

      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <ScrollerCard
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}

      <Button className="bg-[#9333ea] hover:opacity-100 hover:bg-[#7e22ce] text-base font-medium lg:text-lg xl:text-2xl  px-14 py-6  shadow-md flex text-white items-center justify-center rounded-lg cursor-pointer w-max mx-auto">
        Start Hosting
      </Button>
    </section>
  );
};

export default GetStarted;
