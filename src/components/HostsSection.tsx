"use client";
import React from "react";
import { motion } from "framer-motion";
export const HostsSection = () => {
  return (
    <section className="w-full max-w-[1440px] px-4 sm:px-10 flex flex-col lg:flex-row py-20 gap-6 lg:items-center flex-1 space-x-8">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col flex-1 items-center md:items-start w-full justify-center space-y-6"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold font-sans text-center md:text-left">
          Why host on{" "}
          <span className="text-[#a855f7] font-semibold">BedwellIn</span>
        </h1>
        <p className=" text-sm md:text-base lg:text-lg xl:text-xl text-gray-600  font-sans text-center md:text-left">
          No matter what kind of space you have to share, you can earn money as
          a Bedwellin host.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:flex-[10%]"
      >
        {[
          {
            title: "Extra",
            spanWord: "income",
            desc: "Earn money sharing your extra space.",
            spanColor: "#34d399",
          },
          {
            title: "Flexible",
            desc: "Choose your own schedule.",
            spanWord: "hosting",
            spanColor: "#20c2d4",
          },
          {
            title: "Easy to",
            desc: "Step-by-step guidance to set up your listing.",
            spanWord: "start",
            spanColor: "#c084fc",
          },
          {
            title: "Global",
            desc: "Join millions creating memories.",
            spanWord: "community",
            spanColor: "#fb7185",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-4 border rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <h4 className="font-semibold text-xl xl:text-2xl mb-2">
              {item.title}{" "}
              <span style={{color:item.spanColor}}>{item.spanWord}</span>
            </h4>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
