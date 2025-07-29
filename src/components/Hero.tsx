"use client";
import { Hero1Carousel, Hero2Carousel, Hero3Carousel } from "@/lib/data";
import HeroCarousel from "./HeroCarousel";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full max-w-[1440px] px-4 sm:px-10 flex flex-col lg:flex-row py-12 lg:py-16 gap-10 lg:gap-6 overflow-x-hidden lg:items-center flex-1 space-x-8">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col flex-1 items-center md:items-start w-full justify-center space-y-4 lg:space-y-6"
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold font-sans text-center md:text-left">
          Stay at{" "}
          <span className="text-[#a855f7] font-semibold">BedwellIn</span> –
          Where Comfort Meets Style
        </h1>
        <p className=" text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600  font-sans text-center md:text-left">
          Book your perfect escape. Cozy rooms, great locations, effortless
          booking.
        </p>
        <button className="bg-[#a855f7] hover:bg-[#9333ea] cursor-pointer text-white text-base font-medium lg:text-lg xl:text-2xl px-6 py-3 rounded-full shadow-md transition-colors duration-300 font-sans">
          Become A Host
        </button>
      </motion.div>

      <div className="flex-1 max-w-full  flex items-center justify-center lg:flex-row flex-col space-y-3 lg:space-x-4">
        <div className=" w-full  lg:w-1/2 flex items-center justify-center">
          <HeroCarousel seconds={3000} cardId={1} images={Hero1Carousel} />
        </div>
        <div className=" w-full  lg:w-1/2 flex flex-col sm:flex-row  lg:flex-col items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 lg:space-x-0 lg:space-y-3">
          <HeroCarousel seconds={4500} cardId={2} images={Hero2Carousel} />
          <HeroCarousel seconds={6000} cardId={3} images={Hero3Carousel} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
