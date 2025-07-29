"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Banner = () => {
  return (
    <section
      className="w-full max-w-[1440px] min-h-[60vh] flex flex-col py-24 lg:items-center flex-1 space-y-10 justify-center rounded-3xl"
      style={{
        background:
          "linear-gradient(135deg, #f9f5ff 0%, #f3e8ff 60%, #ede9fe 100%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center space-y-2 px-4 sm:px-10 w-full h-full"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold font-sans text-center text-[#1f1f1f]">
          Join millions of hosts and guests
        </h1>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 font-sans text-center">
          Become part of the Bedwellin community and start your journey as a
          host or discover your next great stay
        </p>
      </motion.div>

      <div className="flex items-center flex-col lg:flex-row gap-y-4
       lg:space-x-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button className="bg-[#9333ea] hover:opacity-100 hover:bg-[#7e22ce] text-base font-medium lg:text-lg xl:text-2xl px-14 py-6 shadow-md flex text-white items-center justify-center rounded-lg cursor-pointer">
            Become A Host
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button className="border-[#9333ea] hover:opacity-100 hover:shadow-lg bg-transparent border hover:bg-transparent text-base font-medium lg:text-lg xl:text-2xl px-12 py-6 shadow-md flex text-[#9333ea] items-center justify-center rounded-lg cursor-pointer">
            Start Your Search
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
