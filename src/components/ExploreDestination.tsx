"use client";
import React, { useState, useEffect } from "react";
import ExpandImage from "./ExpandImage";
import { cities } from "@/lib/data";
import { motion } from "framer-motion";

const ExploreDestination = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full max-w-[1440px] h-screen flex flex-col py-20 lg:items-center flex-1 space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center space-y-2 px-4 sm:px-10"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold font-sans text-center">
          Explore destinations
        </h1>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 font-sans text-center">
          Discover amazing places and unique experiences across the United
          States
        </p>
      </motion.div>

      <div
        className={`flex relative items-center ${
          isMobile ? "flex-col" : "flex-row"
        } h-full w-full flex-1`}
      >
        {cities.map((city, i) => (
          <ExpandImage
            key={i}
            imgUrl={city.image}
            name={city.city}
            description={city.description}
            stays={city.stays}
            totalImages={cities.length}
            hoveredIndex={hoveredIndex}
            isHovered={!isMobile && hoveredIndex === i}
            onHover={() => !isMobile && setHoveredIndex(i)}
            onLeave={() => !isMobile && setHoveredIndex(null)}
            isMobile={isMobile}
            isClicked={isMobile && clickedIndex === i}
            onClickMobile={() => setClickedIndex(clickedIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
};

export default ExploreDestination;
