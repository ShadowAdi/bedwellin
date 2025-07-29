"use client";
import React from "react";
import { motion } from "framer-motion";
import Badge from "./Badge";
const PerfectStay = () => {
  return (
    <section className="w-full max-w-[1440px] px-4 sm:px-10 flex flex-col lg:flex-row py-20 gap-6 lg:items-center flex-1 space-x-8 ">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col flex-1 items-center md:items-start w-full justify-center space-y-6"
      >
        <Badge text="For Guests" bgColor="#267493" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold font-sans text-center md:text-left">
          Find your{" "}
          <span className="text-[#a855f7] font-semibold">perfect</span> stay
        </h1>
        <p className=" text-sm md:text-base lg:text-lg xl:text-xl text-gray-600  font-sans text-center md:text-left">
          Discover entire homes and private rooms perfect for any trip.
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
            title: "Unique",
            spanWord: "stays",
            desc: "Stay in unique spaces you won't find anywhere else, from treehouses to castles.",
            spanColor: "#fb7185",
          },
          {
            title: "Trusted",
            desc: "Stay with verified hosts who are committed to providing great hospitality.",
            spanWord: "hosts",
            spanColor: "#20c2d4",
          },
          {
            title: "Local",
            desc: "Connect with local hosts and discover hidden gems in every destination.",
            spanWord: "experiences",
            spanColor: "#34d399",
          },
          {
            title: "Peace of",
            desc: "Book with confidence with our guest protection and 24/7 customer support.",
            spanWord: "mind",
            spanColor: "#c084fc",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-4 border rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <h4 className="font-semibold text-xl xl:text-2xl mb-2">
              {item.title}{" "}
              <span style={{ color: item.spanColor }}>{item.spanWord}</span>
            </h4>
            <p className="text-sm  text-gray-500">{item.desc}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default PerfectStay;
