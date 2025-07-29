"use client";
import React from "react";
import { motion } from "framer-motion";
import { reviews } from "@/lib/data";
import CustomReviewCard from "./CustomReviewCard";
import { Button } from "./ui/button";
const ReviewSection = () => {
  return (
    <section className="w-full max-w-[1440px] h-screen   flex flex-col py-20 lg:items-center flex-1 space-y-10 justify-center min-h-screen items-center ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center space-y-2 px-4 sm:px-10 w-full h-full"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold font-sans text-center">
          What guests are saying
        </h1>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 font-sans text-center">
          Real experiences from travelers who chose Bedwellin their journeys
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {reviews.map((review, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <CustomReviewCard {...review} />
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Button className="bg-[#9333ea] hover:opacity-100 hover:bg-[#7e22ce] text-base font-medium lg:text-lg xl:text-2xl px-8 py-6 shadow-md flex text-white items-center justify-center rounded-lg cursor-pointer">
          Read more reviews
        </Button>
      </motion.div>
    </section>
  );
};

export default ReviewSection;
